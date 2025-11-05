export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Terapia ética, humana e baseada em evidências
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Atendimento online e presencial. Foco em bem-estar emocional, ansiedade e relacionamentos.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contato" className="rounded-2xl px-5 py-3 font-medium bg-slate-900 text-white">Marcar conversa</a>
            <a href="/sobre" className="rounded-2xl px-5 py-3 font-medium border border-slate-300">Conheça meu trabalho</a>
          </div>
        </div>
        <div className="aspect-[4/3] md:aspect-square rounded-3xl bg-slate-200 shadow-inner" aria-label="Foto/ilustração profissional" />
      </section>
    </main>
  );
}
