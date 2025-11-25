import { useNavigate } from "react-router";
import {
  Hammer,
  GraduationCap,
  Package,
  Sparkles,
  User,
  Users,
  BookOpen,
  HeartHandshake,
  Crosshair,
} from "lucide-react";

export default function AboutPage() {
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
              Ver trilhas
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="flex-1">
        {/* Seção principal */}
        <section className="border-b border-slate-900 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
          {/* Glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-400/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-6 py-10 lg:py-14 relative">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
                Sobre a Mestres do Concreto
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-50 mb-4">
                Concreto, ofício e propósito:
                <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  quando ciência encontra mão na massa.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mb-4">
                A Mestres do Concreto nasceu da união entre técnica, propósito e um chamado:
                transformar conhecimento em prática, prática em produto e produto em legado.
              </p>
              <p className="text-sm text-slate-400">
                Não somos apenas uma escola. Somos um laboratório, uma mentoria e um movimento
                para quem quer viver do concreto com excelência — da primeira mistura ao
                portfólio consolidado, sempre com ética, simplicidade e fé.
              </p>
            </div>

            {/* Cards visão / o que fazemos */}
            <div className="grid gap-5 md:grid-cols-3 text-xs sm:text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <p className="font-semibold text-slate-100">O que acreditamos</p>
                </div>
                <p className="text-slate-300 mb-2">
                  Que concreto é mais do que material: é vocação, ofício e responsabilidade.
                </p>
                <p className="text-slate-400">
                  Acreditamos que conhecimento técnico, aplicado com humildade e propósito,
                  muda carreiras, negócios e gerações.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-orange-400" />
                  <p className="font-semibold text-slate-100">O que fazemos</p>
                </div>
                <p className="text-slate-300 mb-2">
                  Formamos, orientamos e equipamos quem trabalha com concreto.
                </p>
                <p className="text-slate-400">
                  Cursos, trilhas, kits, consultorias e projetos que unem UHPC, GRC,
                  concretos arquitetônicos, microconcretos e revestimentos de alto desempenho
                  com a realidade de obra e de oficina.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Crosshair className="w-4 h-4 text-orange-400" />
                  <p className="font-semibold text-slate-100">Nosso propósito</p>
                </div>
                <p className="text-slate-300 mb-2">
                  Elevar o padrão de quem vive do concreto — técnica, negócio e caráter.
                </p>
                <p className="text-slate-400">
                  Formar profissionais que honram o próprio ofício, constroem com consciência
                  e encontram dignidade no que fazem com as próprias mãos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fundadores */}
        <section className="border-b border-slate-900 bg-slate-950">
          <div className="container mx-auto px-6 py-10 lg:py-12">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400 mb-2">
                  Quem está por trás
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                  Mestres que vêm da obra, do laboratório e da vida real.
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Julio */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      Julio Vechim
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Engenheiro Civil · Tecnologia do Concreto · Mentor
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-3">
                  Engenheiro civil com mais de 25 anos dedicados à engenharia e tecnologia
                  do concreto. De UHPC a concretos arquitetônicos, da química aos processos,
                  Julio é o mentor que traduz alta performance em simplicidade prática.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mb-3">
                  Alquimista contemporâneo do concreto, cozinheiro de alma, leitor da Bíblia,
                  pai, líder e discípulo de Cristo. Ensina como quem constrói; constrói como
                  quem serve — integrando ciência, prática e propósito.
                </p>
                <p className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-300">Atuação: </span>
                  UHPC, concretos de alto desempenho, concretos arquitetônicos, sistemas
                  poliméricos, mentorias técnicas e desenvolvimento de produtos.
                </p>
              </div>

              {/* Vinícius */}
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-500 flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-200" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">
                      Vinícius
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Engenheiro de Produção · Execução & Moldes
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-3">
                  Engenheiro de Produção com atuação prática em aço, madeira, moldes e
                  concreto. Executor nato, detalhista, criativo e focado em transformar
                  desenho em peça, intenção em protótipo, protótipo em linha de produção.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mb-3">
                  É a força jovem da Mestres do Concreto: organiza processo, simplifica
                  montagem, testa, ajusta, corrige e ajuda você a tirar do papel uma
                  linha de produtos replicável.
                </p>
                <p className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-300">Atuação: </span>
                  desenvolvimento de moldes, fluxo produtivo, montagem de oficinas,
                  padronização de processos e suporte à produção de peças em concreto
                  arquitetônico e mobiliário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O que oferecemos */}
        <section className="border-b border-slate-900 bg-slate-950">
          <div className="container mx-auto px-6 py-10 lg:py-12">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400 mb-2">
                  O que entregamos
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                  Conhecimento, kits, suporte e visão de negócio.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4 text-xs sm:text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">Cursos & trilhas</p>
                <p className="text-slate-400">
                  Formações para quem quer dominar UHPC, concretos especiais, revestimentos
                  e mobiliário em concreto.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">Kits & sistemas</p>
                <p className="text-slate-400">
                  Kits técnicos com traços, guias, processos e recomendações de materiais.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">Consultoria & projetos</p>
                <p className="text-slate-400">
                  Apoio para desenvolvimento de linhas de produtos, oficinas, coleções
                  e soluções em concreto arquitetônico.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="font-semibold text-slate-100 mb-1">Mentoria & direção técnica</p>
                <p className="text-slate-400">
                  Acompanhamento técnico e estratégico para quem quer dar o próximo passo
                  na carreira e no negócio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-slate-950">
          <div className="container mx-auto px-6 py-10 lg:py-12">
            <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-8 sm:px-8 sm:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-400 mb-2">
                  Próximo passo
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-2">
                  Comece pequeno, mas comece certo.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Se você sente que o concreto faz parte da sua história — na obra, no ateliê
                  ou no escritório —, nós estamos aqui para caminhar junto.  
                  Um curso, um kit ou uma mentoria podem ser o início de uma nova fase
                  da sua jornada profissional.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => navigate("/courses")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all"
                >
                  <GraduationCap className="w-4 h-4" />
                  Ver cursos
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