import type {ImageMedia} from './types';

// Only real, approved media belong here. Local source documents stay outside public/.
export const drawingCarPhoto: ImageMedia = {
  type: 'image', src: '/images/drawing-car.jpg', width: 1500, height: 1133,
  alt: 'Pico W drawing car with exposed electronics on a red four-wheel chassis',
  caption: 'Drawing car by Gebran Kastoun, Ruby Wu, and Sarah Zhong. Photo from the team report.',
  credit: {label: 'Team report', url: 'https://ece4760.github.io/Projects/Fall2025/sjz44_glk49_rcw253/final_report.html'},
};
