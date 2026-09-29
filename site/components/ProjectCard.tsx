import type {Project} from '../content/projects';
import ProjectVisual from './ProjectVisual';
export function Tags({tags}:{tags:string[]}){return <ul className="tags" aria-label="Technologies">{tags.map(t=><li key={t}>{t}</li>)}</ul>}
export default function ProjectCard({project,feature=false}:{project:Project;feature?:boolean}){
 const Heading=feature?'h2':'h3';
 return <article className={feature?'project-feature':'project-card'}><a href={`/projects/${project.slug}/`} className="visual-link" aria-label={`Explore ${project.title}`}><ProjectVisual kind={project.media}/></a><div className="project-card-copy"><p className="eyebrow">{project.context}</p><Heading><a href={`/projects/${project.slug}/`}>{project.title}</a></Heading><p>{project.summary}</p>{feature&&<><p className="contribution"><span>My contribution</span>{project.role}</p>{project.results?.map(r=><p key={r} className="result">{r}</p>)}</>}<Tags tags={project.technologies}/><a className="text-link" href={`/projects/${project.slug}/`}>Explore project <span>↗</span></a></div></article>
}
