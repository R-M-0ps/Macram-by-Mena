import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <span className="hero-small-title">
              HANDMADE WITH LOVE
            </span>

            <h1>
              Handmade Pieces
              <br />
              Made For Your Space
            </h1>

            <p>
              Discover beautiful handmade macramé pieces,
              carefully crafted with love, creativity and
              attention to every little detail.
            </p>

            <div className="hero-buttons">

              <Link to="/collection" className="btn main-btn">
                Explore Collection
                <FaArrowRight />
              </Link>

              <a href="#about" className="btn outline-btn">
                Discover Our Story
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        Scroll to explore
      </div>

    </section>
  );
}

export default Hero;