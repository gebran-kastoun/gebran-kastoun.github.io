import type {Metadata} from 'next';
export function pageMetadata(title:string,description:string,path:string,image?:string):Metadata {
 return {title,description,alternates:{canonical:path},openGraph:{type:'website',title:`${title} | Gebran Kastoun`,description,url:path,images:image?[{url:image,alt:title}]:[]},twitter:{card:image?'summary_large_image':'summary',title:`${title} | Gebran Kastoun`,description,images:image?[image]:[]}};
}
