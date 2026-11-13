import './FourthBlock.css'


export function FourthBlock() {

  return (
    <div className="fourth-block-container">
      <div className="fourth-block-bg">
        <div className="fourth-block-left-container">
          <img className="rocket-img" src="icon/rocket.png" />

          <div>
            <p className="ready-to-start-p">Ready to start your coding journey?</p>
            <p className="join-thousands-p">Join thousands of learners and take the first step toward your dream career.</p>
          </div>
        </div>

        <button className="start-learning-today-button">Start Learning Today</button>
      </div>

    </div>
  )
}