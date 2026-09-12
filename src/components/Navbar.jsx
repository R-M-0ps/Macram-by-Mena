import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { GiYarn } from "react-icons/gi";

function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // لو إحنا مش في Home
    if (location.pathname !== "/") {
      setActiveSection(
        location.pathname === "/collection" ? "collection" : ""
      );
      return;
    }

    const sections = [
      { id: "home", name: "home" },
      { id: "about", name: "about" },
      { id: "collection-preview", name: "collection" },
      { id: "reviews", name: "reviews" },
      { id: "contact", name: "contact" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element && scrollPosition >= element.offsetTop) {
          currentSection = section.name;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // عشان لما ندوس على section نقله ونخلي الخط يتغير فورًا
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar navbar-expand-lg handmade-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <Link to="/" className="navbar-brand brand-logo">
          <GiYarn className="brand-icon" />

          <div className="brand-text">
            <span className="brand-main">macramé</span>
            <span className="brand-sub">by mena</span>
          </div>
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            {/* HOME */}
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" &&
                  activeSection === "home"
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setActiveSection("home");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}
            <li className="nav-item">
              <a
                href="/#about"
                className={`nav-link ${
                  location.pathname === "/" &&
                  activeSection === "about"
                    ? "active"
                    : ""
                }`}
                onClick={() => handleSectionClick("about")}
              >
                About
              </a>
            </li>

            {/* COLLECTION */}
            <li className="nav-item">
              <Link
                to="/collection"
                className={`nav-link ${
                  location.pathname === "/collection" ||
                  (
                    location.pathname === "/" &&
                    activeSection === "collection"
                  )
                    ? "active"
                    : ""
                }`}
                onClick={() => setActiveSection("collection")}
              >
                Collection
              </Link>
            </li>{/* REVIEWS */}
            <li className="nav-item">
              <a
                href="/#reviews"
                className={`nav-link ${
                  location.pathname === "/" &&
                  activeSection === "reviews"
                    ? "active"
                    : ""
                }`}
                onClick={() => handleSectionClick("reviews")}
              >
                Reviews
              </a>
            </li>

            {/* CONTACT */}
            <li className="nav-item">
              <a
                href="/#contact"
                className={`nav-link ${
                  location.pathname === "/" &&
                  activeSection === "contact"
                    ? "active"
                    : ""
                }`}
                onClick={() => handleSectionClick("contact")}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Social */}
          <div className="navbar-social">

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
      </div>
    </nav>
  );
}

export default Navbar;