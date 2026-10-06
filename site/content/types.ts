export type ImageMedia = {
  type: 'image'; src: string; alt: string; width: number; height: number;
  caption: string; fit?: 'cover' | 'contain'; credit?: {label: string; url: string};
};
export type VideoMedia = {
  type: 'video'; src: string; title: string; width: number; height: number;
  caption: string; poster?: string;
  captions?: {src: string; language: string; label: string};
  transcript?: string;
};
export type ProjectMedia = ImageMedia | VideoMedia;
export type FeaturedVideo = {provider:'youtube'; videoId:string; title:string; caption:string};
export type BoardComparison = {
  title: string; summary: string;
  revisions: {title: string; render: ImageMedia; layout: ImageMedia}[];
};
export type Section = {id: string; title: string; paragraphs: string[]; bullets?: string[]; code?: string};
export type Project = {
  slug: string; title: string; shortTitle: string; summary: string; categories: string[];
  featured: boolean; role: string; dates?: string; context: string; platform: string; status: string;
  technologies: string[]; media?: 'gimbal' | 'pipeline' | 'power' | 'galton'; caption: string;
  cover?: ImageMedia; gallery?: ProjectMedia[]; boardComparison?: BoardComparison; featuredVideo?: FeaturedVideo;
  results?: string[]; links: {label: string; url: string}[]; sections: Section[];
};
