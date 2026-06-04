import { StrictMode, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Blocks,
  Bot,
  CheckCircle2,
  Code2,
  Copy,
  Database,
  FileSearch,
  Hammer,
  Mail,
  Map,
  MessageSquare,
  Network,
  Phone,
  Rocket,
  Search,
  Sparkles,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './styles.css';

const contactEmail = 'Jonas.korani@gmail.com';
const contactPhone = '+47 976 16 446';

type LabProject = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  text: string;
  impact: string;
  proof: string;
  tags: string[];
};

const labProjects: LabProject[] = [
  {
    icon: Hammer,
    eyebrow: 'SCD Copy / engineering docs',
    title: 'Når tusenvis av dokumenter egentlig er en prosess, ikke papir.',
    text: 'Bygget automasjon rundt SCD, Visio, Excel, noder, dokumentnummer, tags og EIS-import. Poenget er ikke “script”. Poenget er å gjøre masseproduksjon kontrollerbar.',
    impact: '95-99% tidsreduksjon i riktige dokumentflyter',
    proof: '190k+ endringer, store dokumentsett, preview og kontroll',
    tags: ['SCD', 'Visio', 'Excel', 'EIS', 'Automation'],
  },
  {
    icon: Network,
    eyebrow: 'AML Analyzer',
    title: 'Finne forbindelser i kontrollsystemer som er for store til å holde i hodet.',
    text: 'Analyse av SCD/AML på tvers av filer, funksjonsblokker og forbindelser. Bygget for å forstå hvor signaler går, ikke bare søke etter tekst.',
    impact: 'Full connection insight på komplekse systemstrukturer',
    proof: 'Multi-file analyse, path finding, eksport og dyp kontroll',
    tags: ['AML', 'SCD', 'Connections', 'Search', 'Export'],
  },
  {
    icon: Blocks,
    eyebrow: 'Visio Web / MCP Visio',
    title: 'PDF og tekniske filer inn. Visio-logikk og arbeidsflate ut.',
    text: 'Et web- og MCP-basert miljø for å lese tekniske underlag, forstå struktur og styre Visio-produksjon. Reelle bedriftsdokumenter vises ikke offentlig, men capabilityen er kjernen.',
    impact: 'Automatiserer arbeid som vanligvis krever manuell tegning',
    proof: 'PDF parsing, VSDX, MCP, FastAPI, Next.js og batch-operasjoner',
    tags: ['PDF', 'VSDX', 'MCP', 'Next.js', 'FastAPI'],
  },
  {
    icon: FileSearch,
    eyebrow: 'Search & Index v3',
    title: 'En fil- og data-workbench for folk som lever i mapper, CSV, logs og sammenligning.',
    text: 'Moderne .NET/Avalonia-verktøy for file differences, data merging, smart matching, split text, folder search og workflow builder.',
    impact: 'Fra enkelt søk til repeterbare arbeidsflyter',
    proof: 'Tidligere Microsoft Store-lansering, v3 bygges nå',
    tags: ['.NET', 'Avalonia', 'Files', 'Workflow', 'Search'],
  },
  {
    icon: Map,
    eyebrow: 'TrailReady / Turapp',
    title: 'En mobilapp bygget local-first fordi tillit og enkelhet betyr noe.',
    text: 'Turapp for planlegging, pakkelister, utstyr, vær, kart, fiske, turer og backup. Klar for privat beta med tydelig personvern og uten analytics-støy.',
    impact: 'Google Play-klar produktbygging',
    proof: 'Expo, React Native, SQLite, MapLibre og MET weather',
    tags: ['Mobile', 'SQLite', 'Maps', 'Weather', 'Privacy'],
  },
  {
    icon: Bot,
    eyebrow: 'AI teams / beslutningsstøtte',
    title: 'AI skal gjøre grovarbeid, men mennesker skal fortsatt eie avgjørelsen.',
    text: 'Agent-workflows, scoring, kravmatriser, red-team-kontroll og praktisk beslutningsstøtte for Doffin/TED, tilbud og analyser.',
    impact: 'Raskere analyse uten å gi bort kontroll',
    proof: 'Human-in-control, sporbarhet og tydelige begrensninger',
    tags: ['Agents', 'AI', 'Scoring', 'Doffin', 'Control'],
  },
];

