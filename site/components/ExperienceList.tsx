import {experience} from '../content/experience';

export default function ExperienceList({compact=false}:{compact?:boolean}) {
  return <div className={`experience-list${compact?' experience-compact':''}`}>
    {experience.map(entry=><article className="experience-row" key={entry.company}>
      {compact?<>
        <h3>{entry.company}</h3>
        <div className="experience-details"><p className="experience-role">{entry.role}</p></div>
        {entry.dates&&<p className="experience-date">{entry.dates}</p>}
      </>:<>
        <div className="experience-heading"><h3>{entry.company}</h3><p className="experience-role">{entry.role}</p>{entry.dates&&<p className="experience-date">{entry.dates}</p>}</div>
        <div className="experience-details"><p>{entry.description}</p>{entry.links.length>0&&<div className="experience-links">{entry.links.map(link=><a className="text-link" href={link.url} key={link.url}>{link.title}</a>)}</div>}</div>
      </>}
    </article>)}
  </div>;
}
