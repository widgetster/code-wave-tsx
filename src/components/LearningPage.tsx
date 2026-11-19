import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import './LearningPage.css'

type LearningPageProps = {
  title: string
  description: string
  children: ReactNode
}

export function LearningPage({ title, description, children }: LearningPageProps) {
  return (
    <>
      <title>{`${title} | CodeWave`}</title>
      <Header />
      <main className="learning-page">
        <div className="learning-intro">
          <div className="page-container">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="learning-content page-container">{children}</div>
      </main>
      <Footer />
    </>
  )
}
