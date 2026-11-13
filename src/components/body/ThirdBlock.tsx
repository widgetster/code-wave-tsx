import './ThirdBlock.css'


export function ThirdBlock() {

  return (
    <div className="third-block-container">
      <div className="third-block-left-bg">
        <img className="third-block-quote-img" src="icon/quote.png" />
        <p className="third-block-quote-p"> CodeWave transformed the way I learn. The courses are well-structured, the projects are practical, and the community is incredibly helpful!</p>

        <div className="third-block-left-third-row-container">
          <img className="third-block-profile-img" src="icon/dp5.jpg" />

          <div>
            <p className="third-block-name-p">Priya Sharma</p>
            <p className="third-block-title-p">Frontend Developer</p>

          </div>


        </div>
      </div>

      <div className="third-block-right-container">
        <div className="third-block-right-benefit-bg">
          <img className="benefit-img" src="icon/check.png" />

          <div>
            <p className="benefit-name-p"> Job-ready skills</p>
            <p className="benefit-description-p">Curriculum designed to help you build skills companies are hiring for.</p>
          </div>
        </div>

        <div className="third-block-right-benefit-bg">
          <img className="benefit-img" src="icon/check.png" />

          <div>
            <p className="benefit-name-p"> Learn at your own pace</p>
            <p className="benefit-description-p">Study anytime, anywhere with lifetime access to all courses materials.</p>
          </div>
        </div>

        <div className="third-block-right-benefit-bg">
          <img className="benefit-img" src="icon/check.png" />

          <div>
            <p className="benefit-name-p"> Certificates that count</p>
            <p className="benefit-description-p">Earn certificates and showcase your achievements to employers.</p>
          </div>
        </div>

      </div>

    </div>
  )
}