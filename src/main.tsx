import { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Copy,
  Database,
  Hammer,
  Mail,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './styles.css';

const contactEmail = 'Jonas.korani@gmail.com';
const contactPhone = '+47 976 16 446';

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const services: Service[] = [
  {
    icon: Hammer,
    title: 'Automatisering',
    text: 'Manuelle prosesser, dokumentflyt, rapporter, filer og gjentakende arbeid gjort om til kontrollerbare verktøy.',
  },
  {
    icon: Bot,
    title: 'Praktisk AI',
    text: 'AI-arbeidsflyter som hjelper med analyse, sortering, tekst, beslutningsstøtte og produksjon uten å miste kontroll.',
  },
  {
    icon: Wrench,
    title: 'Interne verktøy',
    text: 'Små og store apper, dashboards og arbeidsflater bygget rundt hvordan folk faktisk jobber.',
  },
  {
    icon: Database,
    title: 'Tekniske data',
    text: 'Strukturering, sammenligning og kobling av dokumenter, regneark, mapper og systemdata som ikke snakker godt sammen.',
  },
];

const useCases = [
  'Fjerne repeterende manuelt arbeid',
  'Bygge MVP eller internt produkt',
  'Automatisere tekniske dokumenter',
  'Lage AI-agent eller assistent',
  'Rydde i fil- og dataflyt',
  'Forbedre eksisterende verktøy',
];

const processSteps = [
  {
    title: 'Avklar problemet',
    text: 'Vi starter med arbeidet som tar tid: filer, mennesker, systemer, feil og ønsket resultat.',
  },
  {
    title: 'Bygg en liten versjon',
    text: 'Jeg lager en praktisk prototype eller første modul som kan testes på ekte input.',
  },
  {
    title: 'Gjør det trygt å bruke',
    text: 'Preview, logging, manuell kontroll, eksport og tydelige feilmeldinger kommer før skalering.',
  },
];

const backgroundSignals = [
  'Senior automation engineer',
  'Kontrollsystemer og engineering',
  'AI, software og produktbygging',
  'Korani Solutions AS',
];

const bookingOptions = [
  'Automatisering',
  'AI-arbeidsflyt',
  'Internt verktøy',
  'Teknisk dataflyt',
  'MVP / app',
  'Konsulentbistand',
];

type FormState = {
  name: string;
  company: string;
  email: string;
  timeline: string;
  message: string;
};

function App() {
  const [selectedNeed, setSelectedNeed] = useState(bookingOptions[0]);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    timeline: 'Avklaringsprat',
    message: '',
  });

  const mailto = useMemo(() => {
    const subject = `Forespørsel til Korani Solutions: ${selectedNeed}`;
    const body = [
      `Navn: ${form.name}`,
      `Firma: ${form.company}`,
      `E-post: ${form.email}`,
      `Behov: ${selectedNeed}`,
      `Tidshorisont: ${form.timeline}`,
      '',
      'Kort om oppgaven:',
      form.message,
    ].join('\n');

    return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form, selectedNeed]);

  function updateForm(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Korani Solutions AS hjem">
          <span className="brand-mark">K</span>
          <span>
            <strong>Korani Solutions AS</strong>
            <small>AI, automasjon og verktøy</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Hovednavigasjon">
          <a href="#services">Tjenester</a>
          <a href="/products.html">Produkter</a>
          <a href="#process">Prosess</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <a className="header-cta" href="#contact">
          <MessageSquare size={18} aria-hidden="true" />
          Book en prat
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Korani Solutions AS</p>
            <h1 id="hero-title">AI og automasjon for arbeid som tar for mye tid.</h1>
            <p className="hero-lead">
              Jeg hjelper bedrifter med å automatisere manuelle prosesser, bygge interne verktøy og
              bruke AI på en praktisk måte.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Send meg problemet
              </a>
              <a className="button secondary" href="#services">
                <ArrowRight size={18} aria-hidden="true" />
                Se tjenester
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Kort om Korani Solutions">
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Senior automation engineer
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              AI, software og tekniske arbeidsflyter
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Små oppdrag, prototyper og leveranser
            </span>
          </div>
        </section>

        <section id="services" className="section-block services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Tjenester</p>
            <h2 id="services-title">Når en prosess er tung nok, er den ofte klar for et verktøy.</h2>
            <p>
              Korani Solutions tar oppdrag der teknologi skal gi konkret effekt: mindre manuelt arbeid,
              bedre oversikt og raskere leveranse.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="focus-band" aria-labelledby="focus-title">
          <div>
            <p className="eyebrow">Typiske oppdrag</p>
            <h2 id="focus-title">Du trenger ikke vite løsningen først.</h2>
          </div>
          <div className="use-case-list">
            {useCases.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="process" className="section-block process-section" aria-labelledby="process-title">
          <div className="section-heading compact">
            <p className="eyebrow">Prosess</p>
            <h2 id="process-title">Start lite. Test verdi. Bygg videre.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="eyebrow">Om Jonas</p>
            <h2 id="about-title">Teknisk bakgrunn, produktmentalitet og lav terskel for å bygge.</h2>
            <p>
              Jeg kommer fra automasjon, kontrollsystemer og software. Det betyr at jeg liker problemer
              der data, mennesker, dokumenter og systemer må spille sammen.
            </p>
            <p>
              Korani Solutions AS er bygget for konsulentoppdrag, prototyper og praktiske leveranser for
              bedrifter som vil få fart på en konkret arbeidsflyt.
            </p>
          </div>

          <div className="signal-card">
            <ShieldCheck size={30} aria-hidden="true" />
            <h3>Hva du får</h3>
            <p>
              En teknisk sparringspartner som kan forstå problemet, bygge første versjon og gjøre veien
              videre tydelig.
            </p>
            <div>
              {backgroundSignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Kontakt</p>
            <h2 id="contact-title">Send en kort forklaring på hva som tar tid.</h2>
            <p>
              En god første melding er enkel: hva dere gjør manuelt, hvilke filer eller systemer som er
              involvert, og hva dere ønsker å slippe.
            </p>
            <div className="direct-contact">
              <a href={`mailto:${contactEmail}`}>
                <Mail size={18} aria-hidden="true" />
                {contactEmail}
              </a>
              <a href={`tel:${contactPhone.replaceAll(' ', '')}`}>
                <Phone size={18} aria-hidden="true" />
                {contactPhone}
              </a>
              <a href="https://github.com/Therealkorris" target="_blank" rel="noreferrer">
                <Search size={18} aria-hidden="true" />
                GitHub / Therealkorris
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <fieldset className="need-picker">
              <legend>Hva gjelder det?</legend>
              <div>
                {bookingOptions.map((option) => (
                  <button
                    className={selectedNeed === option ? 'selected' : ''}
                    key={option}
                    type="button"
                    onClick={() => setSelectedNeed(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <label>
              Navn
              <input value={form.name} onChange={(event) => updateForm('name', event.target.value)} />
            </label>
            <label>
              Firma
              <input value={form.company} onChange={(event) => updateForm('company', event.target.value)} />
            </label>
            <label>
              Din e-post
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateForm('email', event.target.value)}
              />
            </label>
            <label>
              Tidshorisont
              <select value={form.timeline} onChange={(event) => updateForm('timeline', event.target.value)}>
                <option>Avklaringsprat</option>
                <option>Snarest</option>
                <option>Innen 2-4 uker</option>
                <option>Utforsker muligheter</option>
              </select>
            </label>
            <label className="full-span">
              Kort om oppgaven
              <textarea
                rows={5}
                value={form.message}
                onChange={(event) => updateForm('message', event.target.value)}
                placeholder="Hva tar tid, hva er vanskelig, og hva ville vært nyttig å få automatisert?"
              />
            </label>
            <div className="form-actions">
              <a className="button primary" href={mailto}>
                <Mail size={18} aria-hidden="true" />
                Send forespørsel
              </a>
              <button className="button secondary" type="button" onClick={copyEmail}>
                <Copy size={18} aria-hidden="true" />
                {copied ? 'Kopiert' : 'Kopier e-post'}
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Korani Solutions AS</strong>
          <span>AI, automasjon og interne verktøy.</span>
        </div>
        <nav aria-label="Footer">
          <a href="/products.html">Produkter</a>
          <a href="/trailready.html">TrailReady</a>
          <a href="/trailready/privacy.html">Privacy</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
