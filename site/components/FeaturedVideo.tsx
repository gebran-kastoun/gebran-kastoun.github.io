import type {FeaturedVideo as FeaturedVideoContent} from '../content/types';

export default function FeaturedVideo({video}:{video:FeaturedVideoContent}) {
  const watchUrl=`https://www.youtube.com/watch?v=${video.videoId}`;
  return <figure className="project-featured-video">
    <div className="project-featured-video-frame">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
        title={video.title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
    <figcaption>{video.caption} <a href={watchUrl}>Watch on YouTube ↗</a></figcaption>
  </figure>;
}
