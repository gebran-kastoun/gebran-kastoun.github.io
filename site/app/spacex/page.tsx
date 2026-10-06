import {pageMetadata} from '../../lib/metadata';

export const metadata=pageMetadata('SpaceX','Gebran Kastoun — SpaceX Avionics Hardware Intern, May–August 2026.','/spacex/');

export default function SpaceX() {
  return <main id="main" className="wrap spacex-page">
    <div className="page-intro"><h1>SpaceX</h1><p className="lead">Avionics Hardware Intern · May–August 2026.</p></div>
    <figure className="spacex-photo">
      <img src="/images/spacex-falcon-9-launch.jpg" width="1600" height="2400" alt="Falcon 9 rocket rising above the launch tower through sunlit clouds" fetchPriority="high"/>
      <figcaption>Falcon 9 launching NASA’s IMAP mission in September 2025. Photo: <a href="https://www.nasa.gov/image-article/3-in-1-launch/">NASA / Kim Shiflett</a>.</figcaption>
    </figure>
  </main>;
}
