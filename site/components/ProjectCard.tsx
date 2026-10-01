import type {Project} from '../content/projects';
import ProjectVisual from './ProjectVisual';

export function Tags({tags}:{tags:string[]}) {
  return <ul className="tags" aria-label="Technologies">{tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
}
export default function ProjectCard({project,feature=false,priority=false}:{project:Project;feature?:boolean;priority?:boolean}) {
  const Heading=feature?'h2':'h3';
  return <article className={feature?'project-feature':'project-card'}>
    <a className="project-surface" href={`/projects/${project.slug}/`} aria-label={`View ${project.title} project details`}>
      {(project.cover||project.media)&&<div className="project-visual"><ProjectVisual project={project} priority={priority}/></div>}
      <div className="project-card-copy">
        <Heading>{project.title}</Heading>
        <p>{project.summary}</p>
        {feature&&<p className="contribution"><strong>My contribution:</strong> {project.role}</p>}
        <Tags tags={project.technologies.slice(0,3)}/>
        <span className="text-link">View project</span>
      </div>
    </a>
  </article>;
}
