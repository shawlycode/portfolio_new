import "./navbar.css"
import data from '../../data'
import Logo from '../../assets/profile.jpg'
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  const menu = () => {
    alert("clicked menu icon");
  }
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <h3>Adab<span>o.</span></h3>
        </a>
        <ul className="nav__links">
          {
            data.map(item => <li key={item.id}> <a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button className="menu__icon" onClick={menu}><IoMenuOutline /></button>
      </div>
    </nav >
  )
}

export default Navbar;
