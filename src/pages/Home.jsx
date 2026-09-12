
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Reviews from "../components/Reviews";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedCarousel from "../components/FeaturedCarousel";

import products from "../data/products";

function Home() {

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <main>

      <Hero />


      {/* About */}

      <section
        className="about-section"
        id="about"
      >

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-image">

                <img
                  src="\src\assets\images\about-1.jpg"
                  alt="Handmade Macramé"
                />

              </div>

            </div>


            <div className="col-lg-6">

              <div className="about-content">

                <span>
                  OUR STORY
                </span>

                <h2>
                  Handmade,
                  <br />
                  From Our Hands To Your Home
                </h2>

                <p>
                  At Macramé by Mena, every piece is
                  carefully handmade with love, patience
                  and attention to detail.
                </p>

                <p>
                  We believe that handmade pieces are more
                  than decorations. They bring warmth,
                  personality and a special story to every
                  space.
                </p>

                <Link
                  to="/collection"
                  className="text-link"
                >
                  Explore Our Collection →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Featured Collection */}

      <section className="featured-section" id="collection-preview">

        <div className="container">

          <div className="section-heading">

            <div>

              <span>
                SHOP OUR
              </span>

              <h2>
                Favourite Pieces
              </h2>

            </div>

            <Link
              to="/collection"
              className="view-all"
            >
              View All
            </Link>

          </div>

          <FeaturedCarousel
            products={featuredProducts}
            itemsPerView={3}
            interval={3000}
          />

        </div>

      </section>


      <WhyChooseUs />

      <Reviews />


      {/* CTA */}

      <section className="cta-section" id="contact">

        <div className="container text-center">

          <span>
            MADE ESPECIALLY FOR YOU
          </span>

          <h2>
            Looking For Something Special?
          </h2>

          <p>
            Have an idea in mind? Let's create
            something beautiful together.
          </p>

          <a
            href="https://wa.me/201220624426"
            target="_blank"
            rel="noreferrer"
            className="btn main-btn"
          >
            Contact Us On WhatsApp
          </a>

        </div>

      </section>

    </main>
  );
}

export default Home;