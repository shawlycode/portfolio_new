import "./header.css"
import profile from '../../assets/pro.png'

import data from '../header/data'



const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__left">
          <h3>Hello I'm</h3>
          <h2>Akwesi Adabo Boakye</h2>
          <h4>Software Developer and Entrepreneur</h4>
          <p>A seasoned and versatile professional with a decade of experience in both software development and entrepreneurship, I have demonstrated a strong commitment to innovation, technical excellence, and business acumen. Throughout my career...</p>
          <div className="btn__container">
            <button className="btn"> Hire Me</button>
            <button className=" btn__white">Let's Collaborate</button>
          </div>
        </div>
        <div className="header__right-profile">
          <img src={profile} alt="logo" />
        </div>
        <div className="header__socials">
          {data.map(item => <ul key={item.key}>
            <a href={item.link}>{item.icon}</a>
          </ul>)}
        </div>
      </div>
    </section>
  )
}

export default Header
