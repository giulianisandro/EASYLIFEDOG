import { createFileRoute, Link } from "@tanstack/react-router";
import { openCookiePreferences } from "@/lib/cookieConsent";
import { useState } from "react";
import {
  Dog, Heart, AlertCircle, Cloud, Baby, Moon,
  MessageCircle, Video, CalendarCheck, FileText,
  Home, Eye, Wallet, MapPin, Star, Check, Menu, X,
  Mail, Phone, Instagram, Facebook, Youtube,
} from "lucide-react";
import heroDog from "@/assets/ea081e74-7279-40ee-8e64-0f76d7952735.jpg";
import vetPortrait from "@/assets/vet-portrait.jpg";
import { ContactModal } from "@/components/ContactModal";

export const Route = createFileRoute("/")(({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sandro Giuliani – Educatore Cinofilo Relazionale" },
      { name: "description", content: "Aiuto persone e cani a costruire una relazione più serena — partendo dalla comprensione del comportamento, non dalla correzione. Consulenze online in tutta Italia." },
    ],
  }),
}));

/* ─── Google Font per i titoli ─── */
const fontLink = typeof document !== "undefined" && (() => {
  if (!document.getElementById("sg-cormorant")) {
    const l = document.createElement("link");
    l.id = "sg-cormorant";
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap";
    document.head.appendChild(l);
  }
})();

