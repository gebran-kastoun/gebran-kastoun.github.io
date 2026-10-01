import {categories} from '../content/projects';

const footprints = {
  'power-electronics': {className:'power', reference:'U_PWR', symbol:'24V', note:'POWER STAGE'},
  'robotics-embedded': {className:'robotics', reference:'U_CTRL', symbol:'IMU', note:'CONTROL LOOP'},
  'digital-design': {className:'digital', reference:'U_CPU', symbol:'RTL', note:'LOGIC CORE'},
} as const;

export default function PCBExplorer() {
  return <div className="pcb-explorer" id="projects">
    <div className="pcb-board">
      <svg className="pcb-artwork" viewBox="0 0 720 480" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="pcb-grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#a6b3b8" opacity=".28"/></pattern>
          <pattern id="pcb-hatch" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 8 8 0" stroke="#4c5770" strokeWidth="1" opacity=".45"/></pattern>
        </defs>
        <rect x="0" y="0" width="720" height="480" fill="url(#pcb-grid)"/>
        <path className="pcb-keepout" d="M35 33H685V447H35Z"/>
        <path className="pcb-copper-zone" d="M270 65H420V132H340L290 174V224H270Z" fill="url(#pcb-hatch)"/>
        <g className="pcb-track pcb-track-power">
          <path d="M0 148H65L99 114H247L284 151H347L389 193H453"/>
          <path d="M0 160H70L104 126H243L278 163H337L377 205H453"/>
          <path d="M0 176H82L113 145H243L264 166V240H333L375 282H450"/>
          <path d="M0 188H85L120 153H239L252 166V254H325L367 296H449"/>
        </g>
        <g className="pcb-track pcb-track-robotics">
          <path d="M0 309H83L109 335H244L293 286H397L449 234"/>
          <path d="M0 321H78L104 347H249L300 297H402L459 240"/>
          <path d="M247 353H277L310 386H514L563 337V294"/>
          <path d="M245 365H271L304 398H524L577 345V294"/>
        </g>
        <g className="pcb-track pcb-track-digital">
          <path d="M501 193L553 141V89L589 53H720"/>
          <path d="M511 200L565 147V97L595 67H720"/>
          <path d="M559 235H611L652 194H720"/>
          <path d="M559 247H618L660 205H720"/>
          <path d="M549 295V337L610 398H720"/>
          <path d="M561 296V331L620 386H720"/>
        </g>
        <g className="pcb-vias">
          {[[65,148],[82,176],[284,151],[264,240],[83,309],[244,353],[310,386],[563,337],[553,141],[611,235],[610,398]].map(([x,y])=><g key={`${x}-${y}`}><circle cx={x} cy={y} r="6"/><circle cx={x} cy={y} r="2.4"/></g>)}
        </g>
        <g className="pcb-silkscreen">
          <path d="M46 102H281V183H46ZM46 269H280V385H46ZM428 157H654V323H428Z"/>
          <path d="M39 53H139M39 64H86M579 423H680M635 411H680"/>
          <path d="M320 85h18m0-10v20m36-19h33v18h-33zM319 128h87"/>
          <path d="M332 335h36m-18-18v36M390 322h21v21h-21z"/>
          <path d="M39 215h43m18 0h43m18 0h43m18 0h43"/>
          <path d="M589 112h20m6 0h20m6 0h20"/>
          <circle cx="628" cy="367" r="19"/><circle cx="628" cy="367" r="9"/>
        </g>
        <g className="pcb-pads">
          {Array.from({length:9},(_,i)=><g key={i}>
            <rect x={49+i*25} y="91" width="12" height="8" rx="2"/>
            <rect x={49+i*25} y="186" width="12" height="8" rx="2"/>
            <rect x={50+i*25} y="258" width="12" height="8" rx="2"/>
            <rect x={50+i*25} y="388" width="12" height="8" rx="2"/>
          </g>)}
          {Array.from({length:7},(_,i)=><g key={i}>
            <rect x={442+i*29} y="146" width="13" height="7" rx="2"/>
            <rect x={442+i*29} y="326" width="13" height="7" rx="2"/>
          </g>)}
        </g>
        <g className="pcb-testpoints"><circle cx="317" cy="214" r="8"/><circle cx="332" cy="214" r="8"/><circle cx="347" cy="214" r="8"/><circle cx="353" cy="423" r="8"/><circle cx="369" cy="423" r="8"/><circle cx="385" cy="423" r="8"/></g>
        {[24,696].flatMap(x=>[24,456].map(y=><g className="pcb-mount" key={`${x}-${y}`}><circle cx={x} cy={y} r="10"/><circle cx={x} cy={y} r="4.5"/></g>))}
      </svg>
      <div className="board-mark" aria-hidden="true">gk<span> / PCB EXPLORER</span></div>
      <span className="board-caption" aria-hidden="true">TOP COPPER · BOTTOM COPPER · OVERLAY</span>
      {categories.map(category=>{
        const footprint=footprints[category.slug as keyof typeof footprints];
        return <a className={`pcb-control pcb-${footprint.className}`} href={`/work/${category.slug}/`} key={category.slug}>
          <span className="pcb-reference">{footprint.reference}</span>
          <span className="component-symbol" aria-hidden="true">{footprint.symbol}</span>
          <span className="pcb-component-title">{category.title}</span>
          <span className="pcb-component-note">{footprint.note}</span>
        </a>;
      })}
      <span className="board-note" aria-hidden="true">ILLUSTRATIVE BOARD · SELECT A COMPONENT</span>
    </div>
  </div>;
}
