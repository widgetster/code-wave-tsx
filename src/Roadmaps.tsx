import { Link } from 'react-router'
import { LearningPage } from './components/LearningPage'

const roadmaps = [
  {
    title: 'Frontend Developer',
    steps: [
      'Build a responsive page with HTML and CSS.',
      'Use JavaScript to handle forms, events, and API requests.',
      'Turn your interface into reusable React components.',
      'Publish a portfolio and check it on mobile and with a keyboard.',
    ],
    course: '/courses#html-css-crash-course',
    linkText: 'Start with HTML & CSS',
  },
  {
    title: 'Backend Developer',
    steps: [
      'Practice JavaScript functions, objects, and asynchronous code.',
      'Build a Node.js API with predictable response codes.',
      'Store and query records in a SQL database.',
      'Validate requests, test endpoints, and deploy the service.',
    ],
    course: '/courses#nodejs-essentials',
    linkText: 'Explore Node.js Essentials',
  },
  {
    title: 'Full-Stack Developer',
    steps: [
      'Build a React interface with forms and reusable components.',
      'Design a database and expose it through a Node.js API.',
      'Connect the interface to the API and handle errors.',
      'Deploy the app and document how to run it locally.',
    ],
    course: '/courses#react-for-beginners',
    linkText: 'Explore React for Beginners',
  },
]

export function Roadmaps() {
  return (
    <LearningPage title="Roadmaps" description="Choose what you want to build and see which skills to learn in order.">
      <div className="learning-grid roadmap-grid">
        {roadmaps.map((roadmap) => (
          <article className="learning-card" key={roadmap.title}>
            <h2>{roadmap.title}</h2>
            <ol>
              {roadmap.steps.map((step) => <li key={step}>{step}</li>)}
            </ol>
            <Link className="learning-link" to={roadmap.course}>{roadmap.linkText}</Link>
          </article>
        ))}
      </div>
    </LearningPage>
  )
}