const serviceMissions = [
  {
    icon: Zap,
    title: 'Vi gjør det samme manuelt hver uke',
    text: 'Jeg kartlegger flyten, bygger en liten motor rundt den og gjør output kontrollerbar før den skaleres.',
  },
  {
    icon: Database,
    title: 'Vi drukner i filer og tekniske data',
    text: 'Søk, sammenligning, import, eksport, matching og koblinger på tvers av PDF, Excel, XML, AML, VSDX og mapper.',
  },
  {
    icon: Sparkles,
    title: 'Vi vil bruke AI uten å miste kvalitet',
    text: 'AI-agenter, analyse og produksjon med sporbarhet, menneskelig kontroll og klare grenser for hva systemet får lov til.',
  },
  {
    icon: Rocket,
    title: 'Vi trenger et verktøy eller en MVP',
    text: 'Fra rå idé til fungerende app, dashboard eller intern arbeidsflate med nok struktur til å leve videre.',
  },
];

const timeline = [
  {
    year: 'Start',
    title: 'Elektro, IT og systemforståelse',
    text: 'ICT-lærling, maritime elektro/automasjon og en praktisk måte å lære på: bygge, teste, forstå, forbedre.',
  },
  {
    year: 'Kongsberg',
    title: 'Kontrollsystemer i virkeligheten',
    text: 'Senior system engineer-erfaring med SCD, HMI, logic, nettverk, dokumentasjon og tekniske leveranser.',
  },
  {
    year: 'Aibel',
    title: 'Senior automation engineer',
    text: 'Her ble mange av fullautomatiseringsverktøyene utviklet rundt engineering-dokumenter og arbeidsprosesser.',
  },
  {
    year: 'Nå',
    title: 'Korani Solutions AS',
    text: 'Solo-selskap for praktisk AI, automasjon, interne verktøy og produktbygging for kunder med ekte friksjon.',
  },
];

const proofCases = [
  {
    title: 'SCD Copy',
    eyebrow: 'Engineering production engine',
    visual: 'text',
    image: '',
    metric: '190k+ endringer',
    text: 'Bygget for store dokumentsett der maler, tags, noder og referanser må endres raskt uten å miste kontroll.',
    proves: 'Jeg kan gjøre tunge engineering-prosesser om til verktøy.',
  },
  {
    title: 'Visio Web / MCP Visio',
    eyebrow: 'Confidential docs, public capability',
    visual: 'text',
    image: '',
    metric: 'PDF -> struktur -> Visio',
    text: 'Reelle screenshots brukes ikke offentlig. Det viktige er systemet bak: parsing, VSDX, webflate, MCP og batch-operasjoner.',
    proves: 'Jeg bygger rundt begrensninger, ikke bare rundt demoer.',
  },
  {
    title: 'AML Analyzer',
    eyebrow: 'Connection intelligence',
    visual: 'text',
    image: '',
    metric: 'Multi-file graph',
    text: 'Søk og connection analysis på tvers av AML/SCD slik at signaler, funksjonsblokker og mellomledd blir forståelige.',
    proves: 'Jeg liker komplekse datastrukturer når de har praktisk verdi.',
  },
  {
    title: 'Search & Index v3',
    eyebrow: 'File/data workbench',
    visual: 'image',
    image: '/work/searchindex-workflow-builder.png',
    metric: 'Workflow builder',
    text: 'Sammenlign, merge, søk, split og bygg repeterbare filarbeidsflyter i en moderne desktop-workbench.',
    proves: 'Jeg bygger produkter, ikke bare engangsscripts.',
  },
  {
    title: 'Smart data analysis',
    eyebrow: 'Search & Index capability',
    visual: 'image',
    image: '/work/searchindex-smart-data-analysis.png',
    metric: 'Candidate review',
    text: 'Smart matching og kandidatkontroll for data som ikke alltid passer pent sammen på første forsøk.',
    proves: 'Jeg bygger med preview og menneskelig godkjenning når risikoen krever det.',
  },
  {
    title: 'TrailReady / Turapp',
    eyebrow: 'Mobile product beta',
    visual: 'trailready',
    image: '/work/trailready-current-hero.jpg',
    metric: 'Local-first',
    text: 'Turplanlegging, pakkelister, utstyr, vær, kart og backup bygget som en reell app mot Google Play.',
    proves: 'Jeg kan ta egne ideer helt frem til produkt.',
  },
];

