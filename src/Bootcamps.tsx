import { Link } from 'react-router'
import { LearningPage } from './components/LearningPage'

const bootcamps = [
  {
    title: 'Frontend Foundations',
    pace: '4-week plan · Beginner',
    description: 'Build a responsive portfolio from a blank page and publish it as a live site.',
    sessions: [
      'Week 1. Structure your pages with semantic HTML.',
      'Week 2. Style the layout with Flexbox, Grid, and media queries.',
      'Week 3. Add a project filter with JavaScript.',
      'Week 4. Check keyboard navigation and publish your portfolio.',
    ],
    preparation: '/courses#html-css-crash-course',
  },
  {
    title: 'React Project Sprint',
    pace: '4-week plan · JavaScript basics',
    description: 'Build a habit tracker with reusable components and save progress between visits.',
    sessions: [
      'Week 1. Break the design into components and pass data with props.',
      'Week 2. Add forms and use state to track completed habits.',
      'Week 3. Save progress to browser storage and handle empty states.',
      'Week 4. Test the main flows and deploy the app.',
    ],
    preparation: '/courses#react-for-beginners',
  },
  {
    title: 'Full-Stack Project Lab',
    pace: '6-week plan · React and JavaScript basics',
    description: 'Build an issue tracker that connects a React interface to a Node.js API and a database.',
    sessions: [
      'Weeks 1–2. Define the data model and implement the API endpoints.',
      'Weeks 3–4. Connect the React app and show loading and error states.',
      'Weeks 5–6. Save issues in a database, test the main flows, and deploy.',
    ],
    preparation: '/courses#nodejs-essentials',
  },
]

export function Bootcamps() {
  return (
    <LearningPage title="Bootcamps" description="Follow a weekly plan and finish with a project you can show in your portfolio.">
      <div className="learning-grid">
        {bootcamps.map((bootcamp) => (
          <article className="learning-card" key={bootcamp.title}>
            <p className="learning-meta">{bootcamp.pace}</p>
            <h2>{bootcamp.title}</h2>
            <p>{bootcamp.description}</p>
            <details className="learning-details">
              <summary>Weekly plan</summary>
              <div>
                <ul>
                  {bootcamp.sessions.map((session) => <li key={session}>{session}</li>)}
                </ul>
                <Link className="learning-link" to={bootcamp.preparation}>View prep course</Link>
              </div>
            </details>
          </article>
        ))}
      </div>
    </LearningPage>
  )
}
