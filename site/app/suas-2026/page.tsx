import {MediaFigure} from '../../components/MediaGallery';
import {suasCover,suasGallery,suasGimbalDebug,suasTimeline} from '../../content/suas';
import {pageMetadata} from '../../lib/metadata';

export const metadata=pageMetadata(
  'SUAS 2026',
  'Gebran Kastoun’s account of Cornell CUAir and Hermes at the 2026 Student Unmanned Aerial Systems competition in Tulsa.',
  '/suas-2026/',
  suasCover.src,
);

export default function Suas2026() {
  return <main id="main" className="suas-page">
    <section className="wrap suas-hero" aria-labelledby="suas-title">
      <div className="suas-hero-copy">
        <p className="suas-kicker">Cornell CUAir · September 2026</p>
        <h1 id="suas-title">SUAS 2026<span className="period">.</span></h1>
        <p className="suas-lead">Four months of building led to a week of aircraft checks, mission flights, and hard lessons in Tulsa.</p>
        <p className="suas-hero-role">Gebran Kastoun · CUAir Electrical Subteam Lead</p>
        <a className="suas-hero-link" href="#gimbal-debugging">The gimbal work <span aria-hidden="true">↘</span></a>
      </div>
      <figure className="suas-hero-photo"><img src={suasCover.src} width={suasCover.width} height={suasCover.height} alt={suasCover.alt} fetchPriority="high"/><figcaption>{suasCover.caption}</figcaption></figure>
    </section>

    <nav className="wrap suas-local-nav" aria-label="On this page">
      <a href="#mission">The mission</a><a href="#my-role">My role</a><a href="#gimbal-debugging">Gimbal work</a><a href="#competition-week">Competition week</a><a href="#results">Results &amp; lessons</a><a href="#photos">Photos</a>
    </nav>

    <section className="wrap suas-overview" id="mission" aria-labelledby="suas-mission-heading">
      <div><p className="suas-section-label">The brief</p><h2 id="suas-mission-heading">A full mission, on the clock.</h2></div>
      <div className="suas-prose"><p>The <a href="https://suas-competition.org/">Student Unmanned Aerial Systems competition</a> asks teams to build and operate an autonomous aircraft, navigate a mission, gather imagery, and deliver payloads. In 2026, teams gathered at Skyway Range in Tulsa for a storm-response scenario.</p><p>CUAir brought Hermes, a fixed-wing aircraft built and tested over four months. The mission window covered setup and flight together: the aircraft had to be ready quickly, fly within the course, identify targets, and return useful mapping and delivery results.</p></div>
    </section>

    <section className="wrap suas-metrics" aria-label="Competition at a glance">
      <div><strong>64</strong><span>teams at SUAS 2026</span></div>
      <div><strong>34.9 lb</strong><span>Hermes at safety inspection</span></div>
      <div><strong>4 laps</strong><span>during the first mission flight</span></div>
    </section>

    <section className="wrap suas-split" id="my-role" aria-labelledby="suas-role-heading">
      <div><p className="suas-section-label">On the team</p><h2 id="suas-role-heading">My role</h2></div>
      <div className="suas-prose"><p>As CUAir’s Electrical Subteam Lead, I worked on Hermes’s avionics and used a transmitter during ground testing. My most substantial technical work that week was finding a difficult gimbal bug.</p><p>After the first mission flight, I found and recovered the detached tail where it had landed hidden in the field, giving the team the part it needed to inspect the failure.</p><div className="suas-related"><span>Related CUAir work</span><a href="/projects/gimbal-controller/">Gimbal Controller ↗</a><a href="/projects/avionics-power-converter/">Avionics Power Converter ↗</a></div></div>
    </section>

    <section className="wrap suas-debug" id="gimbal-debugging" aria-labelledby="suas-debug-heading"><div><p className="suas-section-label">Main technical contribution</p><h2 id="suas-debug-heading">The gimbal bug</h2></div><div><p>{suasGimbalDebug.intro}</p>{suasGimbalDebug.details.map(detail=><div className="suas-debug-detail" key={detail.heading}><h3>{detail.heading}</h3><p>{detail.text}</p></div>)}</div></section>

    <section className="wrap suas-story" id="competition-week" aria-labelledby="suas-week-heading">
      <div className="suas-story-head"><div><p className="suas-section-label">Competition week</p><h2 id="suas-week-heading">From tests to flights</h2></div><p>Progress was measured in setup time, safe launches, and what the team learned when something failed.</p></div>
      <div className="suas-timeline">{suasTimeline.map((step,index)=><article key={step.label}><span className="suas-timeline-number">{String(index+1).padStart(2,'0')}</span><div><p className="suas-timeline-label">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
    </section>

    <section className="wrap suas-results" id="results" aria-labelledby="suas-results-heading">
      <div><p className="suas-section-label">What came out of it</p><h2 id="suas-results-heading">Results &amp; lessons</h2></div>
      <div className="suas-prose"><p>The team placed <strong>4th for website</strong>, <strong>11th for technical design report</strong>, and <strong>38th in the mission</strong>. The first flight marked CUAir’s first autonomous takeoff at a competition and its first successful autonomous horizontal flight since SUAS 2024.</p><p>Those milestones came alongside missed mission points and hardware failures. The clearest next steps are tighter preflight and connector checks, less weight, and full mission rehearsals before the next competition.</p><div className="suas-related"><span>Read more</span><a href="https://suas-competition.org/2026/results">Official SUAS 2026 results ↗</a><a href="https://mcorgi.github.io/suas-2026/">A teammate’s competition account ↗</a></div></div>
    </section>

    <section className="wrap suas-photos" id="photos" aria-labelledby="suas-photos-heading"><div className="suas-story-head"><div><p className="suas-section-label">From Tulsa</p><h2 id="suas-photos-heading">Photos from the week</h2></div><p>A few moments from the aircraft and the team, selected from Gebran’s competition photos.</p></div><div className="suas-photo-grid">{suasGallery.map(item=><MediaFigure key={item.src} item={item}/>)}</div></section>

    <nav className="wrap suas-end-nav" aria-label="Continue browsing"><a href="/work/robotics-embedded/">Robotics &amp; Embedded <span aria-hidden="true">→</span></a><a href="/experience/">Full experience <span aria-hidden="true">→</span></a></nav>
  </main>;
}
