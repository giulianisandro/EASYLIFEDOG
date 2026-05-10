import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-card p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted transition"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary text-2xl">✓</div>
            <h3 className="text-2xl font-semibold text-foreground">Richiesta inviata</h3>
            <p className="mt-2 text-muted-foreground">Ti risponderò entro 24 ore via email.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-foreground">Prenota la tua consulenza</h3>
            <p className="mt-1 text-sm text-muted-foreground">Compila il modulo, ti ricontatto entro 24h.</p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <Field label="Nome e cognome" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Telefono" name="phone" type="tel" />
              <Field label="Razza del cane" name="breed" placeholder="es. Labrador, meticcio..." />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Problema principale</label>
                <textarea
                  name="problem"
                  rows={3}
                  required
                  placeholder="Raccontami brevemente la situazione..."
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
              >
                Invia richiesta
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50"
      />
    </div>
  );
}
