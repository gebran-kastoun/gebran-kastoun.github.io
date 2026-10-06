import type {CSSProperties} from 'react';
import {categories} from '../content/projects';

// Shared coordinates keep the linked packages aligned with their pins at every size.
const footprints = {
  'power-electronics': {className:'power', x:88, y:106, width:224, height:116},
  'robotics-embedded': {className:'robotics', x:88, y:298, width:224, height:116},
  'digital-design': {className:'digital', x:450, y:182, width:184, height:154},
} as const;

function Footprint({x,y,width,height}: {x:number; y:number; width:number; height:number}) {
  const columns=Math.floor((width-16)/16);
  const rows=Math.floor((height-20)/16);
  return <g>
    <path className="pcb-overlay" d={`M${x-18} ${y-8}l10-10h${width+26}v${height+36}H${x-18}Z`}/>
    <path className="pcb-overlay" d={`M${x-24} ${y+5}h-5v-11h11`}/>
    <g className="pcb-pads">
      {Array.from({length:columns},(_,i)=>{
        const pinX=x+width/2-(columns-1)*8+i*16;
        return <g key={i}>
          <rect x={pinX-3} y={y-13} width="6" height="15"/>
          <rect x={pinX-3} y={y+height-2} width="6" height="15"/>
        </g>;
      })}
      {Array.from({length:rows},(_,i)=>{
        const pinY=y+height/2-(rows-1)*8+i*16;
        return <g key={i}>
          <rect x={x-13} y={pinY-3} width="15" height="6"/>
          <rect x={x+width-2} y={pinY-3} width="15" height="6"/>
        </g>;
      })}
    </g>
  </g>;
}

function Passive({x,y,vertical=false}: {x:number; y:number; vertical?:boolean}) {
  return <g transform={`translate(${x} ${y}) rotate(${vertical?90:0})`}>
    <path className="pcb-overlay" d="M-9-8H9M-9 8H9"/>
    <rect className="pcb-passive-body" x="-10" y="-5" width="20" height="10"/>
    <path className="pcb-passive-pads" d="M-16-5H-8V5H-16ZM8-5H16V5H8Z"/>
  </g>;
}

