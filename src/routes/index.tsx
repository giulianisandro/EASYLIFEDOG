import { createFileRoute, Link } from "@tanstack/react-router";
import { openCookiePreferences } from "@/lib/cookieConsent";
import { useState } from "react";
import {
  Dog, Heart, AlertCircle, Cloud, Baby, Moon,
  MessageCircle, Video, CalendarCheck, FileText,
  Home, Eye, Wallet, MapPin, Star, Check, Menu, X,
  Mail, Phone, Instagram, Facebook, Youtube,
} from "lucide-react";
import heroDog from "@/assets/hero-dog.jpg";
import vetPortrait from "@/assets/vet-portrait.jpg";
import { ContactModal } from "@/components/ContactModal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EasyLifeDog – Consulenze cinofile online con dottore in medicina veterinaria" },
      { name: "description", content: "Risolvi i problemi di comportamento del tuo cane con un dottore in medicina veterinaria, educatore cinofilo da 10+ anni. Consulenze online in tutta Italia." },
    ],
  }),
});

function Index() {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Dog className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight" style={{fontFamily:'var(--font-display)'}}>
              EasyLifeDog
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <button onClick={() => scrollTo("problemi")} className="hover:text-foreground transition">Problemi</button>
            <button onClick={() => scrollTo("chi-sono")} className="hover:text-foreground transition">Chi sono</button>
            <button onClick={() => scrollTo("come-funziona")} className="hover:text-foreground transition">Come funziona</button>
            <button onClick={() => scrollTo("prezzi")} className="hover:text-foreground transition">Prezzi</button>
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90 sm:inline-flex"
            >
              Prenota consulenza
            </button>
            <button
              className="md:hidden rounded-full p-2 text-foreground"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Menu"
            >
              {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="border-t border-border/60 md:hidden">
            <div className="flex flex-col px-6 py-3 text-sm">
              {[["Problemi","problemi"],["Chi sono","chi-sono"],["Come funziona","come-funziona"],["Prezzi","prezzi"]].map(([l,id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="py-2 text-left text-foreground">{l}</button>
              ))}
              <button onClick={() => { setOpen(true); setNavOpen(false); }} className="mt-2 rounded-full bg-primary py-2.5 text-primary-foreground">Prenota</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-accent shadow-card">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Consulenze online in tutta Italia
            </span>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              Migliora la vita <br/>con il tuo <span style={{color:'var(--primary)'}}>cane</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Consulenze cinofile online con un dottore in medicina veterinaria, educatore cinofilo da 10+ anni. Ascolto, comprensione, soluzioni concrete. 
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("problemi")}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-card transition hover:bg-muted"
              >
                Scopri come funziona
              </button>
              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
              >
                Parla con il dottore
              </button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Albo veterinario</div>
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> 10+ anni</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={heroDog}
              alt="Donna serena con il suo cane in un prato"
              width={1536}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Problemi */}
      <section id="problemi" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead eyebrow="Problemi che risolvo" title="Capisco il tuo cane. E te." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-border bg-card p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chi sono */}
      <section id="chi-sono" className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[2fr_3fr] md:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl" style={{background:'var(--sage)', opacity:0.25}} />
            <img
              src={vetPortrait}
              alt="Dott. veterinario sorridente con cucciolo"
              width={896} height={1152}
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-soft"
            />
          </div>
          <div>
            <SectionHead eyebrow="Chi sono" title="Non etichetto i cani come problematici. Li ascolto." align="left" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sono il <strong className="text-foreground">Dott. [Cognome]</strong>, laureato in Medicina Veterinaria.
              Da oltre 10 anni aiuto cani e proprietari a trovare un equilibrio sereno, unendo
              competenze cliniche e comportamentali.
            </p>
            <ul className="mt-8 space-y-3">
              {["Iscritto all'Albo dei Medici Veterinari","Oltre 10 anni di esperienza sul campo","Consulenze online in tutta Italia"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-3.5 w-3.5" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section id="come-funziona" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead eyebrow="Come funziona" title="Quattro passi, un percorso chiaro." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground" style={{background:'var(--primary)'}}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-medium uppercase tracking-wider" style={{color:'var(--accent)'}}>Passo {i+1}</div>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prezzi */}
      <section id="prezzi" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Servizi e prezzi" title="Scegli il percorso giusto per voi." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 shadow-card transition ${p.featured ? "border-2 bg-card" : "border border-border bg-card"}`}
                style={p.featured ? { borderColor: 'var(--primary)' } : {}}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Più scelto
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground">€{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setOpen(true)}
                  className={`mt-7 w-full rounded-full py-3 text-sm font-medium transition ${p.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border bg-background text-foreground hover:bg-muted"}`}
                >
                  Inizia
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perché online */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead eyebrow="Perché online" title="Tutti i vantaggi, nessuno stress." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyOnline.map((w) => (
            <div key={w.title} className="rounded-2xl bg-card p-6 text-center shadow-card border border-border">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style={{background:'var(--beige)', color:'var(--accent)'}}>
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{w.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonianze */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Testimonianze" title="Storie di equilibrio ritrovato." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="rounded-2xl bg-card p-7 shadow-card border border-border">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-foreground leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">— {t.author}, {t.city}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl p-12 text-center md:p-16" style={{background:'var(--gradient-hero)'}}>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Prenota una chiamata gratuita di 15 minuti
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Raccontami il tuo cane. Ti dirò se posso aiutarti — senza impegno.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-soft transition hover:bg-primary/90"
          >
            Prenota gratis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Dog className="h-4 w-4" />
              </span>
              <span className="font-display text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>EasyLifeDog</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Consulenze cinofile online con un Medico Veterinario ed Educatore Cinofilo.
              Una relazione più serena tra te e il tuo cane, ovunque tu sia.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary/15 hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary/15 hover:text-primary">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground transition hover:bg-primary/15 hover:text-primary">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="text-sm">
            <h4 className="mb-4 font-semibold text-foreground">Contatti</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@easylifedog.it" className="hover:text-foreground transition">info@easylifedog.it</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+390000000000" className="hover:text-foreground transition">+39 000 000 0000</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Consulenze 100% online</span>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h4 className="mb-4 font-semibold text-foreground">Informazioni</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><button onClick={() => scrollTo('servizi')} className="hover:text-foreground transition">Servizi</button></li>
              <li><button onClick={() => scrollTo('chi-sono')} className="hover:text-foreground transition">Chi sono</button></li>
              <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
              <li><Link to="/cookie-policy" className="hover:text-foreground transition">Cookie Policy</Link></li>
              <li><button onClick={openCookiePreferences} className="hover:text-foreground transition">Preferenze cookie</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} EasyLifeDog — Tutti i diritti riservati</p>
            <p>Dott. Mario Rossi · P. IVA IT00000000000 · Iscr. Albo Veterinari n. 0000</p>
          </div>
        </div>
      </footer>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

function SectionHead({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{color:'var(--primary)'}}>{eyebrow}</span>
      <h2 className={`mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl ${align==="center" ? "mx-auto max-w-2xl" : ""}`}>
        {title}
      </h2>
    </div>
  );
}

const problems = [
  { icon: AlertCircle, title: "Abbai e distruzione", desc: "Quando casa diventa un campo di battaglia. Capiamo insieme la causa." },
  { icon: Heart, title: "Ansia da separazione", desc: "Il tuo cane soffre quando esci? Lavoriamo sulla sicurezza emotiva." },
  { icon: Dog, title: "Aggressività e risorse", desc: "Ringhi, morsi, gestione del cibo o degli oggetti. Senza giudizi." },
  { icon: Cloud, title: "Paure e fobie", desc: "Botti, temporali, persone, altri cani: piano di desensibilizzazione." },
  { icon: Baby, title: "Cucciolo morde e sporca", desc: "Le basi giuste fin da subito, per crescere un adulto sereno." },
  { icon: Moon, title: "Cani anziani", desc: "Cambiamenti emotivi e cognitivi: accompagniamo con dolcezza." },
];

const steps = [
  { icon: MessageCircle, title: "Parlami del tuo cane", desc: "Un breve modulo o chat iniziale per inquadrare la situazione." },
  { icon: Video, title: "Inviami i video", desc: "Casa, passeggiate, momenti critici: osservo nel contesto reale." },
  { icon: CalendarCheck, title: "Videochiamata 1h", desc: "Ci confrontiamo su Zoom o Google Meet, senza fretta." },
  { icon: FileText, title: "Piano + follow-up", desc: "Ricevi un piano scritto e 2 settimane di supporto via chat." },
];

const plans = [
  { name: "Consulenza singola", price: "89", tag: "1 ora + piano scritto", features: ["Videochiamata di 60 min", "Piano comportamentale scritto", "1 settimana di chat"] },
  { name: "Percorso 1 mese", price: "189", tag: "2 sedute + supporto chat", featured: true, features: ["2 videochiamate da 60 min", "Piano dettagliato e personalizzato", "Chat illimitata per 30 giorni", "Revisione video"] },
  { name: "Abbonamento 3 mesi", price: "449", tag: "Percorso completo", features: ["4 videochiamate", "Piano evolutivo a tappe", "Chat dedicata 90 giorni", "Revisione video continua"] },
];

const whyOnline = [
  { icon: Home, title: "Zero stress da trasporto", desc: "Il cane resta nel suo ambiente." },
  { icon: Eye, title: "Lo osservo nel reale", desc: "Vedo davvero come vive." },
  { icon: Wallet, title: "Costi ridotti", desc: "Niente spostamenti né attese." },
  { icon: MapPin, title: "Ovunque tu sia", desc: "Tutta Italia, anche all'estero." },
];

const testimonials = [
  { quote: "Il cane ringhiava ai bambini. In 3 settimane è cambiato tutto. Finalmente riusciamo a vivere sereni.", author: "Maria", city: "Milano" },
  { quote: "Pensavo fosse un cane impossibile. Il dottore mi ha aiutato a capirlo davvero, non a 'correggerlo'.", author: "Luca", city: "Roma" },
  { quote: "L'ansia da separazione di Birba era diventata insostenibile. Ora resta a casa tranquilla.", author: "Giulia", city: "Torino" },
];
