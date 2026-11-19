import { useLocation } from 'react-router'
import { LearningPage } from './components/LearningPage'
import { courses } from './pages/courses/courseCatalog'

export function Courses() {
  const { hash } = useLocation()

  return (
    <LearningPage title="Courses" description="Learn one skill at a time with short lessons and a project to put it into practice.">
      <div className="learning-grid course-grid">
        {courses.map((course) => {
          const isLinkedCourse = hash === `#${course.id}`

          return (
            <article className={isLinkedCourse ? 'learning-card learning-card-selected' : 'learning-card'} id={course.id} key={course.id}>
              <div className="course-card-overview">
                <img src={`${import.meta.env.BASE_URL}picture/${course.image}`} alt="" />
                <div>
                  <p className="learning-meta">{course.level} · {course.duration}</p>
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                </div>
              </div>
              <details className="learning-details" open={isLinkedCourse}>
                <summary>Course outline</summary>
                <div>
                  <ul>
                    {course.topics.map((topic) => <li key={topic}>{topic}</li>)}
                  </ul>
                  <p><strong>Practice project.</strong> {course.project}</p>
                </div>
              </details>
            </article>
          )
        })}
      </div>
    </LearningPage>
  )
}
