import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import CoursesPage from "@/react-app/pages/Courses";
import ProductsPage from "@/react-app/pages/Products";
import AboutPage from "@/react-app/pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}