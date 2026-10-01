import type {ProjectMedia} from '../content/types';

export function MediaFigure({item,priority=false}:{item:ProjectMedia;priority?:boolean}) {
  return <figure>
    {item.type==='image'
      ? <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'}/>
      : <video controls playsInline preload="metadata" poster={item.poster} width={item.width} height={item.height} aria-label={item.title}>
          <source src={item.src}/>
          {item.captions&&<track kind="captions" src={item.captions.src} srcLang={item.captions.language} label={item.captions.label} default/>}
          <a href={item.src}>Download {item.title}</a>
        </video>}
    <figcaption>{item.caption}{item.type==='image'&&item.credit&&<> <a className="inline-link" href={item.credit.url}>{item.credit.label} ↗</a></>}{item.type==='video'&&<> <a className="inline-link" href={item.src}>Open video</a></>}</figcaption>
    {item.type==='video'&&item.transcript&&<details><summary>Video transcript</summary><p>{item.transcript}</p></details>}
  </figure>;
}
export default function MediaGallery({items}:{items?:ProjectMedia[]}) {
  if(!items?.length)return null;
  return <section className="media-gallery" aria-label="Project media"><h2>Project media</h2><div className="media-grid">{items.map(item=><MediaFigure key={item.src} item={item}/>)}</div></section>;
}
