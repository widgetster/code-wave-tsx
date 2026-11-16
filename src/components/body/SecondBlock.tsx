import './SecondBlock.css'


export function SecondBlock() {

  return (
    <div className="second-block-container page-container">
      <div className="popular-courses-view-all-courses">
        <p className="popular-courses-p">Popular Courses</p>
        <p className="view-all-courses-p">View All Courses</p>
      </div>

      <div className="row-course-option-container">
        <div className="course-option-bg">
          <div className="course-container">
            <img className="js-img" src={`${import.meta.env.BASE_URL}picture/js.jpeg`} />

            <div>
              <p className="javascript-fundamentals-p">JavaScript Fundamentals</p>
              <p className="learn-the-core-p">Learn the core concepts of JavaScript and build interactive web aplications.</p>

              <div className="course-stats-container">
                <div className="level-container">
                  <img className="green-img" src={`${import.meta.env.BASE_URL}icon/green.png`} />
                  <p className="level-p">Beginner</p>
                </div>

                <div className="duration-container">
                  <img className="time-img" src={`${import.meta.env.BASE_URL}icon/time.png`} />
                  <p className="level-p">6 hrs</p>
                </div>

                <div className="rating-container">
                  <img className="star-img" src={`${import.meta.env.BASE_URL}icon/star.png`} />
                  <p className="level-p">4.9/5(2.1k)</p>
                </div>

                <button className="save-your-seat-button">Save your seat</button>

              </div>
            </div>
          </div>
        </div>

        <div className="course-option-bg">
          <div className="course-container">
            <img className="js-img" src={`${import.meta.env.BASE_URL}picture/react.png`} />

            <div>
              <p className="javascript-fundamentals-p">React for Beginners</p>
              <p className="learn-the-core-p">Build modern, responsive UIs with React and understand the component model.</p>

              <div className="course-stats-container">
                <div className="level-container">
                  <img className="green-img" src={`${import.meta.env.BASE_URL}icon/green.png`} />
                  <p className="level-p">Beginner</p>
                </div>

                <div className="duration-container">
                  <img className="time-img" src={`${import.meta.env.BASE_URL}icon/time.png`} />
                  <p className="level-p">8.5 hrs</p>
                </div>

                <div className="rating-container">
                  <img className="star-img" src={`${import.meta.env.BASE_URL}icon/star.png`} />
                  <p className="level-p">4.8/5 (3.2k)</p>
                </div>

                <button className="save-your-seat-button">Save your seat</button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row-course-option-container">
        <div className="course-option-bg">
          <div className="course-container">
            <img className="js-img" src={`${import.meta.env.BASE_URL}picture/html.png`} />
            <div>
              <p className="javascript-fundamentals-p">HTML & CSS Crash Course</p>
              <p className="learn-the-core-p">Master the building blocks of the web and create breautiful layouts.</p>

              <div className="course-stats-container">
                <div className="level-container">
                  <img className="green-img" src={`${import.meta.env.BASE_URL}icon/green.png`} />
                  <p className="level-p">Beginner</p>
                </div>

                <div className="duration-container">
                  <img className="time-img" src={`${import.meta.env.BASE_URL}icon/time.png`} />
                  <p className="level-p">5.5 hrs</p>
                </div>

                <div className="rating-container">
                  <img className="star-img" src={`${import.meta.env.BASE_URL}icon/star.png`} />
                  <p className="level-p">4.7/5(3.7k)</p>
                </div>

                <button className="save-your-seat-button">Save your seat</button>

              </div>
            </div>
          </div>
        </div>

        <div className="course-option-bg">
          <div className="course-container">
            <img className="js-img" src={`${import.meta.env.BASE_URL}picture/nodejs.webp`} />

            <div>
              <p className="javascript-fundamentals-p">Node.js Essentials</p>
              <p className="learn-the-core-p">Learn JavaScript on the server and build powerful backend applications.</p>

              <div className="course-stats-container">
                <div className="level-container">
                  <img className="green-img" src={`${import.meta.env.BASE_URL}icon/green.png`} />
                  <p className="level-p">Beginner</p>
                </div>

                <div className="duration-container">
                  <img className="time-img" src={`${import.meta.env.BASE_URL}icon/time.png`} />
                  <p className="level-p">9 hrs</p>
                </div>

                <div className="rating-container">
                  <img className="star-img" src={`${import.meta.env.BASE_URL}icon/star.png`} />
                  <p className="level-p">4.9/5 (4.3k)</p>
                </div>

                <button className="save-your-seat-button">Save your seat</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
