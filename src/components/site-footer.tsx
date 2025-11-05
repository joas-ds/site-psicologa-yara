export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Yara Sabrine Rodrigues | CRP 00/000000</p>
        <div className="flex gap-4">
          <a href="/politica-de-privacidade">Privacidade</a>
          <a href="/termos">Termos</a>
        </div>
      </div>
    </footer>
  );
}
