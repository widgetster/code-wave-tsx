import { Link } from 'react-router'
import { Header } from "./components/Header"
import { FirstBlock } from "./pages/home/FirstBlock"
import { SecondBlock } from "./pages/home/SecondBlock"
import { ThirdBlock } from "./pages/home/ThirdBlock"
import { FourthBlock } from "./pages/home/FourthBlock"
import { Footer } from "./components/Footer"
import './Home.css'

const resources = [
  { title: 'Bootcamps', description: 'Build a project from start to finish with a weekly plan.', to: '/bootcamps' },
  { title: 'Roadmaps', description: 'See what to learn next for frontend, backend, or full-stack development.', to: '/roadmaps' },
  { title: 'Blog', description: 'Pick up practical tips for building projects and making time to code.', to: '/blog' },
]

export function Home() {

  return (
    <>
      <title>Home | CodeWave</title>
      <Header />

      <main>
        <FirstBlock />
        <SecondBlock />
        <section className="home-resources page-container" aria-labelledby="home-resources-title">
          <h2 id="home-resources-title">Keep learning</h2>
          <div className="home-resource-grid">
            {resources.map((resource) => (
              <Link className="home-resource" key={resource.to} to={resource.to}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <ThirdBlock />
        <FourthBlock />
      </main>

      <Footer />
    </>
  )
}
