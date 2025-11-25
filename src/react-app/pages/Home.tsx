import { useNavigate } from "react-router";
import { GraduationCap, Package, Sparkles, CheckCircle2, Hammer } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Marca */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Hammer className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400">
                Mestres do Concreto
              </p>
              <p className="text-xs text-slate-400">
                Aprenda. Aplique. Construa.
              </p>
            </div>
          </div>

          {/* Navegação */}
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

          {/* CTA Header */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/courses")}
              className="hidden md:inline-flex items-center gap-2 rounded-xl border border-orange-500/60 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-300 hover:bg-orange-500/20 transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              Ver trilhas de cursos
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-slate-900 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Glow de fundo */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 py-12 lg:py-16 relative">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
              {/* Texto principal */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-4">
                  Formação · Produtos · Negócio
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-50 mb-4">
                  Concreto não é só material.
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    É ofício, ciência e acabamento.
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 max-w-xl mb-6">
                  A Mestres do Concreto conecta tecnologia, prática de obra e visão de negócio
                  para formar profissionais que sabem dosar, moldar e vender soluções em concreto
                  de alto desempenho, arquitetônico e autoral.
                </p>

                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  De pedreiros e marceneiros a arquitetos e engenheiros: aqui você aprende a
                  transformar traço em produto, bancada em portfólio, peça em faturamento.
                </p>

                {/* CTAs principais */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button
                    onClick={() => navigate("/courses")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 hover:scale-[1.01] hover:shadow-orange-500/40 transition-all"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Ver cursos e trilhas
                  </button>

                  <button
                    onClick={() => navigate("/products")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-200 hover:border-orange-400 hover:text-orange-200 transition-all"
                  >
                    <Package className="w-4 h-4" />
                    Conhecer kits & sistemas
                  </button>
                </div>

                {/* Bullets de valor */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-[2px]" />
                    <div>
                      <p className="font-medium text-slate-100">Conteúdo aplicado</p>
                      <p className="text-[11px] text-slate-400">
                        Do laboratório à bancada, sempre com foco em resultado real.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-[2px]" />
                    <div>
                      <p className="font-medium text-slate-100">Tecnologia & prática</p>
                      <p className="text-[11px] text-slate-400">
                        UHPC, GRC, microconcretos, revestimentos e concretos especiais.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-[2px]" />
                    <div>
                      <p className="font-medium text-slate-100">Negócio & posicionamento</p>
                      <p className="text-[11px] text-slate-400">
                        Apoio para transformar técnica em portfólio, marca e faturamento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card lateral / Destaque */}
              <div className="relative">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 shadow-[0_0_60px_rgba(15,23,42,0.9)]">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300 mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>Formação Mestres</span>
                  </div>

                  <h2 className="text-base sm:text-lg font-semibold text-slate-50 mb-2">
                    Do traço ao produto acabado.
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mb-4">
                    Cursos, kits e mentoria para quem quer dominar concreto arquitetônico,
                    mobiliário em concreto, revestimentos poliméricos e sistemas de alto desempenho.
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300 mb-4">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3">
                      <p className="font-semibold text-slate-100 mb-1">
                        Trilhas de cursos
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Formações progressivas para evoluir da base à alta performance.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3">
                      <p className="font-semibold text-slate-100 mb-1">
                        Kits & sistemas
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Insumos e guias técnicos para produzir com padrão Mestres.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/courses")}
                    className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all"
                  >
                    Começar pela trilha de cursos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Para quem é */}
        <section className="border-b border-slate-900 bg-slate-950">
          <div className="container mx-auto px-6 py-10 lg:py-12">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400 mb-2">
                  Para quem é
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                  Não é curso “genérico”. É concreto na veia.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4 text-xs sm:text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="font-semibold text-slate-100 mb-1">Pedreiros & aplicadores</p>
                <p className="text-slate-400">
                  Para quem já está na obra e quer subir o nível, entregar acabamento e valor.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="font-semibold text-slate-100 mb-1">Marceneiros & makers</p>
                <p className="text-slate-400">
                  Para quem domina madeira e quer entrar em mobiliário e peças em concreto.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="font-semibold text-slate-100 mb-1">Arquitetos & designers</p>
                <p className="text-slate-400">
                  Para tirar do papel peças autorais com técnica, durabilidade e processo.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <p className="font-semibold text-slate-100 mb-1">Engenheiros & concreteiros</p>
                <p className="text-slate-400">
                  Para integrar traço, aditivos, fibras e cura em soluções replicáveis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action final */}
        <section className="bg-slate-950">
          <div className="container mx-auto px-6 py-10 lg:py-12">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-8 sm:px-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400 mb-2">
                  Próximo passo
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-2">
                  Comece por uma trilha e deixe o concreto fazer o resto.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Escolha um curso ou kit que faça sentido para o seu momento. O importante
                  é começar — o resto a gente constrói junto, com técnica, simplicidade e fé
                  de que dá para viver bem do que se faz com as próprias mãos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => navigate("/courses")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all"
                >
                  <GraduationCap className="w-4 h-4" />
                  Ver todos os cursos
                </button>
                <button
                  onClick={() => navigate("/products")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 text-xs sm:text-sm font-medium text-slate-200 hover:border-orange-400 hover:text-orange-200 transition-all"
                >
                  <Package className="w-4 h-4" />
                  Ver kits & sistemas
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6 py-6 text-center text-[11px] sm:text-xs text-slate-500">
          &copy; 2025 Mestres do Concreto. Todos os direitos reservados. Aprenda. Aplique. Construa.
        </div>
      </footer>
    </div>
  );
}