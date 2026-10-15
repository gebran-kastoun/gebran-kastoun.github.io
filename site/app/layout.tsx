import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://gebran-kastoun.github.io'),
  title: { default: 'Gebran Kastoun — Engineering Portfolio', template: '%s | Gebran Kastoun' },
  description: 'Cornell engineering student working across electronics, embedded systems, and digital design. SpaceX avionics experience and Cornell CUAir electrical leadership.',
  alternates: { canonical: '/' },
  icons: {icon:'/favicon.svg'},
  openGraph: { type: 'website', title: 'Gebran Kastoun — Engineering Portfolio', description: 'Electronics, embedded software, and complete systems.', images: [{url:'/images/drawing-car.jpg',width:1500,height:1133,alt:'Autonomous drawing car'}] },
  twitter: {card:'summary_large_image'},
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><head><link rel="preload" href="/fonts/hanken-grotesk.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/></head><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header wrap">
      <a className="brand" href="/" aria-label="Gebran Kastoun home">gk</a>
      <nav aria-label="Primary navigation">
        <div className="work-menu">
          <a className="work-trigger" href="/projects/">Projects</a>
          <div className="work-menu-panel" id="work-categories">
            <a href="/work/power-electronics/">Power &amp; Electronics</a>
            <a href="/work/robotics-embedded/">Robotics &amp; Embedded</a>
            <a href="/work/digital-design/">Digital Design</a>
          </div>
        </div>
        <a href="/suas-2026/">SUAS 2026</a>
        <a href="/experience/">Experience</a>
        <a href="/about/">About</a>
        <a className="nav-resume" href="/resume/">Resume</a>
      </nav>
    </header>
    {children}
    <footer className="footer"><div className="wrap footer-content"><a href="mailto:glk49@cornell.edu">glk49@cornell.edu</a><div className="footer-links"><a href="https://github.com/gebran-kastoun">GitHub</a><a href="https://www.linkedin.com/in/gebran-kastoun/">LinkedIn</a><a href="/spacex/">SpaceX</a><a href="/resume/">Resume</a></div><span>Gebran Kastoun</span></div></footer>
  </body></html>
}
