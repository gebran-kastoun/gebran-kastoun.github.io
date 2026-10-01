import {notFound} from 'next/navigation';
import {categories,projects,getProject} from '../../../content/projects';
import ProjectCard from '../../../components/ProjectCard';
import {pageMetadata} from '../../../lib/metadata';

export function generateStaticParams(){return categories.map(category=>({slug:category.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const category=categories.find(category=>category.slug===slug);
  return category?pageMetadata(category.title,category.description,`/work/${slug}/`,slug==='robotics-embedded'?'/images/drawing-car.jpg':undefined):{title:'Not found'};
}
export default async function Category({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params;
  const category=categories.find(category=>category.slug===slug);
  if(!category)notFound();
  const others=projects.filter(project=>project.categories.includes(slug)&&project.slug!==category.featured);
  return <main id="main" className="wrap">
    <div className="page-intro category-intro">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/#work">Work</a><span>/</span><span>{category.title}</span></nav>
      <h1>{category.title}</h1><p className="lead">{category.description}</p>
    </div>
    <section className="category-feature" aria-label="Featured project"><ProjectCard project={getProject(category.featured)} feature priority/></section>
    {others.length>0&&<section className="section"><h2>Other projects</h2><div className="card-grid">{others.map(project=><ProjectCard key={project.slug} project={project}/>)}</div></section>}
    {slug==='digital-design'&&<section className="companion section"><h2>TinyRV1 on FPGA</h2><div><p>A separate eight-instruction, single-cycle processor with a Verilog datapath and control, directed trace-based verification, and deployment on an Intel Cyclone V.</p><a className="text-link" href="/projects/tinyrv2-processor/#tinyrv1">View TinyRV1 companion</a></div></section>}
    <nav className="category-nav" aria-label="Other project categories">{categories.filter(category=>category.slug!==slug).map(category=><a href={`/work/${category.slug}/`} key={category.slug}>{category.title}</a>)}</nav>
  </main>;
}
