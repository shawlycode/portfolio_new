
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import testimonies from '../../assets/profile.jpg'
import './testimonials.css'

const Testimonies = () => {
  return (
    <div className="carousel__container">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        showArrows={false}
        interval={6100}
        showStatus={false}
      >
        <div>
          <img src={testimonies} alt="" />
          <div className="myCarousel">
            <h3>Frederick Atuahene</h3>
            <h4>Project Manager for Automating Internal Business processes - GRA
            </h4>
            <p>
              It has been a pleasure working with Kwasi Adabo Boakye. His technical expertise and entrepreneurial mindset bring a unique perspective to every project, ensuring success and innovation
            </p>
          </div>

        </div>
        <div>
          <img src={testimonies} alt="" />
          <div className="myCarousel">
            <h3>Nkrumah Ofori</h3>
            <h4>ECG</h4>
            <p>
              He's an awesome developer and a serial Entrepreneur and he delivers's excellent works. I recommend him for anyone having a project.
            </p>
          </div>
        </div>
        <div>
          <img src={testimonies} alt="" />
          <div className="myCarousel">
            <h3>Benjamin Mahama</h3>
            <h4>VRA</h4>
            <p>
              Fantastic Entrepreneur with a lot of tech skills under his sleeve. He develops intuitive applications.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default Testimonies;