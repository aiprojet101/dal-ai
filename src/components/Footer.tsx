"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white">
                D
              </div>
              <span className="text-lg font-bold">
                Dal-<span className="gradient-text">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Agence web specialisee dans la creation de sites internet
              modernes et performants pour particuliers, PME et PMI.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Services", "Tarifs", "Processus", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {[
                "Mentions legales",
                "Politique de confidentialite",
                "CGV",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {year} Dal-AI. Tous droits reserves.
          </p>
          <p className="text-xs text-muted/60">
            dal-ai.com
          </p>
        </div>
      </div>
    </footer>
  );
}
