import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// Public files live under Vite's base path (e.g. /navi-project-web/ on GitHub Pages).
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const downloadUrl = import.meta.env.VITE_DOWNLOAD_URL || asset('downloads/Navi.dmg');
// There is no web app yet; sign-in happens in the Mac app, so this points at the download.
const appUrl = import.meta.env.VITE_APP_URL || '#top';

const benefits = [
  {
    className: 'benefit-card--dark',
    eyebrow: '01 · MAIL',
    title: <>안 읽은 메일에서<br />결정할 것만 골라요.</>,
    description: <>중요도를 판단하고, 필요한 답장은 나의 기존 말투로 초안까지<br className="desktop-only" /> 준비합니다.</>,
    result: '70개 처리 → 4개만 확인',
    icon: asset('assets/benefit-mark-light.svg'),
    iconBackground: 'light',
  },
  {
    className: 'benefit-card--lavender',
    eyebrow: '02 · CALENDAR',
    title: <>일정을 읽고<br />미리 준비할 일을 제안해요.</>,
    description: <>오늘 일정뿐 아니라 이동시간, 반복 패턴, 마감까지 살펴 적절한<br className="desktop-only" /> 순간에 알려줍니다.</>,
    result: '출발 시간까지 자동 계산',
    icon: asset('assets/benefit-mark-purple.svg'),
    iconBackground: 'purple',
  },
  {
    className: 'benefit-card--cream',
    eyebrow: '03 · TO-DO',
    title: <>해야 할 일을 정리하고<br />다음 액션까지 이어줘요.</>,
    description: <>일정과 메일을 바탕으로 이번 주에 준비할 일을 정리하고,<br className="desktop-only" /> 필요한 할 일과 리마인드를 제안합니다.</>,
    result: '명령 하나로 간단하고 빠르게 추가',
    icon: asset('assets/benefit-mark-light.svg'),
    iconBackground: 'dark',
  },
];

function Logo({ compact = false }) {
  return (
    <a className={`logo${compact ? ' logo--compact' : ''}`} href="#top" aria-label="Navi 홈">
      <img className="logo__mark" src={asset('assets/logo-mark.svg')} alt="" />
      <img className="logo__wordmark" src={asset('assets/logo-wordmark.svg')} alt="navi" />
    </a>
  );
}

function DownloadButton({ variant = 'primary', children = 'MacOS 용 무료 다운로드' }) {
  return (
    <a className={`download-button download-button--${variant}`} href={downloadUrl} download>
      {variant === 'primary' && <span className="apple-mark" aria-hidden="true"></span>}
      <span>{children}</span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="주요 메뉴">
      <Logo />
      <nav className="site-nav">
        <a href="#product">Product</a>
        <a href="#solutions">Solutions</a>
        <a href="#pricing">Pricing</a>
        <a href="#docs">Docs</a>
      </nav>
      <a className="login-button" href={appUrl}>로그인</a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <Header />
      <img className="hero__orbit" src={asset('assets/hero-orbit.svg')} alt="" aria-hidden="true" />
      <div className="hero__content">
        <h1>
          <span className="hero__title-light">당신의 하루를 먼저 읽고,</span>
          <span className="hero__title-accent">중요한 일을 끝까지 실행하는 AI 비서.</span>
        </h1>
        <img className="hero__dots" src={asset('assets/hero-dots.svg')} alt="" aria-hidden="true" />
        <p className="hero__description">
          메일, 일정, 화면의 맥락을 이해해 먼저 알려주고, 실제 행동은 반드시 당신의 승인 후 실행합니다.
        </p>
        <DownloadButton />
      </div>
      <a className="product-preview" href="#product" aria-label="Navi 제품 미리보기로 이동">
        <img src={asset('assets/product-mockup.png')} alt="Navi 대시보드 제품 미리보기" />
      </a>
    </section>
  );
}

function BenefitCard({ benefit }) {
  return (
    <article className={`benefit-card ${benefit.className}`}>
      <div className={`benefit-card__icon benefit-card__icon--${benefit.iconBackground}`}>
        <img src={benefit.icon} alt="" aria-hidden="true" />
      </div>
      <p className="benefit-card__eyebrow">{benefit.eyebrow}</p>
      <h3>{benefit.title}</h3>
      <p className="benefit-card__description">{benefit.description}</p>
      <p className="benefit-card__result">{benefit.result}</p>
    </article>
  );
}

function Benefits() {
  return (
    <section id="product" className="benefits">
      <div className="section-intro">
        <span className="section-kicker">앱을 열기 전부터</span>
        <h2>중요한 것만 남기고, 다음 행동까지 준비합니다.</h2>
        <p>navi는 답변만 하는 챗봇이 아니라, 사용자의 메일·일정·업무 맥락을 조용히 연결하는 개인 AI 비서입니다.</p>
      </div>
      <div className="benefit-grid" id="solutions">
        {benefits.map((benefit) => <BenefitCard key={benefit.eyebrow} benefit={benefit} />)}
      </div>
      <div className="context-banner" id="pricing">
        <p>보고&nbsp; → &nbsp;이해하고&nbsp; → &nbsp;제안하고&nbsp; → &nbsp;승인받고&nbsp; → &nbsp;실행합니다</p>
        <span>중요한 행동은 언제나 사용자 확인 후에.</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="docs">
      <Logo compact />
      <span>© 2026 Navi. Your day, understood.</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
