import { Logo } from './Logo';
import { useFadeIn } from './useFadeIn';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { languages } from './translations';

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

function LanguageSwitcher({ light = false }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-2">
      {languages.map((l, i) => (
        <span key={l.code} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(l.code)}
            className="font-sans text-[13px] font-medium"
            style={{
              color: light ? '#FFFFFF' : '#2D1B69',
              opacity: lang === l.code ? 1 : 0.55,
            }}
          >
            {l.label}
          </button>
          {i < languages.length - 1 && (
            <span style={{ color: light ? '#FFFFFF' : '#2D1B69', opacity: 0.4 }}>/</span>
          )}
        </span>
      ))}
    </div>
  );
}

function Header() {
  const { t } = useLanguage();
  return (
    <header className="absolute top-0 left-0 right-0 z-10 max-w-[1160px] mx-auto w-full flex items-center justify-between px-6 md:px-0 pt-8">
      <Logo light />
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-8">
          <NavLink href="#about" light>{t.nav.about}</NavLink>
          <NavLink href="#research" light>{t.nav.research}</NavLink>
          <NavLink href="#partners" light>{t.nav.partners}</NavLink>
          <NavLink href="#support" light>{t.nav.support}</NavLink>
        </nav>
        <LanguageSwitcher light />
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();
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
        {t.hero.headline}
      </h1>
      <p className="font-sans max-w-xl mt-8 text-[17px]" style={{ color: '#C9C5DC', lineHeight: 1.6 }}>
        {t.hero.sub}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <PrimaryButton href="#partners">{t.hero.ctaPartnership}</PrimaryButton>
        <OutlineButton href="#support" light>{t.hero.ctaSupport}</OutlineButton>
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
  const { t } = useLanguage();
  return (
    <section id="about" className="px-6 py-16 md:py-24 max-w-[1160px] mx-auto">
      <Fade>
        <Eyebrow>{t.problem.eyebrow}</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.problem.headline}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-3xl">
          <p className="font-sans text-[16px]" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
            {t.problem.p1}
          </p>
          <p className="font-sans text-[16px]" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
            {t.problem.p2}
          </p>
        </div>
      </Fade>
      <Fade className="flex flex-col md:flex-row gap-4 mt-12">
        <StatCard stat="2.14%" label={t.problem.stat1} />
        <StatCard stat="90 days" label={t.problem.stat2} />
        <StatCard stat="6 instruments" label={t.problem.stat3} />
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
  const { t } = useLanguage();
  return (
    <section id="research" className="px-6 py-16 md:py-24" style={{ background: '#F8F7F5' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <Eyebrow>{t.build.eyebrow}</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.build.headline}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <div className="font-sans text-[16px] space-y-5" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
            <p>{t.build.p1}</p>
            <p>{t.build.p2}</p>
          </div>
          <ul className="space-y-5">
            <ListItem>{t.build.list1}</ListItem>
            <ListItem>{t.build.list2}</ListItem>
            <ListItem>{t.build.list3}</ListItem>
            <ListItem>{t.build.list4}</ListItem>
          </ul>
        </div>
      </Fade>
    </section>
  );
}

function FoundingStory() {
  const { t } = useLanguage();
  return (
    <section className="px-6 py-16 md:py-24">
      <Fade className="max-w-2xl mx-auto text-center">
        <Eyebrow>{t.story.eyebrow}</Eyebrow>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.story.headline}
        </h2>
        <p className="font-sans text-[16px] mt-8 text-left" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
          {t.story.body}
        </p>
        <blockquote
          className="font-serif text-left mt-10 pl-6"
          style={{ borderLeft: '2px solid #5EB8A0', fontSize: '1.35rem', lineHeight: 1.4, color: '#1A1A2E' }}
        >
          “{t.story.quote}”
          <footer className="font-sans text-[14px] mt-4 not-italic" style={{ color: '#6B6B8A' }}>
            {t.story.quoteAttr}
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
  const { t } = useLanguage();
  return (
    <section id="partners" className="px-6 py-16 md:py-24" style={{ background: '#F8F7F5' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <Eyebrow>{t.network.eyebrow}</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.network.headline}
        </h2>
        <p className="font-sans text-[15px] mt-6" style={{ color: '#6B6B8A' }}>
          {t.network.intro}
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-8">
          <NetworkColumn
            title={t.network.col1}
            people={[
              { name: 'Prof. Dr. Dirk Jäger', title: t.network.t1 },
              { name: 'Dr. Anna Erat', title: t.network.t2 },
              { name: 'Dr. Hans Rudolf Keller', title: t.network.t3 },
            ]}
          />
          <NetworkColumn
            title={t.network.col2}
            people={[{ name: 'Dr. Mohammad El Hachimi', title: t.network.t4 }]}
          />
          <NetworkColumn
            title={t.network.col3}
            people={[
              { name: 'Dr. Linda Ahnen', title: t.network.t5 },
              { name: 'Swiss Verein structure', title: t.network.t6 },
              { name: 'BASEC IRB submission', title: t.network.t7 },
            ]}
          />
        </div>
        <p className="font-sans text-[13px] mt-10" style={{ color: '#6B6B8A' }}>
          {t.network.footnote}
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
  const { t } = useLanguage();
  return (
    <section className="px-6 py-16 md:py-24 max-w-[1160px] mx-auto">
      <Fade>
        <Eyebrow>{t.partnership.eyebrow}</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.partnership.headline}
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <PartnerCard label={t.partnership.card1Label}>{t.partnership.card1}</PartnerCard>
          <PartnerCard label={t.partnership.card2Label}>{t.partnership.card2}</PartnerCard>
          <PartnerCard label={t.partnership.card3Label}>{t.partnership.card3}</PartnerCard>
        </div>
        <div className="mt-10">
          <PrimaryButton href={mailtoLink('Research Partnership Inquiry')}>
            {t.partnership.cta}
          </PrimaryButton>
        </div>
      </Fade>
    </section>
  );
}

function Support() {
  const { t } = useLanguage();
  return (
    <section id="support" className="px-6 py-16 md:py-24" style={{ background: '#2D1B69' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <h2
          className="font-serif text-white max-w-xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500 }}
        >
          {t.support.headline}
        </h2>
        <div className="font-sans text-[16px] max-w-xl mt-8 space-y-5" style={{ color: '#C9C5DC', lineHeight: 1.7 }}>
          <p>{t.support.p1}</p>
          <p>{t.support.p2}</p>
        </div>
        <div className="mt-10">
          <p className="font-sans text-[14px] mb-4" style={{ color: '#C9C5DC' }}>
            {t.support.donateNote}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton href={mailtoLink('Donation Inquiry')}>{t.support.ctaContact}</PrimaryButton>
            <OutlineButton href={mailtoLink('Grant & Partnership Enquiry')} light>
              {t.support.ctaGrant}
            </OutlineButton>
          </div>
        </div>
      </Fade>
    </section>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="px-6 py-12" style={{ background: '#2A2A38' }}>
      <div className="max-w-[1160px] mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <Logo light />
          <p className="font-sans text-[13px] mt-3" style={{ color: '#9B9AB0' }}>
            {t.footer.address}
          </p>
          <p className="font-sans text-[13px] mt-1" style={{ color: '#9B9AB0' }}>
            {EMAIL}
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <nav className="flex flex-wrap gap-6">
            <NavLink href="#about" light>{t.nav.about}</NavLink>
            <NavLink href="#research" light>{t.nav.research}</NavLink>
            <NavLink href="#partners" light>{t.nav.partners}</NavLink>
            <NavLink href="#support" light>{t.nav.support}</NavLink>
            <NavLink href="#" light>{t.nav.privacy}</NavLink>
          </nav>
          <LanguageSwitcher light />
        </div>
      </div>
      <div className="max-w-[1160px] mx-auto mt-10 pt-6" style={{ borderTop: '1px solid #3D3D4D' }}>
        <p className="font-sans text-[12px]" style={{ color: '#7B7A90' }}>
          {t.footer.bottom}
        </p>
      </div>
    </footer>
  );
}

function Page() {
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

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
