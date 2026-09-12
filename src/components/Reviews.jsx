import { FaStar } from "react-icons/fa";

function Reviews() {

  const reviews = [
    {
      name: "Sara",
      text: "The piece was even more beautiful than I expected. The details are amazing!",
    },

    {
      name: "Mariam",
      text: "Beautiful handmade work and very high quality. I absolutely loved it!",
    },

    {
      name: "Nour",
      text: "Such a beautiful addition to my room. Everything was made with love.",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">

      <div className="container">

        <div className="section-heading text-center">

          <span>
            KIND WORDS
          </span>

          <h2>
            What Our Customers Say
          </h2>

          <p>
            Every handmade piece has a story,
            and our customers are part of it.
          </p>

        </div>


        <div className="row g-4">

          {reviews.map((review, index) => (

            <div
              className="col-md-4"
              key={index}
            >

              <div className="review-card">

                <div className="stars">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}

                </div>

                <p>
                  "{review.text}"
                </p>

                <h5>
                  {review.name}
                </h5>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Reviews;