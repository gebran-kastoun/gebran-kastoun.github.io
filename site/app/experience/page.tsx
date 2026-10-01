import ExperienceList from '../../components/ExperienceList';
import {pageMetadata} from '../../lib/metadata';
export const metadata=pageMetadata('Experience','SpaceX avionics, Cornell CUAir electrical leadership, and microcontroller teaching.','/experience/');
export default function Experience() {
  return <main id="main" className="wrap"><div className="page-intro"><h1>Experience</h1><p className="lead">Avionics hardware, aircraft systems, and microcontroller teaching.</p></div><ExperienceList/></main>;
}
