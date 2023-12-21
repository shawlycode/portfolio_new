import './about.css'
import profile from '../../assets/profile.jpg'
const About = () => {



  const onButtonClick = () => {
    const pdfUrl = "cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.cv"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about">

      <div className="container about__container">

        <div className="about__img"><img src={profile} alt="" /></div>
        <div className="about__content">
          <h2>About <span>Me</span></h2>
          <h4>Software Developer and Entrepreneur</h4>
          <p>A seasoned and versatile professional with a decade of experience in both software development and entrepreneurship, I have demonstrated a strong commitment to innovation, technical excellence, and business acumen. Throughout my career, I have successfully merged technical proficiency with entrepreneurial spirit to create impactful solutions and ventures. This portfolio serves as a testament to my skills, achievements, and passion for building transformative technology.</p>
          <button className=" btn read-more__btn" onClick={onButtonClick}>
            Download Resume
          </button>
        </div>

      </div>


    </section>
  )
}

export default About
