import './FirstBlock.css'


export function FirstBlock() {

  return (
    <div className="first-block-bg">
      <div className="first-block-container page-container">
        <div>
          <p className="learn-to-code-p">Learn to code.</p>
          <p className="build-the-future-p">Build the future.</p>
          <p className="codewave-helps-you-p">CodeWave helps you master in-demand skills with hands-on projects, expert-led courses, and a supportive community.</p>

          <button className="start-learning-button">Start Learning</button>
          <button className="watch-demo-button">Watch Demo</button>

          <div className="learner-review-container">
            <div className="learner-dp-container">
              <img className="first-block-dp-img" src={`${import.meta.env.BASE_URL}icon/dp1.jpg`} />
              <img className="first-block-dp-img" src={`${import.meta.env.BASE_URL}icon/dp2.jpg`} />
              <img className="first-block-dp-img" src={`${import.meta.env.BASE_URL}icon/dp3.jpg`} />
              <img className="first-block-dp-img" src={`${import.meta.env.BASE_URL}icon/dp4.jpg`} />
            </div>

            <div className="join-and-review-container">
              <p className="joint-learners-p">Join 150,000+ learners worldwide</p>

              <div className="fivestar-review-container">
                <img className="fivestar-img" src={`${import.meta.env.BASE_URL}icon/fivestar.png`} />
                <p className="rating-p">4.9/5 from 12,500 reviews</p>
              </div>

            </div>

          </div>
        </div>

        <img className="laptop-img" src={`${import.meta.env.BASE_URL}picture/laptop.png`} />
      </div>
    </div>
  )
}
