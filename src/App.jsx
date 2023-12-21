import './app.css'
import Navbar from './section/navbar/Navbar'
// import Portfolio from './section/portfolio/Portfolio'
import Header from './section/header/Header'
import About from './section/about/About'
// import Experience from './section/experience/Experience'
import Achievements from './section/achievement/Achievements'
import Testimonials from './section/testimonials/Testimonials'
// import Contact from './section/contact/Contact'
import Footer from './section/footer/Footer'
import Skills from './section/skills/Skills'

const App = () => {
  return (
    <div>

      <Navbar />
      <Header />
      <About />
      {/* <Experience /> */}
      <Achievements />
      {/* <Portfolio /> */}
      <Skills />
      {/* <Contact /> */}
      <Testimonials />
      <Footer />

    </div>
  )
}

export default App
