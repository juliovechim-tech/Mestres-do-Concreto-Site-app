import { GraduationCap, Package } from "lucide-react";
import { useNavigate } from "react-router";
import { products } from "@/react-app/data/products";

export default function ProductsPage() {
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
                Kits, insumos & soluções
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
            onClick={() => navigate("/courses")}
          >
            <Package className="w-4 h-4" />
            Ver cursos
          </button>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-400 mb-2">
              Kits & soluções Mestres
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Kits e sistemas para tirar o concreto do papel.
            </h1>
            <p className="mt-3 text-sm md:text-base text-slate-400 max-w-2xl">
              Produtos pensados para transformar conhecimento em negócio:
              kits prontos, insumos e sistemas completos para quem quer produzir
              com desempenho e acabamento.
            </p>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
            Nenhum produto disponível no momento. Em breve novidades.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((product) => product.isAvailable)
              .map((product) => (
                <div
                  key={product.id}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-orange-500/70 transition-all duration-200 flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex flex-col gap-1">
                      <span className="inline-flex items-center rounded-full bg-slate-900/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-orange-300">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="text-sm md:text-base font-semibold text-slate-50 mb-2">
                      {product.name}
                    </h2>
                    <p className="text-xs md:text-sm text-slate-400 mb-3 flex-1">
                      {product.description}
                    </p>

                    <p className="text-[11px] text-slate-500 mb-3">
                      <span className="font-semibold text-slate-300">Aplicação: </span>
                      {product.application}
                    </p>

                    {product.priceFrom && (
                      <p className="text-xs text-orange-300 mb-3">
                        A partir de{" "}
                        <span className="font-semibold">
                          R$ {product.priceFrom.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                      </p>
                    )}

                    <button className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-amber-400 text-slate-950 text-sm font-semibold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-200">
                      Quero cotar este kit
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