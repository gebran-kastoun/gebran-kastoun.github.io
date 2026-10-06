import type {ImageMedia} from './types';

export const suasCover: ImageMedia = {
  type:'image', src:'/images/suas-2026/gebran-hermes-field.jpg', width:2200, height:1467,
  alt:'Gebran working beside the open electronics bay of the Hermes aircraft during preparation',
  caption:'Working on Hermes at the 2026 SUAS competition.',
};

export const suasGallery: ImageMedia[] = [
  {
    type:'image', src:'/images/suas-2026/gebran-field-electronics.jpg', width:1800, height:1200,
    alt:'Gebran inspecting the open electronics bay of Hermes while the aircraft rests on the grass',
    caption:'Checking Hermes’s electronics at the competition.',
  },
  {
    type:'image', src:'/images/suas-2026/hermes-electronics-detail.jpg', width:1800, height:1200,
    alt:'Close view of the Hermes aircraft with its electronics bay open and wiring visible',
    caption:'Inside the open electronics bay of Hermes.',
  },
  {
    type:'image', src:'/images/suas-2026/gebran-transmitter.jpg', width:1700, height:1133,
    alt:'Gebran holding a radio transmitter during a ground test',
    caption:'Ground test with a transmitter.',
  },
  {
    type:'image', src:'/images/suas-2026/gebran-avionics-bay.jpg', width:1700, height:1133,
    alt:'Gebran checking wiring inside the open electronics bay of Hermes',
    caption:'A closer look at the aircraft electronics during preparation.',
  },
  {
    type:'image', src:'/images/suas-2026/gebran-hangar-check.jpg', width:1700, height:1133,
    alt:'Gebran working beside the Hermes airframe in the team workspace',
    caption:'Working on the aircraft between test sessions.',
  },
  {
    type:'image', src:'/images/suas-2026/cuair-aircraft-prep.jpg', width:1700, height:1133,
    alt:'CUAir teammates working around Hermes under a field tent',
    caption:'Team preparation around Hermes at the competition.',
  },
  {
    type:'image', src:'/images/suas-2026/cuair-team-hermes.jpg', width:2000, height:1333,
    alt:'Cornell CUAir team standing with the Hermes aircraft at Skyway Range',
    caption:'Cornell CUAir with Hermes in Tulsa.',
  },
];

// Add the symptom, diagnosis, fix, and validation after Gebran supplies the details.
export const suasGimbalDebug = {
  intro:'My main technical contribution during the competition was tracking down a difficult bug in Hermes’s gimbal. I worked through the issue during the team’s flight preparations.',
  details:[] as {heading:string; text:string}[],
};

export const suasTimeline = [
  {label:'Preparation',title:'Make Hermes flight ready',text:'The team reduced the aircraft’s weight by about 0.7 lb, ran software ground tests, resolved a GoPro connection issue, and configured flight-control gains.'},
  {label:'Inspection',title:'Ready on the first pass',text:'Hermes passed safety inspection on the first try at 34.9 lb. The fastest practiced setup took about 3 minutes 30 seconds from an unpowered aircraft to ready to fly.'},
  {label:'Flight one',title:'First autonomous takeoff',text:'After a delayed connection between the intelligence pipeline and autopilot, Hermes took off autonomously and completed four laps. Its tail detached during the flight; the team recovered the aircraft and investigated the damage.'},
  {label:'Flight two',title:'A connector exposed a weakness',text:'The team prepared the aircraft and airdrop system in about three minutes. Takeoff attempts then exposed an intermittent connection at a taped XT60 connector under the wing. The team repaired the aircraft, but no third flight was offered.'},
];
