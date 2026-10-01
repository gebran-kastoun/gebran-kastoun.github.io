import {pageMetadata} from '../../lib/metadata';
import {resumes} from '../../content/resumes';
export const metadata=pageMetadata('Resume','Hardware, software, and robotics resumes for Gebran Kastoun.','/resume/');
export default function Resume() {
  return <main id="main" className="wrap"><div className="page-intro"><h1>Resume</h1><p className="lead">Hardware · Software · Robotics</p></div>
    {resumes.length>0?<section className="section resume-library" aria-label="Resumes"><h2>Choose a resume</h2><div className="card-grid">{resumes.map(resume=><article className="resume-card" key={resume.file}><h3>{resume.title}</h3><p>{resume.description}</p><div className="resume-card-links"><a className="button" href={resume.file} target="_blank" rel="noopener noreferrer">View PDF</a><a className="text-link" href={resume.file} download>Download PDF</a></div></article>)}</div></section>
    :<section className="resume-section"><div><p>For a current resume tailored to your role, reach me at <a className="inline-link" href="mailto:glk49@cornell.edu">glk49@cornell.edu</a>.</p><a className="button" href="mailto:glk49@cornell.edu?subject=Resume%20request">Request a resume</a></div><nav aria-label="Resume and experience links"><a className="resume-link" href="/experience/">Experience</a><a className="resume-link" href="/#projects">Projects</a><a className="resume-link" href="https://github.com/gebran-kastoun">GitHub ↗</a></nav></section>}
  </main>;
}
