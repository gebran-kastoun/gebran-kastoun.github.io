import {notFound} from 'next/navigation';
import {projects,categories} from '../../../content/projects';
import MediaGallery from '../../../components/MediaGallery';
import BoardComparison from '../../../components/BoardComparison';
import FeaturedVideo from '../../../components/FeaturedVideo';
import ProjectVisual from '../../../components/ProjectVisual';
import {Tags} from '../../../components/ProjectCard';
import {pageMetadata} from '../../../lib/metadata';

export function generateStaticParams(){return projects.map(project=>({slug:project.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const project=projects.find(project=>project.slug===slug);
  return project?pageMetadata(project.title,project.summary,`/projects/${slug}/`,project.cover?.src):{title:'Not found'};
}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const project=projects.find(project=>project.slug===slug);
  if(!project)notFound();
  const category=categories.find(category=>category.slug===project.categories[0])!;
  const nextProject=projects[(projects.findIndex(candidate=>candidate.slug===slug)+1)%projects.length];
  const showToc=project.sections.length>=5;
  return <main id="main" className="wrap project-page">
    <nav className="breadcrumbs project-breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href={`/work/${category.slug}/`}>{category.title}</a><span>/</span><span>{project.shortTitle}</span></nav>
    <header className="project-intro">
      <p className="project-context">{project.context}{project.dates?` · ${project.dates}`:''}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.summary}</p>
      <div className="project-intro-bottom"><p><span>Status</span> {project.status}</p><Tags tags={project.technologies.slice(0,4)}/></div>
    </header>
    {project.featuredVideo&&<FeaturedVideo video={project.featuredVideo}/>}
    {(project.cover||project.media)&&<figure className="project-hero"><ProjectVisual project={project} priority/><figcaption>{project.cover?.caption??project.caption}{project.cover?.credit&&<> <a href={project.cover.credit.url}>{project.cover.credit.label} ↗</a></>}</figcaption></figure>}
    <dl className="project-facts"><div><dt>My contribution</dt><dd>{project.role}</dd></div><div><dt>Platform</dt><dd>{project.platform}</dd></div></dl>
    {project.boardComparison&&<BoardComparison comparison={project.boardComparison}/>}
    <MediaGallery items={project.gallery}/>
    {showToc&&<nav className="project-jump" aria-label="On this page"><p>On this page</p><div>{project.sections.map(section=><a href={`#${section.id}`} key={section.id}>{section.title}</a>)}{project.links.length>0&&<a href="#resources">Resources</a>}</div></nav>}
    <div className="project-story">
      {project.sections.map(section=><section className="project-section" id={section.id} key={section.id}>
        <h2>{section.title}</h2>
        <div className="project-section-copy">{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul>}{section.code&&<pre><code>{section.code}</code></pre>}</div>
      </section>)}
      {project.links.length>0&&<section className="project-section" id="resources"><h2>Resources</h2><div className="project-section-copy resource-links">{project.links.map(link=><a className="text-link" href={link.url} key={link.url}>{link.label} ↗</a>)}</div></section>}
    </div>
    <nav className="project-next" aria-label="Continue browsing projects"><div><p>Next project</p><a href={`/projects/${nextProject.slug}/`}>{nextProject.title} <span aria-hidden="true">→</span></a></div><a className="text-link" href={`/work/${category.slug}/`}>All {category.title} projects</a></nav>
  </main>;
}
