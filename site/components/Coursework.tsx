import {courseGroups} from '../content/coursework';

export default function Coursework() {
  return <section className="coursework-section" aria-labelledby="coursework-heading">
    <div className="section-heading"><h2 id="coursework-heading">Coursework</h2></div>
    <p className="coursework-intro">Selected courses, grouped by area. Fall 2026 courses are in progress; linear algebra is transfer credit.</p>
    <nav className="coursework-nav" aria-label="Coursework areas">
      {courseGroups.map(group=><a href={`#${group.id}`} key={group.id}>{group.title}</a>)}
    </nav>
    {courseGroups.map(group=><section className="course-group" id={group.id} aria-labelledby={`${group.id}-heading`} key={group.id}>
      <h3 id={`${group.id}-heading`}>{group.title}</h3>
      <div className="course-list">{group.courses.map(course=><article className="course-row" key={course.code}>
        <div className="course-heading"><span className="course-code">{course.code}</span><h4>{course.title}</h4></div>
        <div className="course-copy"><p>{course.summary}</p>{course.project&&<a className="text-link" href={course.project.url}>{course.project.title}</a>}</div>
        <p className="course-term">{course.term}{course.status&&<span className="course-status">{course.status}</span>}</p>
      </article>)}</div>
    </section>)}
  </section>;
}
