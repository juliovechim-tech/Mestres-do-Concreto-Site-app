import { GraduationCap, Package } from "lucide-react";
import { useNavigate } from "react-router";
import { courses } from "@/react-app/data/courses";

export default function CoursesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400">
                Mestres do Concreto
              </p>
              <p className="text-xs text-slate-400">
                Cursos & Tecnologia aplicada
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button
              className="text-slate-300 hover:text-orange-400 transition"
              onClick={() => navigate("/courses")}
            >
              Cursos
            </button>
            <button
              className="text-slate-300 hover:text-orange-400 transition"
              onClick={() => navigate("/products")}
            >
              Kits & Produtos
            </button>
            <button
              className="text-slate-300 hover:text-orange-400 transition"
              onClick={() => navigate("/about")}
            >
              Sobre
            </button>
          </nav>

          <button
            className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-400 hover:text-orange-400 transition"
            onClick={() => navigate("/products")}
          >
            <Package className="w-4 h-4" />
            Ver Kits
          </button>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400 mb-2">
              Trilhas Mestres
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Cursos para quem quer dominar o concreto na prática.
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-400 max-w-2xl">
              Conteúdo pensado para pedreiros, marceneiros, arquitetos e engenheiros
              que querem transformar concreto em produto, acabamento e legado.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end text-right text-xs text-slate-500">
            <span>Selecione um curso</span>
            <span>e fale com a equipe Mestres do Concreto.</span>
          </div>
        </div>

        {courses.length === 0 ? (
          <div className="border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
            Nenhum curso publicado ainda. Em breve novas turmas.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses
              .filter((course) => course.isPublished)
              .map((course) => (
                <div
                  key={course.id}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-orange-500/70 transition-all duration-200 flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={course.thumbnailUrl}
                      alt={course.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-orange-300">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-2">
                      {course.title}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400 mb-4 flex-1">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span>{course.durationHours}h de conteúdo</span>
                      <span className="font-semibold text-orange-400">
                        R$ {course.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </span>
                    </div>

                    <button className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 text-sm font-semibold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-200">
                      Quero saber mais
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-10">
        <div className="container mx-auto px-6 py-6 text-center text-xs text-slate-500">
          &copy; 2025 Mestres do Concreto. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}