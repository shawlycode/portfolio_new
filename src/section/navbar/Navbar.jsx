import "./navbar.css"
import data from '../../data'
import Logo from '../../assets/profile.jpg'
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="logo" />
        </a>
        <ul className="nav__links">
          {
            data.map(item => <li key={item.id}> <a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button className="menu__icon"><IoMenuOutline /></button>
      </div>
    </nav >
  )
}

export default Navbar;
