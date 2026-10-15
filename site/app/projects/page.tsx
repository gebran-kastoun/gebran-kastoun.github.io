import WorkSheet from '../../components/WorkSheet';
import PCBExplorer from '../../components/PCBExplorer';
import {pageMetadata} from '../../lib/metadata';

export const metadata=pageMetadata('Projects','Selected electronics, embedded systems, and digital design projects by Gebran Kastoun.','/projects/','/images/drawing-car.jpg');

export default function Projects() {
  return <main id="main" className="projects-page">
    <div className="wrap page-intro"><h1>Projects</h1><p className="lead">My projects span custom boards, embedded control systems, and processor design. Each project page describes my contribution and the design decisions behind the work.</p></div>
    <section className="wrap discipline-explorer"><div><h2>Browse by discipline</h2><p>Select a component to see the projects in that area.</p></div><PCBExplorer/></section>
    <WorkSheet/>
  </main>;
}
