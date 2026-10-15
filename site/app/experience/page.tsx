import ExperienceList from '../../components/ExperienceList';
import Coursework from '../../components/Coursework';
import {pageMetadata} from '../../lib/metadata';
export const metadata=pageMetadata('Experience and Coursework','Engineering experience and selected coursework in embedded systems, electronics, computer architecture, data, math, and physics.','/experience/');
export default function Experience() {
  return <main id="main" className="wrap experience-page"><div className="page-intro"><h1>Experience</h1><p className="lead">My experience spans avionics hardware, aircraft systems, and teaching. Below are the roles and coursework that have shaped my engineering work.</p></div><section aria-labelledby="experience-heading"><h2 id="experience-heading">Engineering experience</h2><ExperienceList/></section><Coursework/></main>;
}
