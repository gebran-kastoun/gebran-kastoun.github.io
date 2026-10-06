import type {BoardComparison as BoardComparisonContent, ImageMedia} from '../content/types';

function BoardView({image}:{image:ImageMedia}) {
  return <figure className="board-view">
    <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${image.alt}`}>
      <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy"/>
    </a>
    <figcaption>{image.caption} <span aria-hidden="true">↗</span></figcaption>
  </figure>;
}

export default function BoardComparison({comparison}:{comparison:BoardComparisonContent}) {
  return <section className="board-comparison" aria-labelledby="board-comparison-title">
    <div className="board-comparison-heading"><p className="board-comparison-kicker">PCB development</p><h2 id="board-comparison-title">{comparison.title}</h2></div>
    <div className="board-revisions">
      {comparison.revisions.map(revision=><article className="board-revision" key={revision.title}>
        <h3>{revision.title}</h3>
        <div className="board-revision-views"><BoardView image={revision.render}/><BoardView image={revision.layout}/></div>
      </article>)}
    </div>
    <p className="board-comparison-summary">{comparison.summary}</p>
  </section>;
}
