import { Logo } from './Logo';
import { useFadeIn } from './useFadeIn';

const EMAIL = 'contact@lifeanchor.ai';

function mailtoLink(subject) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

function Fade({ as: Tag = 'div', className = '', children }) {
  const ref = useFadeIn();
  return (
    <Tag ref={ref} className={`fade-in ${className}`}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children }) {
  return (
    <p
      className="font-sans text-[11px] uppercase tracking-[0.12em] font-semibold mb-4"
      style={{ color: '#2D1B69' }}
    >
      {children}
    </p>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block text-center font-sans font-medium text-[14px] uppercase tracking-[0.08em] text-white px-7 py-3.5"
      style={{ background: '#5EB8A0' }}
    >
      {children}
    </a>
  );
}

function OutlineButton({ href, light = false, children }) {
  return (
    <a
      href={href}
      className="inline-block text-center font-sans font-medium text-[14px] uppercase tracking-[0.08em] px-7 py-3.5 border"
      style={
        light
          ? { borderColor: '#FFFFFF', borderWidth: '1.5px', color: '#FFFFFF' }
          : { borderColor: '#2D1B69', borderWidth: '1.5px', color: '#2D1B69' }
      }
    >
      {children}
    </a>
  );
}

function NavLink({ href, light = false, children }) {
  return (
    <a
      href={href}
      className="font-sans text-[14px] font-medium"
      style={{ color: light ? '#FFFFFF' : '#2D1B69' }}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 max-w-[1160px] mx-auto w-full flex items-center justify-between px-6 md:px-0 pt-8">
      <Logo light />
      <nav className="hidden md:flex items-center gap-8">
        <NavLink href="#about" light>About</NavLink>
        <NavLink href="#research" light>Research</NavLink>
        <NavLink href="#partners" light>Partners</NavLink>
        <NavLink href="#support" light>Support</NavLink>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center text-center"
      style={{ background: '#2D1B69' }}
    >
      <Header />
      <h1
        className="font-serif text-white max-w-3xl"
        style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.2, fontWeight: 500 }}
      >
        The emotional dimension of cancer has never been measured. We are
        building the infrastructure to change that.
      </h1>
      <p className="font-sans max-w-xl mt-8 text-[17px]" style={{ color: '#C9C5DC', lineHeight: 1.6 }}>
        LifeAnchor is a Swiss nonprofit developing AI-assisted longitudinal
        psycho-oncology research infrastructure — free to patients, grounded
        in validated science, designed for research collaboration.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <PrimaryButton href="#partners">Research Partnership</PrimaryButton>
        <OutlineButton href="#support" light>Support Our Work</OutlineButton>
      </div>
    </section>
  );
}

function StatCard({ stat, label }) {
  return (
    <div className="flex-1 p-7" style={{ background: '#F8F7F5' }}>
      <p className="font-serif text-[2rem]" style={{ color: '#2D1B69' }}>
        {stat}
      </p>
      <p className="font-sans text-[14px] mt-2" style={{ color: '#1A1A2E' }}>
        {label}
      </p>
    </div>
  );
}

function Problem() {
  return (
    <section id="about" className="px-6 py-16 md:py-24 max-w-[1160px] mx-auto">
      <Fade>
        <Eyebrow>THE GAP</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          90 days without support. Every patient. Every diagnosis.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-3xl">
          <p className="font-sans text-[16px]" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
            In the 90 days following a cancer diagnosis, most patients
            receive no structured psychological contact. Distress is
            near-universal in this period — yet it goes undetected,
            unmeasured, and unaddressed. Untreated distress reduces
            treatment adherence. It is a clinical problem with a data gap
            at its centre.
          </p>
          <p className="font-sans text-[16px]" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
            Psycho-oncology research has been constrained for decades by the
            same limitation: validated longitudinal patient data is
            expensive to collect, difficult to sustain across the full
            cancer journey, and almost impossible to gather at scale.
            LifeAnchor was built to solve this.
          </p>
        </div>
      </Fade>
      <Fade className="flex flex-col md:flex-row gap-4 mt-12">
        <StatCard stat="2.14%" label="of oncology research funding is allocated to psycho-oncology globally" />
        <StatCard stat="90 days" label="median gap in psychosocial contact after diagnosis" />
        <StatCard
          stat="6 instruments"
          label="PHQ-9, GAD-7, FACT-G, IES-R, BPI, Distress Thermometer — embedded conversationally, not administered as questionnaires"
        />
      </Fade>
    </section>
  );
}

function ListItem({ children }) {
  return (
    <li className="flex gap-3 font-sans text-[15px]" style={{ color: '#1A1A2E', lineHeight: 1.6 }}>
      <span style={{ color: '#2D1B69' }}>✦</span>
      <span>{children}</span>
    </li>
  );
}

