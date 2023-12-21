import "./header.css"
import video from '../../assets/video.mp4';

import data from '../header/data'



const Header = () => {

  return (
    <section id="header">
      <div className="container header__container">
        <div className="left__container">
          <p className="intro_p">Hello I'm</p>
          <h2>Akwasi <span>Adabo</span> Boakye</h2>
          <h4>Software Developer and <span>Entrepreneur</span></h4>
          <p>A seasoned and versatile professional with a decade of experience in both software development and entrepreneurship, I have demonstrated a strong commitment to innovation, technical excellence, and business acumen. Throughout my career...</p>
          <div className="btn__container">
            <button className="btn">Hire Me</button>
            <button className="btn btn__white">Let's Collaborate</button>
          </div>
        </div>
        <div className="header__right-profile">
          <video src={video} loop={Infinity} autoPlay={true} width="100%" controls={false}
          />
        </div>
        <div className="header__socials">
          {data.map(item => <a href={item.link} key={item.id}>{item.icon}</a>)}
        </div>
      </div>
    </section >
  )
}

export default Header
