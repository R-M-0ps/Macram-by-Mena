import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]
  );

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product Not Found</h2>

        <Link to="/collection">
          Back To Collection
        </Link>
      </div>
    );
  }

  const phoneNumber = "201220624426";

  const message = `Hello Mena, I would like to order:

Product: ${product.name}
Price: ${product.price} EGP
Color: ${selectedColor}`;

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


  return (
    <main>

      <section className="details-section">

        <div className="container">

          <Link
            to="/collection"
            className="back-link"
          >
            <FaArrowLeft />
            Back To Collection
          </Link>


          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="details-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

            </div>


            <div className="col-lg-6">

              <div className="details-content">

                <span className="product-category">
                  HANDMADE COLLECTION
                </span>

                <h1>
                  {product.name}
                </h1>

                <h3 className="details-price">
                  {product.price} EGP
                </h3>

                <p className="details-description">
                  {product.description}
                </p>


                <div className="detail-info">

                  <p>
                    <strong>Material:</strong>{" "}
                    {product.material}
                  </p>

                </div>


                {product.colors?.length > 0 && (

                  <div className="color-section">

                    <h6>
                      Available Colors
                    </h6>

                    <div className="color-options">

                      {product.colors.map((color) => (

                        <button
                          key={color}
                          className={
                            selectedColor === color
                              ? "color-option selected"
                              : "color-option"
                          }
                          onClick={() =>
                            setSelectedColor(color)
                          }
                        >
                          {color}
                        </button>

                      ))}

                    </div>

                  </div>

                )}


                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-order"
                >
                  <FaWhatsapp />

                  Order This Product

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;