import { Logo } from './Logo';
import { useFadeIn } from './useFadeIn';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { languages, EMAIL } from './translations';

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
      <p className="font-sans max-w-xl text-[15px] italic" style={{ color: '#C9C5DC' }}>
        {t.hero.eyebrow}
      </p>
      <h1
        className="font-serif text-white max-w-3xl mt-4"
        style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', lineHeight: 1.1, fontWeight: 500 }}
      >
        {t.hero.headline}
      </h1>
      <p className="font-sans max-w-xl mt-8 text-[17px]" style={{ color: '#C9C5DC', lineHeight: 1.6 }}>
        {t.hero.body}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <PrimaryButton href="#partners">{t.hero.ctaPartnership}</PrimaryButton>
        <OutlineButton href="#support" light>{t.hero.ctaSupport}</OutlineButton>
      </div>
    </section>
  );
}

function CitationItem({ text, source }) {
  return (
    <li className="flex gap-3">
      <span style={{ color: '#5EB8A0' }} className="font-serif text-[1.1rem] leading-none mt-0.5">
        —
      </span>
      <p className="font-sans text-[16px]" style={{ lineHeight: 1.6, color: '#1A1A2E' }}>
        {text}{' '}
        <span className="text-[13px]" style={{ color: '#6B6B8A' }}>({source})</span>
      </p>
    </li>
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
        <ul className="space-y-5 mt-10 max-w-3xl">
          {t.problem.items.map((item) => (
            <CitationItem key={item.source} text={item.text} source={item.source} />
          ))}
        </ul>
        <p className="font-sans text-[16px] mt-8 max-w-3xl" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
          {t.problem.closing}
        </p>
      </Fade>
    </section>
  );
}

function WhatWeDo() {
  const { t } = useLanguage();
  return (
    <section id="research" className="px-6 py-16 md:py-24" style={{ background: '#F8F7F5' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <Eyebrow>{t.whatWeDo.eyebrow}</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.whatWeDo.headline}
        </h2>
        <p className="font-sans text-[16px] mt-6 max-w-3xl" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
          {t.whatWeDo.intro}
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl">
          <div>
            <p className="font-sans text-[15px] font-semibold mb-2" style={{ color: '#2D1B69' }}>
              {t.whatWeDo.point1Label}
            </p>
            <p className="font-sans text-[16px]" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
              {t.whatWeDo.point1}
            </p>
          </div>
          <div>
            <p className="font-sans text-[15px] font-semibold mb-2" style={{ color: '#2D1B69' }}>
              {t.whatWeDo.point2Label}
            </p>
            <p className="font-sans text-[16px]" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
              {t.whatWeDo.point2}
            </p>
          </div>
        </div>
        <p className="font-sans text-[16px] mt-8 max-w-3xl" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
          {t.whatWeDo.closing}
        </p>
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

function ForResearchers() {
  const { t } = useLanguage();
  return (
    <section id="partners" className="px-6 py-16 md:py-24" style={{ background: '#F8F7F5' }}>
      <Fade className="max-w-[1160px] mx-auto">
        <Eyebrow>{t.researchers.eyebrow}</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.researchers.headline}
        </h2>
        <p className="font-sans text-[16px] mt-6 max-w-2xl" style={{ lineHeight: 1.7, color: '#1A1A2E' }}>
          {t.researchers.body}
        </p>
        <div className="mt-8">
          <PrimaryButton href={mailtoLink('Research Partnership Inquiry')}>
            {t.researchers.cta}
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
        <Eyebrow>{t.support.eyebrow}</Eyebrow>
        <h2
          className="font-serif text-white max-w-xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500 }}
        >
          {t.support.headline}
        </h2>
        <p className="font-sans text-[16px] max-w-xl mt-6" style={{ color: '#C9C5DC', lineHeight: 1.7 }}>
          {t.support.body}
        </p>
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

function GovernancePerson({ name, title }) {
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

function Governance() {
  const { t } = useLanguage();
  return (
    <section className="px-6 py-16 md:py-24 max-w-[1160px] mx-auto">
      <Fade>
        <Eyebrow>{t.governance.eyebrow}</Eyebrow>
        <h2
          className="font-serif max-w-2xl"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', lineHeight: 1.2, fontWeight: 500, color: '#1A1A2E' }}
        >
          {t.governance.headline}
        </h2>
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          <div>
            <p className="font-sans text-[12px] uppercase tracking-[0.1em] font-semibold mb-2" style={{ color: '#6B6B8A' }}>
              {t.governance.boardLabel}
            </p>
            {t.governance.board.map((p) => (
              <GovernancePerson key={p.name} name={p.name} title={p.title} />
            ))}
          </div>
          <div>
            <p className="font-sans text-[12px] uppercase tracking-[0.1em] font-semibold mb-2" style={{ color: '#6B6B8A' }}>
              {t.governance.advisorsLabel}
            </p>
            {t.governance.advisors.map((p) => (
              <GovernancePerson key={p.name} name={p.name} title={p.title} />
            ))}
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
          <p className="font-sans text-[13px] mt-3" style={{ color: '#9B9AB0' }}>
            {t.footer.independent}
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
      <WhatWeDo />
      <FoundingStory />
      <ForResearchers />
      <Support />
      <Governance />
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
