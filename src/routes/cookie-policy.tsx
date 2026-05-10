import { createFileRoute, Link } from "@tanstack/react-router";
import { Cookie, ArrowLeft, Settings } from "lucide-react";
import { openCookiePreferences } from "@/lib/cookieConsent";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — EasyLifeDog" },
      { name: "description", content: "Informativa sull'uso dei cookie del sito EasyLifeDog e gestione delle preferenze." },
      { property: "og:title", content: "Cookie Policy — EasyLifeDog" },
      { property: "og:description", content: "Informativa sull'uso dei cookie del sito EasyLifeDog." },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Torna alla home
          </Link>
          <button onClick={openCookiePreferences}
            className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
            <Settings className="h-4 w-4" /> Gestisci preferenze
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Cookie className="h-6 w-6" />
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          style={{ fontFamily: "var(--font-display)" }}>
          Cookie Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <Section title="Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo che i siti web visitati salvano sul tuo dispositivo
              per memorizzare informazioni utili al funzionamento del sito o per migliorare la tua esperienza di navigazione.
            </p>
          </Section>

          <Section title="Tipologie di cookie utilizzati">
            <ul className="space-y-4">
              <li>
                <p className="font-semibold text-foreground">Cookie tecnici (necessari)</p>
                <p>Garantiscono il funzionamento del sito e dei servizi richiesti dall'utente. Non richiedono consenso.</p>
              </li>
              <li>
                <p className="font-semibold text-foreground">Cookie analitici</p>
                <p>Utilizzati per raccogliere informazioni in forma aggregata su come gli utenti utilizzano il sito, al fine di migliorarne usabilità e contenuti.</p>
              </li>
              <li>
                <p className="font-semibold text-foreground">Cookie di marketing</p>
                <p>Utilizzati per mostrarti contenuti e messaggi più rilevanti rispetto ai tuoi interessi.</p>
              </li>
            </ul>
          </Section>

          <Section title="Gestione delle preferenze">
            <p>
              Puoi modificare le tue preferenze in qualsiasi momento cliccando sul pulsante qui sotto
              o utilizzando il link "Preferenze cookie" nel footer del sito.
            </p>
            <button onClick={openCookiePreferences}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90">
              <Settings className="h-4 w-4" /> Gestisci preferenze cookie
            </button>
            <p className="mt-4">
              Puoi inoltre disabilitare i cookie direttamente dalle impostazioni del tuo browser.
              Disabilitare i cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
            </p>
          </Section>

          <Section title="Titolare del trattamento">
            <p>
              Dott. Mario Rossi — EasyLifeDog<br />
              Email: <a href="mailto:info@easylifedog.it" className="text-primary hover:underline">info@easylifedog.it</a><br />
              P. IVA: IT00000000000
            </p>
          </Section>

          <Section title="Modifiche alla policy">
            <p>
              Eventuali aggiornamenti a questa Cookie Policy saranno pubblicati su questa pagina,
              con indicazione della data di ultimo aggiornamento.
            </p>
          </Section>
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} EasyLifeDog — Tutti i diritti riservati
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
