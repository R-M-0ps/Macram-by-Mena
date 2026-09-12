import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { GiYarn } from "react-icons/gi";

function Footer() {
  return (
    <footer className="footer" >

      <div className="container">

        <div className="row gy-4">

          {/* Brand */}
          <div className="col-lg-5 col-md-6">

            <Link to="/" className="footer-brand">

              <GiYarn className="footer-brand-icon" />

              <div className="footer-brand-text">

                <span className="footer-brand-main">
                  macramé
                </span>

                <span className="footer-brand-sub">
                  by mena
                </span>

              </div>

            </Link>

            <p className="footer-description">
              Handmade with love, passion and creativity.
              Discover unique macramé pieces made specially
              to add warmth and beauty to your space.
            </p>

            {/* Social Media */}

            <div className="footer-social">

              <a
                href="https://instagram.com/macrame_by_mena"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

            </div>

          </div>


          {/* Quick Links */}

          <div className="col-lg-3 col-md-3">

            <h5>Explore</h5>

            <ul>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/collection">
                  Collection
                </Link>
              </li>

              <li>
                <a href="/#about">About Us</a>
              </li>

              <li>
                <a href="/#reviews">Reviews</a>
              </li>

            </ul>

          </div>


          {/* Contact */}

          <div className="col-lg-4 col-md-3">

            <h5>Get In Touch</h5>

            <p>
              Have a question or want to place an order?
              We'd love to hear from you.
            </p>

            <a
              href="https://wa.me/201220624426"
              target="_blank"
              rel="noreferrer"
              className="footer-order"
            >
              Order via WhatsApp
            </a>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Macramé by Mena.
            All rights reserved.
          </p>

          <span>
            Handmade with ♡
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;