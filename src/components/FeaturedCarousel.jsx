import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

function FeaturedCarousel({ products, itemsPerView = 3, interval = 3000 }) {
  const [startIndex, setStartIndex] = useState(0);
  const timerRef = useRef(null);

  const total = products.length;

  const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-play
  useEffect(() => {
    if (total <= itemsPerView) return; // no need to slide if they all fit

    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [startIndex, total, itemsPerView, interval]);

  // Get the visible slice (wraps around)
  const visibleProducts = Array.from({ length: Math.min(itemsPerView, total) }, (_, i) =>
    products[(startIndex + i) % total]
  );

  const pauseAutoplay = () => clearInterval(timerRef.current);
  const resumeAutoplay = () => {
    if (total > itemsPerView) {
      timerRef.current = setInterval(next, interval);
    }
  };

  return (
    <div
      className="featured-carousel"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="row g-4">
        {visibleProducts.map((product) => (
          <div className="col-md-6 col-lg-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {total > itemsPerView && (
        <div className="carousel-controls">
          <button onClick={prev} aria-label="Previous">‹</button>
          <div className="carousel-dots">
            {products.map((_, i) => (
              <span
                key={i}
                className={i === startIndex ? "dot active" : "dot"}
                onClick={() => setStartIndex(i)}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next">›</button>
        </div>
      )}
    </div>
  );
}

export default FeaturedCarousel;