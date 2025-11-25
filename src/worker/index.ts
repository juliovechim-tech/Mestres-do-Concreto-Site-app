import { Hono } from "hono";
import {
  exchangeCodeForSessionToken,
  getOAuthRedirectUrl,
  authMiddleware,
  deleteSession,
  MOCHA_SESSION_TOKEN_COOKIE_NAME,
} from "@getmocha/users-service/backend";
import { getCookie, setCookie } from "hono/cookie";

const app = new Hono<{ Bindings: Env }>();

// OAuth redirect URL
app.get("/api/oauth/google/redirect_url", async (c) => {
  const redirectUrl = await getOAuthRedirectUrl("google", {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  return c.json({ redirectUrl }, 200);
});

// Exchange code for session token
app.post("/api/sessions", async (c) => {
  const body = await c.req.json();

  if (!body.code) {
    return c.json({ error: "No authorization code provided" }, 400);
  }

  const sessionToken = await exchangeCodeForSessionToken(body.code, {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 60 * 24 * 60 * 60, // 60 days
  });

  return c.json({ success: true }, 200);
});

// Get current user
app.get("/api/users/me", authMiddleware, async (c) => {
  const mochaUser = c.get("user");
  
  if (!mochaUser) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  
  // Check if user exists in our database
  const userRecord = await c.env.DB.prepare(
    "SELECT * FROM users WHERE mocha_user_id = ?"
  )
    .bind(mochaUser.id)
    .first();

  // Create user record if doesn't exist
  if (!userRecord) {
    await c.env.DB.prepare(
      "INSERT INTO users (mocha_user_id, name) VALUES (?, ?)"
    )
      .bind(mochaUser.id, mochaUser.google_user_data.name || mochaUser.email)
      .run();
  }

  return c.json(mochaUser);
});

// Logout
app.get("/api/logout", async (c) => {
  const sessionToken = getCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME);

  if (typeof sessionToken === "string") {
    await deleteSession(sessionToken, {
      apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
      apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
    });
  }

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, "", {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 0,
  });

  return c.json({ success: true }, 200);
});

// Get published courses
app.get("/api/courses", async (c) => {
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM courses WHERE is_published = 1 ORDER BY created_at DESC"
  ).all();

  return c.json(results);
});

// Get course details with modules
app.get("/api/courses/:id", async (c) => {
  const courseId = c.req.param("id");

  const course = await c.env.DB.prepare(
    "SELECT * FROM courses WHERE id = ?"
  )
    .bind(courseId)
    .first();

  if (!course) {
    return c.json({ error: "Course not found" }, 404);
  }

  const { results: modules } = await c.env.DB.prepare(
    "SELECT * FROM modules WHERE course_id = ? ORDER BY order_index ASC"
  )
    .bind(courseId)
    .all();

  return c.json({ ...course, modules });
});

// Get available products
app.get("/api/products", async (c) => {
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM products WHERE is_available = 1 ORDER BY name ASC"
  ).all();

  return c.json(results);
});

export default app;
