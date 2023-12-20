import "./achievements.css"
import { TbBulbFilled } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";

const Achievements = () => {
  return (
    <section id="achievement">
      <h5>Achievements</h5>
      <h2>Recent <span>Achievements</span></h2>
      <div className="container achievements__container">
        <div className="achievements__box">
          <div className="achievements-icon">
            <TbBulbFilled />
          </div>
          <div className="achieve-content">
            <h5>Innovative Solutions</h5>
            <p>
              Pioneered the development of second cycle institutions
              communication improvement systems, demonstrating a deep
              understanding of emerging technologies.
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <IoRocket />
          </div>
          <div className="achieve-content">
            <h5>Innovative Solutions</h5>
            <p>
              Pioneered the development of second cycle institutions
              communication improvement systems, demonstrating a deep
              understanding of emerging technologies.
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <RiTeamFill />
          </div>
          <div className="achieve-content">
            <h5>Team Leadership</h5>
            <p>
              Successfully led and mentored cross-functional teams, fostering a collaborative environment that resulted in efficient project delivery.
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            < VscGraphLine />
          </div>
          <div className="achieve-content">
            <h5>Business Growth</h5>
            <p>
              As an entrepreneur, I grew Connect Solutions Ghana from a startup to a force in the software development industry in Ghana.
            </p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Achievements