function Index() {
  const [open, setOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Dog className="h-5 w-5" />
            </span>
            <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Sandro Giuliani
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
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 sm:inline-flex"
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

      {/* ── HERO ── */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-warm)" }} />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-medium text-accent shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Consulenze online in tutta Italia
            </span>

            {/* ★ TITOLO OTTIMIZZATO */}
            <h1
              className="mt-5 leading-[1.08] tracking-tight text-foreground"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.6rem, 5.5vw, 4rem)", fontWeight: 500 }}
            >
              Il tuo cane non è un problema da risolvere.{" "}
              <em style={{ color: "var(--primary)", fontStyle: "italic" }}>
                È un linguaggio da imparare.
              </em>
            </h1>

            {/* ★ SOTTOTITOLO OTTIMIZZATO */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Aiuto le persone a costruire una relazione più serena con il proprio cane —
              partendo dalla comprensione del comportamento, non dalla correzione.
              Online, in tutta Italia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("problemi")}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition hover:bg-muted"
              >
                Scopri come funziona
              </button>
              {/* ★ CTA OTTIMIZZATA */}
              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Prenota la call gratuita →
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> 10+ anni sul campo</div>
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Approccio relazionale</div>
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> Tutta Italia</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={heroDog}
              alt="Persona serena con il suo cane"
              width={1536}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-lg"
            />
            {/* Badge social proof */}
            <div className="absolute -bottom-5 -left-4 hidden md:block bg-card rounded-2xl px-5 py-4 shadow-lg border border-border">
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 500, color: "var(--primary)", lineHeight: 1 }}>
                100+
              </div>
              <div className="text-xs text-muted-foreground mt-1">persone accompagnate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMI ── */}
      <section id="problemi" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead eyebrow="Situazioni che conosco bene" title="Forse ti riconosci qui." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-primary/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHI SONO ── */}
      <section id="chi-sono" className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[2fr_3fr] md:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-3xl" style={{ background: "var(--sage)", opacity: 0.25 }} />
            <img
              src={vetPortrait}
              alt="Sandro Giuliani educatore cinofilo relazionale"
              width={896} height={1152}
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
          <div>
            <SectionHead eyebrow="Chi sono" title="Prima capire, poi agire." align="left" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sono <strong className="text-foreground">Sandro Giuliani</strong>, educatore cinofilo relazionale con formazione universitaria in Medicina Veterinaria e oltre 10 anni di lavoro diretto con cani e proprietari in tutta Italia.
              <br /><br />
              Non utilizzo metodi coercitivi né soluzioni rapide. Il mio obiettivo è aiutarti a leggere il comportamento del tuo cane, migliorare la comunicazione tra voi e costruire una convivenza più naturale — passo dopo passo.
            </p>

            {/* Citazione editoriale */}
            <p className="mt-6 text-base italic border-l-2 border-primary/40 pl-4 text-muted-foreground"
               style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
              "Il mio obiettivo non è insegnare comandi. È aiutare persone e cani a ritrovare equilibrio,
              comprensione e serenità nella vita quotidiana."
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Oltre 10 anni di esperienza sul campo",
                "Formazione universitaria in Medicina Veterinaria",
                "Approccio relazionale ed etologico",
                "Consulenze online in tutta Italia",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4">
              Le consulenze riguardano educazione cinofila e supporto alla relazione uomo-cane.
              Non sostituiscono diagnosi, terapie o prestazioni veterinarie.
            </p>
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ── */}
      <section id="come-funziona" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead eyebrow="Come funziona" title="Tre passi per iniziare." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--primary)" }}>
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--accent)" }}>Passo {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PREZZI ── */}
      <section id="prezzi" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Servizi e prezzi" title="Scegli il percorso giusto per voi." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 shadow-sm transition ${p.featured ? "border-2 bg-card" : "border border-border bg-card"}`}
                style={p.featured ? { borderColor: "var(--primary)" } : {}}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Più scelto
                  </span>
                )}
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold text-foreground">€{p.price}</span>
                  {p.suffix && <span className="text-sm text-muted-foreground">{p.suffix}</span>}
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

      {/* ── PERCHÉ ONLINE ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHead eyebrow="Perché online" title="Tutti i vantaggi, nessuno stress." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyOnline.map((w) => (
            <div key={w.title} className="rounded-2xl bg-card p-6 text-center shadow-sm border border-border">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl" style={{ background: "var(--beige)", color: "var(--accent)" }}>
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{w.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIANZE ── */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHead eyebrow="Testimonianze" title="Storie di equilibrio ritrovato." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="relative rounded-2xl bg-card p-7 shadow-sm border border-border overflow-hidden">
                {/* Virgolette decorative */}
                <span className="absolute top-3 right-5 text-7xl leading-none text-border select-none pointer-events-none"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}>"</span>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 leading-relaxed text-foreground"
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic" }}>
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted-foreground">— {t.author}, {t.city}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINALE ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl p-12 text-center md:p-16" style={{ background: "var(--gradient-hero)" }}>
          {/* ★ HEADLINE CTA OTTIMIZZATA */}
          <h2
            className="tracking-tight text-foreground"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4.5vw, 3.4rem)", fontWeight: 500 }}
          >
            Una conversazione può cambiare tutto.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Prenota una call gratuita di 15 minuti. Mi racconti la situazione —
            capiremo insieme se e come posso aiutarti. Senza impegno.
          </p>
          {/* ★ BOTTONE CTA OTTIMIZZATO */}
          <button
            onClick={() => setOpen(true)}
            className="mt-8 rounded-full bg-primary px-10 py-4 text-base font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Prenota la tua call gratuita →
          </button>
          <p className="mt-4 text-sm text-muted-foreground">15 minuti · Online · Senza impegno</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Dog className="h-4 w-4" />
              </span>
              <span className="text-xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Sandro Giuliani</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Educatore cinofilo relazionale con formazione universitaria in Medicina Veterinaria.
              Consulenze online per una convivenza più serena tra te e il tuo cane, ovunque tu sia.
            </p>
            <p className="mt-3 text-xs text-muted-foreground italic">
              Le consulenze riguardano educazione cinofila e supporto relazionale. Non sostituiscono prestazioni veterinarie.
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
                <a href="mailto:info@sandrogiuliani.it" className="hover:text-foreground transition">info@sandrogiuliani.it</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+39" className="hover:text-foreground transition">+39 — — —</a>
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
              <li><button onClick={() => scrollTo("chi-sono")} className="hover:text-foreground transition">Chi sono</button></li>
              <li><button onClick={() => scrollTo("prezzi")} className="hover:text-foreground transition">Servizi</button></li>
              <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
              <li><Link to="/cookie-policy" className="hover:text-foreground transition">Cookie Policy</Link></li>
              <li><button onClick={openCookiePreferences} className="hover:text-foreground transition">Preferenze cookie</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Sandro Giuliani – Tutti i diritti riservati</p>
            <p>Sandro Giuliani · P. IVA IT[INSERISCI_TUA_PIVA]</p>
          </div>
        </div>
      </footer>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

