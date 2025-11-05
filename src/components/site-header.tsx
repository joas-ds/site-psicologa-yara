export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold">Yara Sabrine, Psicóloga</a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/sobre">Sobre</a>
          <a href="/atendimento">Atendimento</a>
          <a href="/faq">Perguntas</a>
          <a href="/contato">Contato</a>
        </nav>
        <a href="/contato" className="rounded-2xl px-4 py-2 text-sm font-medium bg-slate-900 text-white">
          Agendar sessão
        </a>
      </div>
    </header>
  );
}
