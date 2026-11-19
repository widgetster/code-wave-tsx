import { Link } from 'react-router'
import { courses } from '../courses/courseCatalog'
import './SecondBlock.css'

export function SecondBlock() {
  const assets = import.meta.env.BASE_URL

  return (
    <section className="second-block-container page-container" aria-labelledby="popular-courses-title">
      <div className="popular-courses-view-all-courses">
        <h2 className="popular-courses-p" id="popular-courses-title">Popular Courses</h2>
        <Link className="view-all-courses-p" to="/courses">View All Courses</Link>
      </div>

      <div className="row-course-option-container">
        {courses.map((course) => (
          <article className="course-option-bg" key={course.id}>
            <div className="course-container">
              <img className="js-img" src={`${assets}picture/${course.image}`} alt="" />

              <div>
                <h3 className="javascript-fundamentals-p">{course.title}</h3>
                <p className="learn-the-core-p">{course.description}</p>

                <div className="course-stats-container">
                  <div className="level-container">
                    <img className="green-img" src={`${assets}icon/green.png`} alt="" />
                    <p className="level-p">{course.level}</p>
                  </div>
                  <div className="duration-container">
                    <img className="time-img" src={`${assets}icon/time.png`} alt="" />
                    <p className="level-p">{course.duration}</p>
                  </div>
                  <div className="rating-container">
                    <img className="star-img" src={`${assets}icon/star.png`} alt="" />
                    <p className="level-p">{course.rating}</p>
                  </div>
                  <Link className="course-outline-link" to={`/courses#${course.id}`} aria-label={`View course outline for ${course.title}`}>
                    View course
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
