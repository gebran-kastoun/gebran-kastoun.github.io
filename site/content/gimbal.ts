import type {BoardComparison, VideoMedia} from './types';

export const gimbalBoardComparison: BoardComparison = {
  title: 'Three board revisions',
  summary: 'The original board established the controller design. The weight-reduced revision made the board smaller to save mass ahead of competition. The increased-functionality revision expanded the design for more capability and integration.',
  revisions: [
    {
      title: 'Original',
      render: {type:'image',src:'/images/gimbal/original-3d.png',width:1190,height:1156,alt:'3D Altium render of the original gimbal controller board with its connectors, processor, and IMU module',caption:'3D view'},
      layout: {type:'image',src:'/images/gimbal/original-2d.png',width:1186,height:1160,alt:'2D Altium layout of the original gimbal controller board showing copper routing and component footprints',caption:'2D layout'},
    },
    {
      title: 'Weight Reduced',
      render: {type:'image',src:'/images/gimbal/weight-reduced-3d.png',width:1112,height:1210,alt:'3D Altium render of the compact weight-reduced gimbal controller board',caption:'3D view'},
      layout: {type:'image',src:'/images/gimbal/weight-reduced-2d.png',width:1082,height:1174,alt:'2D Altium layout of the weight-reduced gimbal controller board showing the denser placement and routing',caption:'2D layout'},
    },
    {
      title: 'Increased Functionality',
      render: {type:'image',src:'/images/gimbal/increased-functionality-3d.png',width:1242,height:1168,alt:'3D Altium render of the increased-functionality gimbal controller board with additional circuitry and connectors',caption:'3D view'},
      layout: {type:'image',src:'/images/gimbal/increased-functionality-2d.png',width:1212,height:1144,alt:'2D Altium layout of the increased-functionality gimbal controller board showing routing and additional component footprints',caption:'2D layout'},
    },
  ],
};

export const gimbalVideos: VideoMedia[] = [
  {type:'video',src:'/videos/gimbal-flight-demo.mp4',title:'Gimbal view during a flight',width:960,height:540,poster:'/images/gimbal/flight-poster.jpg',caption:'Under-aircraft camera view during a flight. Edited to 20 seconds from the longer recording.'},
  {type:'video',src:'/videos/gimbal-bench-demo.mp4',title:'Gimbal bench test',width:540,height:960,poster:'/images/gimbal/bench-poster.jpg',caption:'Bench test of the gimbal assembly as its mount is moved by hand.'},
];