/* ─── Componente helper ─── */
function SectionHead({ eyebrow, title, align = "center" }: { eyebrow: string; title: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--primary)" }}>{eyebrow}</span>
      <h2
        className={`mt-3 tracking-tight text-foreground ${align === "center" ? "mx-auto max-w-2xl" : ""}`}
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 500 }}
      >
        {title}
      </h2>
    </div>
  );
}

/* ─── Dati ─── */
const problems = [
  { icon: AlertCircle, title: "Abbai e distruzione", desc: "Quando casa diventa un campo di battaglia. Capiamo insieme la causa, non solo il sintomo." },
  { icon: Heart, title: "Ansia da separazione", desc: "Il tuo cane soffre quando esci? Lavoriamo sulla sicurezza emotiva e sulla relazione." },
  { icon: Dog, title: "Reattività e aggressività", desc: "Ringhi, tensione al guinzaglio, gestione degli spazi. Senza giudizi, con metodo." },
  { icon: Cloud, title: "Paure e fobie", desc: "Botti, temporali, persone, altri cani: piano di desensibilizzazione graduale." },
  { icon: Baby, title: "Cucciolo: le basi giuste", desc: "Partire bene fin da subito per costruire un adulto sereno e collaborativo." },
  { icon: Moon, title: "Difficoltà relazionali", desc: "Quando la convivenza è diventata faticosa: riprendiamo il dialogo dall'inizio." },
];

const steps = [
  { icon: MessageCircle, title: "Prenota la call gratuita", desc: "15 minuti per raccontarmi la situazione. Nessun impegno, nessuna pressione." },
  { icon: Video, title: "Inviami i video", desc: "Casa, passeggiate, momenti difficili: osservo nel contesto reale, non in astratto." },
  { icon: CalendarCheck, title: "Videochiamata 1h", desc: "Ci confrontiamo su Zoom o Google Meet, con calma e senza fretta." },
  { icon: FileText, title: "Piano + follow-up", desc: "Ricevi un piano scritto e due settimane di supporto via chat." },
];

const plans = [
  {
    name: "Analisi iniziale",
    price: "90",
    suffix: "",
    tag: "Prima consulenza",
    featured: false,
    features: [
      "Questionario comportamentale",
      "Analisi video",
      "Videochiamata 60 min",
      "Prime indicazioni scritte",
      "1 settimana supporto chat",
    ],
  },
  {
    name: "Percorso educativo",
    price: "290",
    suffix: "",
    tag: "4–8 settimane",
    featured: true,
    features: [
      "2 videochiamate da 60 min",
      "Piano educativo personalizzato",
      "Supporto chat 30 giorni",
      "Revisione video",
      "Follow-up finale",
    ],
  },
  {
    name: "Membership",
    price: "29",
    suffix: "/mese",
    tag: "Supporto continuativo",
    featured: false,
    features: [
      "Q&A mensili in gruppo",
      "Mini lezioni tematiche",
      "Analisi casi reali",
      "Community di proprietari",
      "Supporto educativo continuo",
    ],
  },
];

const whyOnline = [
  { icon: Home, title: "Il cane resta a casa", desc: "Niente stress da trasporto. Osservo il suo ambiente reale." },
  { icon: Eye, title: "Vedo come vive davvero", desc: "Il contesto domestico dice più di qualsiasi studio." },
  { icon: Wallet, title: "Costi accessibili", desc: "Niente spostamenti, prezzi più sostenibili." },
  { icon: MapPin, title: "Ovunque tu sia", desc: "Tutta Italia, anche dall'estero." },
];

const testimonials = [
  { quote: "Il cane ringhiava ai bambini. In tre settimane è cambiato tutto. Finalmente viviamo sereni.", author: "Maria", city: "Milano" },
  { quote: "Pensavo fosse un cane impossibile. Sandro mi ha aiutato a capirlo davvero, non a correggerlo.", author: "Luca", city: "Roma" },
  { quote: "L'ansia da separazione di Birba era diventata insostenibile. Ora resta a casa tranquilla.", author: "Giulia", city: "Torino" },
];
