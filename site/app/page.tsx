import PCBExplorer from '../components/PCBExplorer';
import {categories} from '../content/projects';
import ExperienceList from '../components/ExperienceList';

export default function Home() {
  return <main id="main">
    <section className="pcb-home wrap" aria-label="Introduction and projects">
      <div className="pcb-intro">
        <h1>Gebran Kastoun<span className="period">.</span></h1>
        <p className="hero-statement">I design electronics, write the software that controls them, and test complete systems.</p>
        <p className="muted">Cornell Engineering · SpaceX avionics experience · CUAir electrical leadership</p>
        <nav className="home-links" id="work" aria-label="Portfolio sections">
          {categories.map(category=><a href={`/work/${category.slug}/`} key={category.slug}>{category.title}</a>)}
          <a href="/about/">About</a><a href="/resume/">Resume</a>
        </nav>
      </div>
      <PCBExplorer/>
    </section>
    <section className="wrap section home-experience">
      <div className="section-heading"><h2>Experience</h2><a className="text-link" href="/experience/">Full experience</a></div>
      <ExperienceList compact/>
    </section>
  </main>;
}
