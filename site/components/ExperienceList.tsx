import {experience} from '../content/experience';

export default function ExperienceList({compact=false}:{compact?:boolean}) {
  const Heading=compact?'h3':'h2';
  return <div className={`experience-list${compact?' experience-compact':''}`}>
    {experience.map(entry=><article className="experience-row" key={entry.company}>
      <Heading>{entry.company}</Heading>
      <div className="experience-details"><p className="experience-role">{entry.role}</p>{!compact&&<><p>{entry.description}</p><div className="experience-links">{entry.links.map(link=><a className="text-link" href={link.url} key={link.url}>{link.title}</a>)}</div></>}</div>
      {entry.dates&&<p className="experience-date">{entry.dates}</p>}
    </article>)}
  </div>;
}
