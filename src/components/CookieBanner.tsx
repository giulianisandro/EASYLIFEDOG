import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie, X } from "lucide-react";
import {
  getCookiePreferences,
  saveCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookieConsent";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = getCookiePreferences();
    if (!existing) setShowBanner(true);
    else { setAnalytics(existing.analytics); setMarketing(existing.marketing); }

    const openHandler = () => {
      const cur = getCookiePreferences();
      if (cur) { setAnalytics(cur.analytics); setMarketing(cur.marketing); }
      setShowPrefs(true);
    };
    window.addEventListener("open-cookie-preferences", openHandler);
    return () => window.removeEventListener("open-cookie-preferences", openHandler);
  }, []);

  const acceptAll = () => {
    saveCookiePreferences({ analytics: true, marketing: true });
    setAnalytics(true); setMarketing(true);
    setShowBanner(false); setShowPrefs(false);
  };
  const rejectAll = () => {
    saveCookiePreferences({ analytics: false, marketing: false });
    setAnalytics(false); setMarketing(false);
    setShowBanner(false); setShowPrefs(false);
  };
  const saveCustom = () => {
    saveCookiePreferences({ analytics, marketing });
    setShowBanner(false); setShowPrefs(false);
  };

  return (
    <>
      {showBanner && !showPrefs && (
        <div className="fixed inset-x-0 bottom-0 z-40 p-4 sm:p-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-5 shadow-2xl sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground">Rispettiamo la tua privacy</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Utilizziamo cookie tecnici necessari e, previo consenso, cookie di analisi e marketing
                  per migliorare la tua esperienza. Leggi la nostra{" "}
                  <Link to="/cookie-policy" className="font-medium text-primary underline-offset-2 hover:underline">
                    Cookie Policy
                  </Link>.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button onClick={acceptAll}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90">
                    Accetta tutti
                  </button>
                  <button onClick={rejectAll}
                    className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
                    Rifiuta
                  </button>
                  <button onClick={() => setShowPrefs(true)}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
                    Personalizza
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPrefs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setShowPrefs(false)}>
          <div className="relative w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowPrefs(false)} aria-label="Chiudi"
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted transition">
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-semibold text-foreground">Preferenze cookie</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Scegli quali categorie di cookie vuoi attivare. Puoi modificare le preferenze in qualsiasi momento.
            </p>

            <div className="mt-6 space-y-3">
              <PrefRow
                title="Necessari"
                description="Indispensabili per il funzionamento del sito. Sempre attivi."
                checked={true} disabled
              />
              <PrefRow
                title="Analitici"
                description="Ci aiutano a capire come viene utilizzato il sito, in forma aggregata."
                checked={analytics}
                onChange={setAnalytics}
              />
              <PrefRow
                title="Marketing"
                description="Utilizzati per mostrarti contenuti più rilevanti."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button onClick={rejectAll}
                className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
                Rifiuta tutti
              </button>
              <button onClick={saveCustom}
                className="rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
                Salva preferenze
              </button>
              <button onClick={acceptAll}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90">
                Accetta tutti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PrefRow({ title, description, checked, disabled, onChange }: {
  title: string; description: string; checked: boolean; disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-background p-4">
      <div>
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </div>
      <label className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition ${checked ? "bg-primary" : "bg-muted"} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}>
        <input type="checkbox" className="sr-only" checked={checked} disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)} />
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${checked ? "translate-x-5" : "translate-x-0.5"}`} />
      </label>
    </div>
  );
}
