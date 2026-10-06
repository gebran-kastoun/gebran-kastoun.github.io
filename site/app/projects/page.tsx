import ProjectCard from '../../components/ProjectCard';
import {categories,getProject} from '../../content/projects';
import {pageMetadata} from '../../lib/metadata';

export const metadata=pageMetadata('Projects','Selected electronics, embedded systems, and digital design projects by Gebran Kastoun.','/projects/','/images/drawing-car.jpg');

export default function Projects() {
  return <main id="main" className="wrap projects-page">
    <div className="page-intro"><h1>Projects</h1><p className="lead">Boards, embedded systems, and processor designs.</p></div>
    <section className="projects-feature" aria-label="Featured project">
      <p className="projects-kicker">Featured project</p>
      <ProjectCard project={getProject('autonomous-drawing-car')} feature priority/>
    </section>
    <section className="projects-categories" aria-labelledby="projects-categories-heading">
      <h2 id="projects-categories-heading">Explore by discipline</h2>
      <div className="projects-category-grid">{categories.map(category=><a className="projects-category" href={`/work/${category.slug}/`} key={category.slug}>
        <h3>{category.title}</h3><p>{category.description}</p><span>View projects <span aria-hidden="true">→</span></span>
      </a>)}</div>
    </section>
  </main>;
}
