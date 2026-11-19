import { LearningPage } from './components/LearningPage'

const posts = [
  {
    category: 'Projects',
    title: 'Build a portfolio project you can explain',
    summary: 'Start with one problem and make the finished project easy for someone else to try.',
    paragraphs: [
      'Pick a task you do often, such as keeping track of job applications. Write down the three actions a user needs most. For an application tracker, those could be adding an application, updating its status, and filtering by status.',
      'Build that workflow with sample data first. Then try an empty list, a missing company name, and a long job title on a phone. Fix anything that makes the main task harder to complete.',
      'Add a screenshot, a live demo, and local setup instructions to the README. Explain one choice you made and how it affects the user. A concrete example makes it easier for someone to understand how you work.',
    ],
  },
  {
    category: 'React',
    title: 'Where should React state live?',
    summary: 'Find the component that should own a value by looking at who needs to read and update it.',
    paragraphs: [
      'Start with the component that uses the value. A disclosure can keep its open state locally because the rest of the page usually has no reason to read or change it.',
      'Move state to the nearest shared parent when two components need it. In a course catalog, the parent can store the search query, pass an update handler to the search field, and pass the filtered results to the course list.',
      'Calculate filtered results from the courses and the query during rendering. Keeping those inputs as the source of truth prevents the displayed list from falling out of sync when a query changes.',
    ],
  },
  {
    category: 'Learning Habits',
    title: 'Practice JavaScript in 30 minutes',
    summary: 'Use a short session to build one interaction, test it, and write down what you learned.',
    paragraphs: [
      'Spend five minutes describing the interaction. For a character counter, decide what happens as someone types, clears the input, or reaches the limit.',
      'Spend twenty minutes writing the code and trying those cases in your browser. If the count looks wrong, inspect the input value and the displayed total so you can see which part has drifted.',
      'Use the final five minutes to write down what worked and pick one change for your next session. You could add a warning near the limit or try rebuilding the counter from memory.',
    ],
  },
]

export function Blog() {
  return (
    <LearningPage title="Blog" description="Short guides on building projects, writing code, and making time to practice.">
      <div className="learning-articles">
        {posts.map((post) => (
          <article className="learning-article" key={post.title}>
            <p className="learning-meta">{post.category}</p>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
            <details className="learning-details">
              <summary>Read article</summary>
              <div>
                {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </details>
          </article>
        ))}
      </div>
    </LearningPage>
  )
}
