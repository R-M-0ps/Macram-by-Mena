import {
  FaHeart,
  FaHandSparkles,
  FaPalette,
  FaGem
} from "react-icons/fa";

function WhyChooseUs() {

  const features = [
    {
      icon: <FaHandSparkles />,
      title: "100% Handmade",
      text: "Every piece is carefully handcrafted with attention to detail.",
    },

    {
      icon: <FaPalette />,
      title: "Custom Designs",
      text: "Create a special piece that matches your style and space.",
    },

    {
      icon: <FaHeart />,
      title: "Made With Love",
      text: "Every knot and detail is made with passion and care.",
    },

    {
      icon: <FaGem />,
      title: "Quality Materials",
      text: "We choose beautiful and reliable materials for every piece.",
    },
  ];

  return (
    <section className="why-section">

      <div className="container">

        <div className="section-heading text-center">

          <span>
            WHY MACRAMÉ BY MENA
          </span>

          <h2>
            Little Details Make
            <br />
            A Big Difference
          </h2>

        </div>


        <div className="row g-4">

          {features.map((feature, index) => (

            <div
              className="col-sm-6 col-lg-3"
              key={index}
            >

              <div className="feature-card">

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h4>
                  {feature.title}
                </h4>

                <p>
                  {feature.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;