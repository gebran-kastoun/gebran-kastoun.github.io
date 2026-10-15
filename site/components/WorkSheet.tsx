import {gimbalBoardComparison} from '../content/gimbal';
import {drawingCarPhoto,floatingBoxSystem,floatingBoxWiring} from '../content/media';
import {projects} from '../content/projects';
import type {ImageMedia} from '../content/types';

function Frame({image,href,caption,priority=false}:{image:ImageMedia;href:string;caption:string;priority?:boolean}) {
  return <a className={`work-frame${image.fit==='contain'?' work-frame-diagram':''}`} href={href}>
    <img src={image.src} width={image.width} height={image.height} alt={image.alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'}/><span>{caption}</span>
  </a>;
}

export default function WorkSheet() {
  return <section className="wrap work-sheet" id="projects" aria-labelledby="work-heading">
    <div className="work-rail"><h2 id="work-heading">Projects</h2><nav aria-label="Project disciplines"><a href="/work/power-electronics/">Electronics</a><a href="/work/robotics-embedded/">Embedded systems</a><a href="/work/digital-design/">Digital design</a></nav></div>
    <div className="work-runs" id="work">
      <article className="work-run">
        <div className="work-run-heading"><h3><a href="/projects/gimbal-controller/">Gimbal controller</a></h3><p>My CUAir work combines a custom controller board, C++ firmware, and the testing needed to integrate the gimbal.</p></div>
        <fieldset className="board-selector">
          <legend>Board view</legend>
          <div className="board-options"><label><input type="radio" name="board-view" value="render" defaultChecked/>3D render</label><label><input type="radio" name="board-view" value="layout"/>PCB layout</label></div>
          <div className="work-frames board-frames">{gimbalBoardComparison.revisions.map((revision,index)=><a className="work-frame board-frame" href="/projects/gimbal-controller/" key={revision.title}>
            <img className="render-image" src={revision.render.src} width={revision.render.width} height={revision.render.height} alt={revision.render.alt} loading={index===0?'eager':'lazy'}/>
            <img className="layout-image" src={revision.layout.src} width={revision.layout.width} height={revision.layout.height} alt={revision.layout.alt} loading="lazy"/>
            <span>{revision.title}</span>
          </a>)}</div>
        </fieldset>
      </article>
      <article className="work-run">
        <div className="work-run-heading"><h3>Embedded systems</h3><p>In these projects, I worked on sensor drivers and motor control, then tested how the software behaved on the hardware.</p></div>
        <div className="work-frames embedded-frames"><Frame image={drawingCarPhoto} href="/projects/autonomous-drawing-car/" caption="Autonomous drawing car"/><Frame image={floatingBoxSystem} href="/projects/floating-box/" caption="Floating Box: control system"/><Frame image={{...floatingBoxWiring,fit:'contain'}} href="/projects/floating-box/" caption="Floating Box: wiring"/></div>
      </article>
      <div className="work-index" aria-label="More projects">{projects.filter(project=>!['gimbal-controller','autonomous-drawing-car','floating-box'].includes(project.slug)).map(project=><a className="work-index-row" href={`/projects/${project.slug}/`} key={project.slug}><span>{project.shortTitle}</span><span>{project.technologies.slice(0,2).join(', ')}</span><span>View project</span></a>)}</div>
    </div>
  </section>;
}
