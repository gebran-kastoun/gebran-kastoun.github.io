import ExperienceList from '../../components/ExperienceList';
import Coursework from '../../components/Coursework';
import {pageMetadata} from '../../lib/metadata';
export const metadata=pageMetadata('Experience and Coursework','Engineering experience and selected coursework in embedded systems, electronics, computer architecture, data, math, and physics.','/experience/');
export default function Experience() {
  return <main id="main" className="wrap"><div className="page-intro"><h1>Experience and Coursework</h1><p className="lead">Avionics hardware, aircraft systems, microcontroller teaching, and the coursework behind my engineering work.</p></div><section aria-labelledby="experience-heading"><h2 id="experience-heading">Experience</h2><ExperienceList/></section><Coursework/></main>;
}
