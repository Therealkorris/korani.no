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
    title: 'Dokument- og filautomatisering',
    text: 'Fra import til ferdig leveranse: verktøy som leser PDF-er, Excel-ark og mapper, fyller maler, gjør kontroller og lager eksport som kan sendes videre.',
  },
  {
    icon: Bot,
    title: 'AI for dokumenter og data',
    text: 'Assistenter som søker, sorterer, oppsummerer og finner avvik i egne dokumenter og datasett, med synlig kildegrunnlag og menneskelig kontroll.',
  },
  {
    icon: Wrench,
    title: 'Interne verktøy',
    text: 'Små web-, desktop- og mobilverktøy for arbeidsprosesser som standardprogrammer ikke dekker godt nok: import, eksport, rapportering og oversikt.',
  },
  {
    icon: Database,
    title: 'Engineeringdata og tekniske flyter',
    text: 'Parsing, mapping og koblinger mellom SCD, AML, kontrollsystemdata, PDF-er og tekniske underlag som ellers må følges opp manuelt.',
  },
];

const useCases = [
  'PDF-er, Excel-ark og mapper inn i en repeterbar flyt',
  'Produksjon av engineeringdokumentasjon fra maler og data',
  'Søk, indeks, sammenligning og sammenslåing av filer',
  'SCD/AML-analyse, datauttrekk og koblinger',
  'AI-assistenter for sortering, oppsummering og avvik',
  'MVP-er og interne verktøy for egne arbeidsprosesser',
];

const processSteps = [
  {
    title: 'Kartlegg dagens leveranse',
    text: 'Vi går gjennom eksempelmapper, dokumenter, skjermbilder, systemer og de manuelle valgene som avgjør kvaliteten. Målet er å se hva som faktisk må produseres.',
  },
  {
    title: 'Bygg en fungerende flyt',
    text: 'Jeg bygger på reelle filer, maler, API-er, datauttrekk eller fagregler. Første leveranse skal gjøre en avgrenset jobb fra start til slutt.',
  },
  {
    title: 'Stram inn for drift',
    text: 'Når flyten treffer, legges det inn feilhåndtering, logging, eksport, rettigheter, dokumentasjon og sjekkpunkter der fagfolk fortsatt skal bestemme.',
  },
];

const backgroundSignals = [
  'Bygger på reelle filer',
  'Dokumenterer valg og begrensninger',
  'Legger inn kontrollpunkter',
  'Leverer kode som kan overtas',
];

const bookingOptions = [
  'Dokumentautomatisering',
  'AI for dokument/data',
  'Internt verktøy',
  'Engineeringdata',
  'Produkt / MVP',
  'Teknisk bistand',
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
            <small>Dokumentflyt, AI og interne verktøy</small>
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
            <h1 id="hero-title">Automatisering for dokumenter, filer og tekniske data.</h1>
            <p className="hero-lead">
              Jeg hjelper bedrifter med oppgaver som havner mellom standardprogrammene: PDF-er som
              må leses, Excel-ark som må sammenlignes, engineeringdokumentasjon som må produseres,
              og data som må kobles før noen kan ta en beslutning.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Beskriv oppgaven
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
              PDF, Excel, mapper og tekniske dokumenter inn i samme flyt
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              AI-assistenter med kilder, kontroll og manuell overstyring
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Interne verktøy bygget rundt måten arbeidet faktisk leveres
            </span>
          </div>
        </section>

        <section id="services" className="section-block services-section" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Tjenester</p>
            <h2 id="services-title">Når filene, malene og systemene ikke snakker godt nok sammen.</h2>
            <p>
              Korani Solutions AS ved Jonas Korani bygger verktøy for de praktiske oppgavene som ofte
              blir liggende på fagfolk: kopiere data, sjekke dokumenter, sammenligne filer, produsere
              underlag og holde oversikt mellom tekniske systemer.
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
            <h2 id="focus-title">Leveranser som fjerner manuelle steg fra faktiske arbeidsdager.</h2>
          </div>
          <div className="use-case-list">
            {useCases.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="process" className="section-block process-section" aria-labelledby="process-title">
          <div className="section-heading compact">
            <p className="eyebrow">Arbeidsmåte</p>
            <h2 id="process-title">Først finner vi flaskehalsen. Så bygger vi rundt den.</h2>
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
            <h2 id="about-title">Jonas Korani: automasjon, kontrollsystemer, engineering docs og software.</h2>
            <p>
              Jeg har bakgrunn fra automasjon, kontrollsystemer, engineering-dokumentasjon og
              software. Arbeidet mitt ligger ofte der tekniske dokumenter, tagdata, filstruktur,
              kvalitetssjekk og kode møtes.
            </p>
            <p>
              Egenutviklede prosjekter som Search & Index, TrailReady/Turapp, SCD_copy, AML_Analyzer
              og Visio_web viser retningen: hente ut data, gjøre dokumentproduksjon raskere, bygge
              oversikt og lage verktøy folk kan bruke uten å endre hele virksomheten rundt dem.
            </p>
          </div>

          <div className="signal-card">
            <ShieldCheck size={30} aria-hidden="true" />
            <h3>Typiske leveranser</h3>
            <p>
              Et script som fjerner kopiering, en intern webapp, en data-parser, en AI-assistent eller
              en modul som produserer dokumentunderlag. Bygget med nok struktur til at løsningen kan
              forklares, driftes og videreutvikles.
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
            <h2 id="contact-title">Send meg arbeidsflyten dere vil ha ut av manuelt arbeid.</h2>
            <p>
              Beskriv hvilke filer, skjermbilder, systemer og leveranser som er involvert. Jeg svarer
              med en konkret vurdering av hva som kan automatiseres, hvor første leveranse bør ligge,
              og hvilke deler som fortsatt bør ha faglig kontroll.
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
                placeholder="Hva gjøres manuelt i dag, hvilke filer eller systemer er involvert, og hva skal komme ut på andre siden?"
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
          <span>Dokumentflyt, AI og interne verktøy.</span>
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
