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
    title: 'Effektivisering av arbeidsflyter',
    text: 'Gjentatte oppgaver gjøres om til stabile flyter som henter data, gjør sjekker og sender arbeidet videre.',
  },
  {
    icon: Bot,
    title: 'AI-løsninger i praksis',
    text: 'AI-assistenter for søk, sortering, oppsummering og beslutningsstøtte i egne dokumenter og data.',
  },
  {
    icon: Wrench,
    title: 'Automasjon og interne verktøy',
    text: 'Skreddersydde web-, desktop- eller mobilverktøy for registrering, oversikt, rapportering og daglig oppfølging.',
  },
  {
    icon: Database,
    title: 'Systemintegrasjon og software',
    text: 'Kobler API-er, filer og databaser, og bygger prototyper som kan prøves på ekte arbeid.',
  },
];

const problems = [
  'Manuell punching mellom systemer',
  'Tidsbruk på rapportering',
  'Filrot og vanskelig gjenfinning',
  'Gjentatte kontroller',
  'Data som flyttes for hånd',
];

const deliverables = [
  'Intern app',
  'AI-assistent',
  'Automatisert rapport',
  'Dashboard',
  'Dataflyt mellom systemer',
  'Script for gjentatte jobber',
];

const processSteps = [
  {
    title: 'Avklar arbeidsflyten',
    text: 'Vi ser på dagens steg, systemer, filer og hvor tiden forsvinner.',
  },
  {
    title: 'Bygg løsningen',
    text: 'Jeg bygger en praktisk løsning på ekte data og reelle arbeidsvaner.',
  },
  {
    title: 'Få den i bruk',
    text: 'Vi strammer inn, dokumenterer og gjør løsningen klar for drift.',
  },
];

const backgroundSignals = [
  'Forstår arbeidsflyten først',
  'Bygger på ekte data',
  'Dokumenterer nok til drift',
  'Kan videreutvikles',
];

const bookingOptions = [
  'Effektivisering',
  'AI-løsning',
  'Automasjon',
  'Internt verktøy',
  'Systemintegrasjon',
  'Software / prototype',
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
    timeline: 'Rask avklaring',
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
      'Kort om arbeidsflyten:',
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
            <small>Effektivisering, AI og software</small>
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
          Avtal en prat
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Korani Solutions AS</p>
            <h1 id="hero-title">Effektivisering, AI og software for arbeidsflyter som stjeler tid.</h1>
            <p className="hero-lead">
              Korani Solutions kartlegger manuelle prosesser og bygger praktiske løsninger som
              automatiserer arbeid, kobler systemer sammen og gir folk bedre verktøy i hverdagen,
              uten å gjøre prosjektet større enn nødvendig.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Bestill en vurdering
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
              AI der det sparer tid eller gir bedre beslutningsgrunnlag
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Automasjon rundt eksisterende systemer
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Interne verktøy som tas i bruk
            </span>
          </div>
        </section>

        <section className="focus-band" aria-labelledby="problem-title">
          <div>
            <p className="eyebrow">Typiske problemer</p>
            <h2 id="problem-title">Arbeid som tar tid uten å skape verdi.</h2>
          </div>
          <div className="use-case-list">
            {problems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="services" className="section-block services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Tjenester</p>
            <h2 id="services-title">Praktiske løsninger for arbeid som gjentar seg.</h2>
            <p>
              Oppgaven er å spare tid: færre manuelle steg, færre feil og bedre flyt mellom folk,
              filer, data og systemer.
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

        <section className="focus-band" aria-labelledby="deliverables-title">
          <div>
            <p className="eyebrow">Hva kunden får</p>
            <h2 id="deliverables-title">Konkrete løsninger som kan settes i arbeid.</h2>
          </div>
          <div className="use-case-list">
            {deliverables.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="process" className="section-block process-section" aria-labelledby="process-title">
          <div className="section-heading compact">
            <p className="eyebrow">Arbeidsmåte</p>
            <h2 id="process-title">Forstå arbeidsflyten, bygg løsningen, få den i drift.</h2>
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

        <section className="about-section" aria-labelledby="proof-title">
          <div className="about-copy">
            <p className="eyebrow">Troverdighet</p>
            <h2 id="proof-title">Erfaring med søk, apper og arbeidsflyter.</h2>
            <p>
              <strong>Search & Index:</strong> handler om store informasjonsmengder: søk,
              indeksering, sammenligning og strukturering av filer. Målet er å gjøre rotete data og
              dokumenter mulig å finne, bearbeide og bruke i en arbeidsflyt.
            </p>
            <p>
              <strong>TrailReady/Turapp:</strong> handler om hvordan en konkret arbeidsflyt kan gjøres
              enkel å bruke, fra idé til brukbar Android-opplevelse med lokal lagring,
              turplanlegging, pakkelister og flyter rundt utstyr.
            </p>
          </div>

          <div className="signal-card">
            <ShieldCheck size={30} aria-hidden="true" />
            <h3>Om Korani Solutions</h3>
            <p>
              Korani Solutions AS drives av Jonas Korani og leverer praktisk effektivisering for
              bedrifter. Arbeidet handler om å forstå hvordan jobben faktisk gjøres, finne manuelle
              tidstyver og bygge software, automasjon og AI-løsninger som kan tas i bruk.
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
            <h2 id="contact-title">Send noen linjer om det dere fortsatt gjør manuelt.</h2>
            <p>
              Beskriv hva som gjøres manuelt i dag, hvilke systemer eller filer som er involvert, og
              hva dere ønsker å få ut. Jeg svarer med en konkret vurdering av mulige løsninger og
              neste steg.
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
                <option>Rask avklaring</option>
                <option>Oppstart snarest</option>
                <option>Innen 2-4 uker</option>
                <option>Planlegger framover</option>
              </select>
            </label>
            <label className="full-span">
              Kort om oppgaven
              <textarea
                rows={5}
                value={form.message}
                onChange={(event) => updateForm('message', event.target.value)}
                placeholder="Hva gjøres manuelt i dag, hvilke systemer er involvert, og hva skal komme ut på andre siden?"
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
          <span>Effektivisering, AI og software.</span>
        </div>
        <nav aria-label="Footer">
          <a href="/products.html">Produkter</a>
          <a href="/trailready.html">TrailReady</a>
          <a href="/trailready/privacy">Privacy</a>
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