export default function PCBExplorer() {
  return <div className="pcb-explorer" id="projects">
    <div className="pcb-board">
      <svg className="pcb-artwork" viewBox="0 0 720 480" aria-hidden="true" focusable="false">
        <defs>
          <pattern id="pcb-grid" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="0.75" cy="0.75" r=".65" fill="#37415d"/></pattern>
          <pattern id="pcb-hatch" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M-1 1 1-1M0 7 7 0M6 8 8 6" stroke="#2458ff" strokeWidth=".8"/></pattern>
        </defs>
        <rect width="720" height="480" fill="url(#pcb-grid)"/>
        <path className="pcb-outline" d="M14 28 28 14H692L706 28V452L692 466H28L14 452Z"/>
        <path className="pcb-keepout" d="M28 66V414M692 66V414M70 28H650M70 452H650"/>
        <path className="pcb-copper-zone" d="M340 28H468L490 50V118L430 178H408L340 110Z" fill="url(#pcb-hatch)"/>

        <g className="pcb-net pcb-net-power">
          <g className="pcb-track pcb-track-top pcb-track-wide">
            <path d="M46 124H88M46 140H60L76 156H88M46 172H88M46 188H64L80 204H88"/>
            <path d="M168 106V70L186 52H248M264 106V72L276 60H304"/>
            <path d="M312 124H340L356 108V76H400V120L432 152V203H450"/>
            <path d="M312 156H344L402 214V235H450"/>
          </g>
          <g className="pcb-track pcb-track-bottom">
            <path d="M312 188H334L366 220V260L408 302H450"/>
            <path d="M200 222V244L222 266H338L362 290V354H388"/>
            <path d="M216 222V238L236 258H342L374 290V338H402"/>
          </g>
        </g>
        <g className="pcb-net pcb-net-robotics">
          <g className="pcb-track pcb-track-bottom">
            <path d="M46 316H88M46 332H88M46 348H62L78 364H88M46 380H88"/>
            <path d="M120 296V272L108 260H56V232L66 222H88"/>
            <path d="M136 296V272L116 252H68V238L88 218"/>
            <path d="M312 316H330L394 252V219L410 203H450"/>
            <path d="M312 332H338L406 264V243L414 235H450"/>
            <path d="M312 348H338L390 400H454L486 368V336"/>
            <path d="M312 364H338L386 412H458L502 368V336"/>
          </g>
          <g className="pcb-track pcb-track-top">
            <path d="M152 412V430L160 438H296L328 406V390"/>
            <path d="M312 300H326L366 260H382L422 300H450"/>
            <path d="M312 380H326L350 404H368L404 440H514L550 404V336"/>
          </g>
        </g>
        <g className="pcb-net pcb-net-digital">
          <g className="pcb-track pcb-track-top">
            <path d="M470 182V162L514 118V72M486 182V166L530 122V72M502 182V170L546 126V72M518 182V174L562 130V72"/>
            <path d="M566 182V150L594 122H652V88M582 182V154L610 126H668V88"/>
            <path d="M634 219H660L676 203V156M634 235H668L684 219V174"/>
            <path d="M582 336V364L622 404H666M598 336V358L632 392H666"/>
          </g>
          <g className="pcb-track pcb-track-bottom">
            <path d="M534 182V146L586 94V60H614M550 182V150L598 102V76H630"/>
            <path d="M634 267H660L678 285V334M634 283H650L666 299V350"/>
            <path d="M518 336V374L490 402V428M534 336V380L506 408V428"/>
          </g>
        </g>

        {Object.values(footprints).map(footprint=><Footprint key={footprint.className} {...footprint}/>)}
        <g className="pcb-overlay">
          <path d="M34 110H58V202H34ZM34 302H58V394H34ZM498 44H644V88H498Z"/>
          <rect x="342" y="59" width="72" height="67" rx="4"/>
          <circle cx="378" cy="92" r="24"/>
          <path d="M366 77V107M378 77V107M390 77V107"/>
          <rect x="355" y="345" width="72" height="34" rx="14"/>
          <path d="M365 351V373M417 351V373M165 247H191M178 239V255"/>
          <path d="M568 409H637V442H568Z"/>
        </g>
        <g className="pcb-connector-pads">
          {[124,140,156,172,188,316,332,348,364,380].map(y=><g key={y}><rect x="40" y={y-5} width="12" height="10"/><circle cx="46" cy={y} r="2.1"/></g>)}
          {[514,530,546,562,578,594,610,626].map(x=><g key={x}>
            <rect x={x-4} y="52" width="8" height="8"/><circle cx={x} cy="56" r="1.7"/>
            <rect x={x-4} y="68" width="8" height="8"/><circle cx={x} cy="72" r="1.7"/>
          </g>)}
          {[580,596,612,628].map(x=><g key={x}><circle cx={x} cy="425" r="5"/><circle cx={x} cy="425" r="2"/></g>)}
        </g>
        {[[138,62],[218,62],[292,60],[350,156],[378,188],[400,320],[648,111],[650,365]].map(([x,y])=><Passive key={`${x}-${y}`} x={x} y={y}/>)}
        {[[334,220],[420,110],[646,151],[676,150],[662,334],[338,390],[554,390]].map(([x,y])=><Passive key={`${x}-${y}`} x={x} y={y} vertical/>)}
        <g className="pcb-vias">
          {[[168,70],[248,52],[340,124],[366,220],[222,266],[338,266],[388,354],[402,338],[108,260],[56,232],[330,316],[394,252],[454,400],[458,412],[328,390],[514,440],[490,428],[506,428],[652,88],[668,88],[660,219],[684,174],[678,334],[666,350],[666,392],[666,404]].map(([x,y])=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="4.2"/><circle cx={x} cy={y} r="1.8"/></g>)}
        </g>
        {[42,678].flatMap(x=>[42,438].map(y=><g className="pcb-mount" key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="12"/><circle cx={x} cy={y} r="7"/><path d={`M${x-16} ${y}h7m18 0h7M${x} ${y-16}v7m0 18v7`}/>
        </g>))}
      </svg>
      {categories.map(category=>{
        const footprint=footprints[category.slug as keyof typeof footprints];
        const position={
          '--component-x':`${footprint.x/720*100}%`,
          '--component-y':`${footprint.y/480*100}%`,
          '--component-width':`${footprint.width/720*100}%`,
          '--component-height':`${footprint.height/480*100}%`,
        } as CSSProperties;
        return <a className={`pcb-control pcb-${footprint.className}`} style={position} href={`/work/${category.slug}/`} key={category.slug}>
          <svg className="pcb-link-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M4 12 12 4M4 4h8v8"/></svg>
          <span className="pcb-component-title">{category.title}</span>
        </a>;
      })}
    </div>
  </div>;
}
