import type {ImageMedia} from './types';

// Only real, approved media belong here. Local source documents stay outside public/.
export const drawingCarPhoto: ImageMedia = {
  type: 'image', src: '/images/drawing-car.jpg', width: 1500, height: 1133,
  alt: 'Pico W drawing car with exposed electronics on a red four-wheel chassis',
  caption: 'Drawing car by Gebran Kastoun, Ruby Wu, and Sarah Zhong. Photo from the team report.',
  credit: {label: 'Team report', url: 'https://ece4760.github.io/Projects/Fall2025/sjz44_glk49_rcw253/final_report.html'},
};

export const floatingBoxReportUrl = 'https://pages.github.coecis.cornell.edu/ece3140-spr2026/glk49-sl3493/';
export const floatingBoxSystem: ImageMedia = {
  type: 'image', src: '/images/floating-box-system.jpg', width: 1063, height: 689,
  alt: 'Hand-drawn Floating Box system diagram connecting the FRDM-KL46Z board, time-of-flight sensor, servo, and batteries',
  caption: 'Floating Box system diagram by Gebran Kastoun and Sienna, from the team project page.',
  fit: 'contain',
  credit: {label: 'Team project page', url: floatingBoxReportUrl},
};
export const floatingBoxWiring: ImageMedia = {
  type: 'image', src: '/images/floating-box-wiring.jpg', width: 1081, height: 622,
  alt: 'FRDM-KL46Z pinout diagram with PWM servo wiring, I²C sensor wiring, and battery power connections',
  caption: 'Microcontroller wiring diagram from the Floating Box team project page.',
  credit: {label: 'Team project page', url: floatingBoxReportUrl},
};
