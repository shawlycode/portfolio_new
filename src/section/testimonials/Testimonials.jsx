
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
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>
        <div>
          <img src={testimonies} alt="" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default Testimonies;