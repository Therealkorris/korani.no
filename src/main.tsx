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
    title: 'Arbeidsflyt og automasjon',
    text: 'Jeg bygger verktøy rundt jobben slik den faktisk gjøres: filer, dokumenter, mapper, skjema, Excel, PDF, systemdata og manuelle steg.',
  },
  {
    icon: Bot,
    title: 'AI med kontroll',
    text: 'AI-løsninger for analyse, sortering, tekst, søk og beslutningsstøtte, med tydelige kilder, manuell overstyring og praktisk bruk.',
  },
  {
    icon: Wrench,
    title: 'Interne verktøy og apper',
    text: 'Desktop-, web- og mobilverktøy som samler arbeidsflaten, reduserer klikking og gjør komplekse oppgaver enklere å utføre.',
  },
  {
    icon: Database,
    title: 'Tekniske data og dokumentasjon',
    text: 'Parsing, kobling og produksjon av teknisk dokumentasjon, kontrollsystemdata, engineering-underlag og strukturer som vanligvis er tunge å få oversikt over.',
  },
];

const useCases = [
  'Automatisere dokumentproduksjon',
  'Finne koblinger i store datagrunnlag',
  'Bygge interne verktøy for fagfolk',
  'Lage AI-assistenter for ekte arbeidsflyt',
  'Gjøre filarbeid søkbart og repeterbart',
  'Bygge MVP, app eller produktmodul',
];

const processSteps = [
  {
    title: 'Finn flaskehalsen',
    text: 'Vi starter med hva som faktisk stjeler tid: input, feil, systemer, manuelle vurderinger og ønsket sluttresultat.',
  },
  {
    title: 'Bygg på ekte data',
    text: 'Jeg lager en første versjon som kan testes på reelle filer, dokumenter eller arbeidssteg, ikke bare en pen demo.',
  },
  {
    title: 'Lever noe som kan brukes',
    text: 'Preview, logging, eksport, feilhåndtering og manuell kontroll kommer inn før løsningen skaleres videre.',
  },
];

const backgroundSignals = [
  'Kartlegging av arbeidsflyt',
  'Prototype på ekte input',
  'Produksjonsklar verktøyflyt',
  'Videreutvikling og overlevering',
];

const bookingOptions = [
  'Prosessautomatisering',
  'AI-assistent',
  'Internt verktøy',
  'Engineering/dataflyt',
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
            <h1 id="hero-title">Verktøy, AI og automasjon for arbeidsflyter som må gå raskere.</h1>
            <p className="hero-lead">
              Jeg hjelper bedrifter med å gjøre tunge, manuelle og tekniske oppgaver om til
              kontrollerbare systemer. Mindre leting, mindre dobbeltarbeid, færre manuelle steg og
              mer flyt i jobben som faktisk skal leveres.
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
              Automatisering av dokumenter, filer og systemdata
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              AI-løsninger med praktisk kontroll
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Konsulentoppdrag, prototyper og produktbygging
            </span>
          </div>
        </section>

        <section id="services" className="section-block services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Tjenester</p>
            <h2 id="services-title">Jeg bygger når standardverktøyene ikke passer arbeidsflyten.</h2>
            <p>
              Noen oppgaver blir aldri gode av flere møter, flere Excel-ark eller enda et system som
              nesten passer. Da trengs et verktøy som forstår prosessen, dataene og folkene som skal
              bruke det.
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
            <p className="eyebrow">Hva du får</p>
            <h2 id="focus-title">Fra rotete prosess til konkret leveranse.</h2>
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
            <h2 id="process-title">Rask avklaring, praktisk bygging og tydelig vei videre.</h2>
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
            <h2 id="about-title">Jeg liker problemer der kode må møte virkeligheten.</h2>
            <p>
              Bakgrunnen min er automasjon, kontrollsystemer, engineering-dokumentasjon og software.
              Jeg har bygget verktøy for blant annet tekniske dokumenter, SCD/AML-analyse, filflyt,
              PDF/Visio-lignende produksjon, interne arbeidsflater og egne produkter.
            </p>
            <p>
              Korani Solutions AS er laget for oppdrag der du trenger en teknisk person som kan forstå
              problemet, bygge løsningen og få den tett nok på hverdagen til at den faktisk blir brukt.
            </p>
          </div>

          <div className="signal-card">
            <ShieldCheck size={30} aria-hidden="true" />
            <h3>Hva du får</h3>
            <p>
              En praktisk bygger som kan gå fra uklar arbeidsflyt til fungerende verktøy, med nok
              struktur til at løsningen kan driftes, forklares og videreutvikles.
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
            <h2 id="contact-title">Har du en oppgave som spiser timer hver uke?</h2>
            <p>
              Send meg noen linjer om hvordan jobben gjøres i dag, hvilke filer eller systemer som er
              involvert, og hva som ville vært verdifullt å slippe. Jeg svarer med en ærlig vurdering
              av om det bør automatiseres, bygges eller løses enklere.
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
                placeholder="Hva tar tid, hva er vanskelig, hvilke filer/systemer er involvert, og hva ville vært en god leveranse?"
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
