import ExperienceList from '../components/ExperienceList';
import WorkSheet from '../components/WorkSheet';
import {suasCover,suasGallery} from '../content/suas';

export default function Home() {
  return <main id="main">
    <section className="wrap portfolio-intro" aria-label="Introduction">
      <h1>Gebran Kastoun</h1>
      <div className="intro-details">
        <p className="hero-statement">I design electronics and write the embedded software that controls them, from small robots to aircraft avionics.</p>
        <p>Cornell Engineering<br/><a href="/spacex/">SpaceX avionics intern</a><br/><a href="/experience/">CUAir electrical lead</a></p>
        <a className="button" href="#projects">View projects</a>
      </div>
    </section>
    <WorkSheet/>
    <section className="wrap field-section" aria-labelledby="field-heading">
      <div className="section-heading"><h2 id="field-heading">CUAir at SUAS 2026</h2><a className="text-link" href="/suas-2026/">Competition report</a></div>
      <div className="field-photos">{[suasCover,suasGallery[1],suasGallery[6]].map((photo,index)=><a href="/suas-2026/" key={photo.src}><img src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} loading="lazy"/><span>{['Aircraft preparation','Avionics integration','Hermes and the team'][index]}</span></a>)}</div>
      <p className="field-summary">At SUAS 2026 in Tulsa, I worked with CUAir on Hermes’s avionics, gimbal, and preparations for the mission flights.</p>
    </section>
    <section className="home-testing" aria-labelledby="testing-heading"><div className="wrap testing-layout">
      <div><h2 id="testing-heading">Gimbal testing</h2><p>These bench tests and flight recordings show the gimbal’s behavior on the ground and in the air.</p><a className="text-link" href="/projects/gimbal-controller/">Controller design</a></div>
      <figure><video controls playsInline muted preload="none" poster="/images/gimbal/flight-poster.jpg" width="960" height="540" aria-label="Gimbal camera view during a flight"><source src="/videos/gimbal-flight-demo.mp4" type="video/mp4"/></video><figcaption>Under-aircraft camera footage. A 20-second excerpt.</figcaption></figure>
    </div></section>
    <section className="wrap section home-experience">
      <div className="section-heading"><h2>Experience</h2><a className="text-link" href="/experience/">Experience and coursework</a></div>
      <ExperienceList compact/>
    </section>
  </main>;
}
