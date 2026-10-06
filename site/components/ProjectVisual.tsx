import type { Project } from '../content/projects';
const flows = {
  gimbal: {label:'Closed-loop stabilization',nodes:[['I²C','IMU','I²C feedback'],['PID','ATmega328P','PID controller'],['PWM','Servos','PWM actuation']],return:'Angle telemetry → UART → Raspberry Pi → Ground station'},
  pipeline:{label:'TinyRV2 · five-stage pipeline',nodes:[['F','Fetch','Instruction'],['D','Decode','Operands'],['X','Execute','ALU / multiply'],['M','Memory','Load / store'],['W','Writeback','Register file']],return:'X / M / W → Operand forwarding · Load-use interlock · Branch squash'},
  power:{label:'Avionics supply · design intent',nodes:[['12S','Flight battery','Primary supply'],['IN','Protection','Input filtering'],['DC','Buck converter','Synchronous'],['24V','Avionics','Intended rail']],return:'Input + output current sensing → DroneCAN → Pixhawk'},
  galton:{label:'RP2040 · compute and display',nodes:[['CPU','Multicore physics','Fixed-point math'],['RAM','Particle state','Display data'],['PIO','VGA output','DMA transfer']],return:'Physics update rate ≠ Display refresh rate'},
};
export default function ProjectVisual({project,priority=false}:{project:Project;priority?:boolean}) {
 if(project.cover){const image=project.cover;return <img className={`project-photo${image.fit==='contain'?' project-photo-contain':''}`} src={image.src} width={image.width} height={image.height} alt={image.alt} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'}/>;}
 const kind=project.media;
 if(!kind)return null;
 const flow=flows[kind];
 return <div className={`diagram diagram-${kind}`} role="img" aria-label={`${flow.label}. ${flow.nodes.map(n=>n.slice(1).join(': ')).join(' → ')}. ${flow.return}. Explanatory diagram.`}><div className="diagram-top"><span>{flow.label}</span></div><div className="diagram-nodes">{flow.nodes.map(([symbol,name,note],i)=><div className="diagram-node" key={symbol}><span className="node-symbol">{symbol}</span><strong>{name}</strong><span>{note}</span>{i<flow.nodes.length-1&&<b aria-hidden="true" className="flow-arrow">→</b>}</div>)}</div><div className="diagram-return">{flow.return}</div><span className="diagram-note">Illustrative diagram</span></div>
}