function WhatWeBuild() {
  return (
    <section id="research" className="px-6 py-16 md:py-24" style={{ background: '#F8F7F5' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <Eyebrow>RESEARCH INFRASTRUCTURE</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          Longitudinal data at the scale psycho-oncology research has always
          needed.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div className="font-sans text-[16px] space-y-5" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
            <p>
              LifeAnchor embeds six validated psychometric instruments
              invisibly in AI-assisted check-in conversations with cancer
              patients. The result is a continuous, consent-governed,
              IRB-ready longitudinal dataset that maps psychosocial state
              across the full treatment journey — diagnosis, active
              treatment, remission, and survivorship.
            </p>
            <p>
              This is not a questionnaire tool. It is a data collection
              infrastructure designed for research collaboration. Clinical
              partners define the research questions. LifeAnchor provides
              the methodology, the platform, and the patient reach. The data
              remains under Swiss Foundation governance — with patients in
              control of their own records.
            </p>
          </div>
          <ul className="space-y-5">
            <ListItem>Swiss Foundation governance — patient data never sold</ListItem>
            <ListItem>GDPR-compliant architecture — Swiss data residency</ListItem>
            <ListItem>
              Validated instruments — PHQ-9, GAD-7, FACT-G, IES-R, BPI,
              Distress Thermometer
            </ListItem>
            <ListItem>IRB-ready data schema — built for co-publication</ListItem>
          </ul>
        </div>
      </Fade>
    </section>
  );
}

function FoundingStory() {
  return (
    <section className="px-6 py-16 md:py-24">
      <Fade className="max-w-2xl mx-auto text-center">
        <Eyebrow>WHY WE EXIST</Eyebrow>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          Built by a cancer survivor.
        </h2>
        <p className="font-sans text-[16px] mt-8 text-left" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
          Dov Bar-Gera, co-founder and chairman of LifeAnchor, experienced
          firsthand what no dataset captures: the psychological void of a
          cancer diagnosis, and the absence of any structured support in the
          weeks that follow. LifeAnchor began as his answer to that void —
          and has grown into a research infrastructure project with
          clinical advisors, academic partners, and regulatory grounding
          across Switzerland and Europe.
        </p>
        <blockquote
          className="font-serif text-left mt-10 pl-6"
          style={{ borderLeft: '2px solid #5EB8A0', fontSize: '1.35rem', lineHeight: 1.4, color: '#1A1A2E' }}
        >
          “There is no tool that measures what cancer does to a person
          psychologically — across time, across treatment, at scale. That is
          what we are building.”
          <footer className="font-sans text-[14px] mt-4 not-italic" style={{ color: '#6B6B8A' }}>
            — Dov Bar-Gera, Co-Founder &amp; Chairman
          </footer>
        </blockquote>
      </Fade>
    </section>
  );
}

function PersonCard({ name, title }) {
  return (
    <div className="py-4" style={{ borderTop: '1px solid #E8E6F0' }}>
      <p className="font-sans text-[15px] font-semibold" style={{ color: '#1A1A2E' }}>
        {name}
      </p>
      <p className="font-sans text-[14px] mt-1" style={{ color: '#6B6B8A' }}>
        {title}
      </p>
    </div>
  );
}

function NetworkColumn({ title, people }) {
  return (
    <div>
      <p className="font-sans text-[12px] uppercase tracking-[0.1em] font-semibold mb-2" style={{ color: '#6B6B8A' }}>
        {title}
      </p>
      {people.map((p) => (
        <PersonCard key={p.name} name={p.name} title={p.title} />
      ))}
    </div>
  );
}

function Network() {
  return (
    <section id="partners" className="px-6 py-16 md:py-24" style={{ background: '#F8F7F5' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <Eyebrow>OUR NETWORK</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          Anchored in Swiss and European science.
        </h2>
        <p className="font-sans text-[15px] mt-6" style={{ color: '#6B6B8A' }}>
          LifeAnchor's advisory board and clinical network includes:
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-8">
          <NetworkColumn
            title="Scientific Advisory Board"
            people={[
              { name: 'Prof. Dr. Dirk Jäger', title: 'Managing Director, NCT Heidelberg' },
              { name: 'Dr. Anna Erat', title: 'Senior Health Economist, WHO' },
              { name: 'Dr. Hans Rudolf Keller', title: 'Former CEO, Swiss Cancer Institute; Former CEO, pharmaSuisse' },
            ]}
          />
          <NetworkColumn
            title="Clinical Partners"
            people={[
              { name: 'Dr. Mohammad El Hachimi', title: 'SONIC, Geneva University Hospitals' },
            ]}
          />
          <NetworkColumn
            title="Regulatory"
            people={[
              { name: 'Dr. Linda Ahnen', title: 'Regulatory Advisor, Lucendra (Swiss VVG pathway, EU AI Act classification)' },
              { name: 'Swiss Verein structure', title: 'Data controller under Swiss and EU law' },
              { name: 'BASEC IRB submission', title: 'In preparation' },
            ]}
          />
        </div>
        <p className="font-sans text-[13px] mt-10" style={{ color: '#6B6B8A' }}>
          LifeAnchor.ai is a Swiss Verein registered in Erlenbach, Canton
          Zurich. Tax exemption application submitted to Kantonales
          Steueramt Zürich.
        </p>
      </Fade>
    </section>
  );
}

function PartnerCard({ label, children }) {
  return (
    <div className="flex-1 p-7" style={{ border: '2px solid #E8E6F0' }}>
      <p className="font-sans text-[12px] uppercase tracking-[0.1em] font-semibold mb-3" style={{ color: '#2D1B69' }}>
        {label}
      </p>
      <p className="font-sans text-[15px]" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
        {children}
      </p>
    </div>
  );
}

function ResearchPartnership() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-[1160px] mx-auto">
      <Fade>
        <Eyebrow>FOR RESEARCH PARTNERS</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          The longitudinal dataset your research cannot currently collect.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <PartnerCard label="Clinical Institutions">
            Co-investigator model. Your patients. Our platform. Shared
            publications. LifeAnchor integrates with existing clinical
            pathways — no IT burden, no additional staff time. IRB
            applications co-designed with your ethics team.
          </PartnerCard>
          <PartnerCard label="Grant-Makers & Foundations">
            We are a research infrastructure, not a product vendor. Grants
            support platform development, IRB compliance, and research data
            collection. Your grantees gain access to a pre-consented,
            longitudinal patient cohort they cannot build independently.
          </PartnerCard>
          <PartnerCard label="Academic Researchers">
            Dataset access agreements for post-POC data. Co-publication
            framework in place. First dataset access agreements being
            structured for 2027 delivery. Inquire about research
            collaboration.
          </PartnerCard>
        </div>
        <div className="mt-10">
          <PrimaryButton href={mailtoLink('Research Partnership Inquiry')}>
            Discuss a Research Partnership
          </PrimaryButton>
        </div>
      </Fade>
    </section>
  );
}

function Support() {
  return (
    <section id="support" className="px-6 py-16 md:py-24" style={{ background: '#2D1B69' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <h2
          className="font-serif text-white max-w-xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500 }}
        >
          Support research that changes what is possible for cancer
          patients.
        </h2>
        <div className="font-sans text-[16px] max-w-xl mt-8 space-y-5" style={{ color: '#C9C5DC', lineHeight: 1.7 }}>
          <p>
            LifeAnchor is permanently free to every patient who uses it. Our
            work is funded through grants, research partnerships, and the
            support of individuals and foundations who believe longitudinal
            psycho-oncology data is long overdue.
          </p>
          <p>
            LifeAnchor.ai is a Swiss nonprofit (Verein) registered in
            Erlenbach, Canton Zurich. Tax-exempt status under application.
            Donations are acknowledged with formal Swiss
            Spendenbescheinigung.
          </p>
        </div>
        <div className="mt-10">
          <p className="font-sans text-[14px] mb-4" style={{ color: '#C9C5DC' }}>
            Donations open soon — contact us to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton href={mailtoLink('Donation Inquiry')}>Contact Us</PrimaryButton>
            <OutlineButton href={mailtoLink('Grant & Partnership Enquiry')} light>
              Grant &amp; Partnership Enquiry
            </OutlineButton>
          </div>
        </div>
      </Fade>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-12" style={{ background: '#2A2A38' }}>
      <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <Logo light />
          <p className="font-sans text-[13px] mt-3" style={{ color: '#9B9AB0' }}>
            Verein LifeAnchor.ai · Im Allmendi 11, 8703 Erlenbach · Switzerland
          </p>
          <p className="font-sans text-[13px] mt-1" style={{ color: '#9B9AB0' }}>
            {EMAIL}
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 h-fit">
          <NavLink href="#about" light>About</NavLink>
          <NavLink href="#research" light>Research</NavLink>
          <NavLink href="#partners" light>Partners</NavLink>
          <NavLink href="#support" light>Support</NavLink>
          <NavLink href="#" light>Privacy Policy</NavLink>
        </nav>
      </div>
      <div className="max-w-[1160px] mx-auto mt-10 pt-6" style={{ borderTop: '1px solid #3D3D4D' }}>
        <p className="font-sans text-[12px]" style={{ color: '#7B7A90' }}>
          © 2026 LifeAnchor.ai · Swiss Verein · lifeanchor.ai is the product
          site · lifeanchor.org is the research and foundation site
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans" style={{ color: '#1A1A2E' }}>
      <Hero />
      <Problem />
      <WhatWeBuild />
      <FoundingStory />
      <Network />
      <ResearchPartnership />
      <Support />
      <Footer />
    </div>
  );
}