const bookingOptions = [
  'Automatisere en manuell prosess',
  'Bygge internt verktøy eller dashboard',
  'AI-agent eller AI-arbeidsflyt',
  'Teknisk dokument/dataflyt',
  'Produkt/MVP',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedNeed, setSelectedNeed] = useState(bookingOptions[0]);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    timeline: 'Snarest / avklaringsprat',
    message: '',
  });

  const activeProject = labProjects[activeIndex];

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

  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) {
        return;
      }

      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (!target) {
        return;
      }

      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      const y = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo(0, Math.max(0, y));
      window.requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = previousBehavior;
      });
    };

    scrollToHash();
    window.setTimeout(scrollToHash, 250);
    window.setTimeout(scrollToHash, 800);
  }, []);

  function updateForm(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const ActiveIcon = activeProject.icon;

  return (
    <>
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Korani Solutions AS hjem">
          <span className="brand-mark">K</span>
          <span>
            <strong>Korani Solutions AS</strong>
            <small>Jonas Korani bygger her</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Hovednavigasjon">
          <a href="#missions">Tjenester</a>
          <a href="#story">Om Jonas</a>
          <a href="#proof">Arbeid</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <a className="header-cta" href="#contact">
          <MessageSquare size={18} aria-hidden="true" />
          Book meg
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Solo builder / automasjon / AI / produkt</p>
            <h1 id="hero-title">Jeg bygger verktøy for arbeid andre fortsatt gjør for hånd.</h1>
            <p className="hero-lead">
              Korani Solutions AS er meg, Jonas, på egenhånd: senior automation engineer som lager
              praktisk AI, interne verktøy og automasjon for tekniske prosesser som spiser timer.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Send meg et problem
              </a>
              <a className="button secondary" href="#proof">
                <ArrowRight size={18} aria-hidden="true" />
                Se hva jeg har bygget
              </a>
            </div>
          </div>

          <div className="hero-proof-row" aria-label="Kort bevis">
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Senior automation engineer hos Aibel
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Kongsberg Maritime og kontrollsystemer
            </span>
            <span>
              <CheckCircle2 size={17} aria-hidden="true" />
              Search & Index, Turapp, SCD, AML, Visio og AI
            </span>
          </div>
        </section>

        <section className="lab-radar" aria-labelledby="radar-title">
          <div className="radar-heading">
            <p className="eyebrow">Workbench, ikke brosjyre</p>
            <h2 id="radar-title">Velg et prosjekt og du ser hvordan jeg tenker.</h2>
            <p>
              Dette er ikke ment som en katalog. Det er et mønster: jeg finner et tregt arbeid,
              forstår systemet bak, og bygger en maskin som gjør det raskere, tryggere og enklere å eie.
            </p>
          </div>

          <div className="radar-grid">
            <div className="project-switcher" role="tablist" aria-label="Prosjektradar">
              {labProjects.map((project, index) => {
                const Icon = project.icon;
                const selected = activeIndex === index;
                return (
                  <button
                    aria-selected={selected}
                    className={selected ? 'selected' : ''}
                    key={project.title}
                    role="tab"
                    type="button"
                    onClick={() => setActiveIndex(index)}
                  >
                    <Icon size={19} aria-hidden="true" />
                    <span>{project.eyebrow}</span>
                  </button>
                );
              })}
            </div>

            <div className="active-project" role="tabpanel">
              <div className="active-project-top">
                <ActiveIcon size={32} aria-hidden="true" />
                <span>{activeProject.eyebrow}</span>
              </div>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.text}</p>
              <div className="impact-grid">
                <div>
                  <span>Effekt</span>
                  <strong>{activeProject.impact}</strong>
                </div>
                <div>
                  <span>Bevis</span>
                  <strong>{activeProject.proof}</strong>
                </div>
              </div>
              <div className="tag-row">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="missions" className="section-block mission-section" aria-labelledby="missions-title">
          <div className="section-heading">
            <p className="eyebrow">Hva du kan bestille</p>
            <h2 id="missions-title">Kom med friksjonen. Jeg bygger rundt den.</h2>
            <p>
              Du trenger ikke vite om løsningen er AI, script, app, dashboard eller integrasjon.
              Du trenger bare å peke på arbeidet som går for sakte, gir feil, eller binder opp flinke folk.
            </p>
          </div>
          <div className="mission-grid">
            {serviceMissions.map((mission) => {
              const Icon = mission.icon;
              return (
                <article className="mission-card" key={mission.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{mission.title}</h3>
                  <p>{mission.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="story" className="story-section" aria-labelledby="story-title">
          <div className="story-copy">
            <p className="eyebrow">Om Jonas</p>
            <h2 id="story-title">Jeg liker når engineering blir programvare, og programvare faktisk treffer arbeidshverdagen.</h2>
            <p>
              Bakgrunnen min går fra ICT og elektro/automasjon til maritime kontrollsystemer, SCD,
              HMI/logic, tekniske dokumenter, AI-prototyper og egne produkter. Det gjør at jeg ofte ser
              automasjonsmuligheter der andre bare ser en tung mappe, en Excel-fil, en PDF eller en
              prosess “som bare må gjøres manuelt”.
            </p>
            <p>
              Jeg sluttet i fast jobb for å teste om jeg kan bygge et selskap rundt det jeg faktisk er
              best på: å forstå komplekse arbeidsflyter fort, gjøre dem konkrete, og bygge verktøy som
              gir folk kontroll tilbake.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={item.year}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proof" className="section-block proof-section" aria-labelledby="proof-title">
          <div className="section-heading compact">
            <p className="eyebrow">Arbeid som viser retningen</p>
            <h2 id="proof-title">Prosjektene er ikke pynt. De er bevis på hva slags problemer jeg klarer å angripe.</h2>
            <p>
              Noe kan vises med screenshots. Noe må beskrives anonymisert fordi det handler om interne
              engineering-dokumenter. Begge deler teller, fordi verdien ligger i systemene bak.
            </p>
          </div>
          <div className="case-grid">
            {proofCases.map((item) => (
              <article className="case-card" key={item.title}>
                <CaseVisual image={item.image} title={item.title} visual={item.visual} />
                <div className="case-copy">
                  <span>{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <strong>{item.metric}</strong>
                  <em>{item.proves}</em>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principle-band" aria-label="Arbeidsprinsipp">
          <strong>Gi meg filene, prosessen og smerten.</strong>
          <span>Jeg lager en liten maskin rundt det, tester den på ekte arbeid, og gjør den trygg nok til å brukes.</span>
        </section>

        <section className="section-block method-section" aria-labelledby="method-title">
          <div className="section-heading compact">
            <p className="eyebrow">Slik starter et oppdrag</p>
            <h2 id="method-title">Ikke stort prosjekt først. Skarp avklaring først.</h2>
          </div>
          <div className="method-list">
            <article className="method-item">
              <span>01</span>
              <h3>Finn repetisjonen</h3>
              <p>Vi går gjennom arbeidsflyten, dataene, filene, folkene, risikoen og hva som tar tid.</p>
            </article>
            <article className="method-item">
              <span>02</span>
              <h3>Bygg en ekte mini-versjon</h3>
              <p>Jeg lager en liten løsning som kan testes på realistisk input, ikke bare en pen demo.</p>
            </article>
            <article className="method-item">
              <span>03</span>
              <h3>Legg inn kontroll</h3>
              <p>Preview, logging, eksport, manuell godkjenning og feilhåndtering kommer før tillit.</p>
            </article>
            <article className="method-item">
              <span>04</span>
              <h3>Skaler bare hvis det gir mening</h3>
              <p>Hvis gevinsten er ekte, bygger vi videre. Hvis ikke, har vi lært billig og raskt.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Kontakt og bestilling</p>
            <h2 id="contact-title">Send meg den kjedelige, tunge, rare arbeidsflyten.</h2>
            <p>
              Det holder med en kort forklaring: hva dere gjør manuelt, hvilke filer eller systemer som
              er involvert, og hva som ville vært verdt å slippe. Jeg svarer med et konkret første steg.
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
                <Code2 size={18} aria-hidden="true" />
                GitHub / Therealkorris
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <fieldset className="need-picker">
              <legend>Hva skal jeg se på først?</legend>
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
                <option>Snarest / avklaringsprat</option>
                <option>Innen 2-4 uker</option>
                <option>1-3 måneder</option>
                <option>Utforsker muligheter</option>
              </select>
            </label>
            <label className="full-span">
              Kort om oppgaven
              <textarea
                rows={5}
                value={form.message}
                onChange={(event) => updateForm('message', event.target.value)}
                placeholder="Eksempel: Vi bruker X timer i uka på å sammenligne disse filene, oppdatere disse dokumentene, eller finne denne informasjonen..."
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
          <span>Praktisk AI, IT og automasjon fra Jonas Korani.</span>
        </div>
        <nav aria-label="Footer">
          <a href="/trailready.html">TrailReady</a>
          <a href="/privacy.html">Privacy</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </footer>
    </>
  );
}

function CaseVisual({ image, title, visual }: { image: string; title: string; visual: string }) {
  if (visual === 'image') {
    return (
      <div className="case-image">
        <img src={image} alt={`${title} skjermbilde`} loading="lazy" />
      </div>
    );
  }

  if (visual === 'trailready') {
    return (
      <div className="case-image trailready-proof">
        <img className="trailready-scene" src={image} alt="TrailReady visuelt app-asset" loading="lazy" />
        <img className="trailready-icon" src="/work/trailready-app-icon-256.png" alt="" loading="lazy" />
      </div>
    );
  }

  return (
    <div className="case-evidence" aria-hidden="true">
      <Search size={22} />
      <span>{title}</span>
      <code>input -&gt; analyse -&gt; preview -&gt; controlled output</code>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
