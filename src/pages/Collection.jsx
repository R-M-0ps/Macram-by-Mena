// import { useState } from "react";
// import products from "../data/products";
// import ProductCard from "../components/ProductCard";

// function Collection() {

//   const productsPerPage = 6;

//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(
//     products.length / productsPerPage
//   );

//   const lastIndex = currentPage * productsPerPage;

//   const firstIndex = lastIndex - productsPerPage;

//   const currentProducts = products.slice(
//     firstIndex,
//     lastIndex
//   );

//   return (
//     <main>

//       <section className="page-header">

//         <div className="container text-center">

//           <span>
//             OUR HANDMADE COLLECTION
//           </span>

//           <h1>
//             Made With Love
//           </h1>

//           <p>
//             Explore our collection of unique handmade pieces.
//           </p>

//         </div>

//       </section>


//       <section className="collection-section">

//         <div className="container">

//           <div className="row g-4">

//             {currentProducts.map((product) => (
//               <div
//                 className="col-md-6 col-lg-4"
//                 key={product.id}
//               >
//                 <ProductCard product={product} />
//               </div>
//             ))}

//           </div>


//           {/* Pagination */}

//           <div className="pagination-wrapper">

//             <button
//               className="pagination-btn"
//               disabled={currentPage === 1}
//               onClick={() =>
//                 setCurrentPage(currentPage - 1)
//               }
//             >
//               Previous
//             </button>


//             {[...Array(totalPages)].map((_, index) => {

//               const pageNumber = index + 1;

//               return (
//                 <button
//                   key={pageNumber}
//                   className={`pagination-number ${
//                     currentPage === pageNumber
//                       ? "active"
//                       : ""
//                   }`}
//                   onClick={() =>
//                     setCurrentPage(pageNumber)
//                   }
//                 >
//                   {pageNumber}
//                 </button>
//               );
//             })}


//             <button
//               className="pagination-btn"
//               disabled={currentPage === totalPages}
//               onClick={() =>
//                 setCurrentPage(currentPage + 1)
//               }
//             >
//               Next
//             </button>

//           </div>

//         </div>

//       </section>

//     </main>
//   );
// }

// export default Collection;


import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Collection() {

  const PRODUCTS_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);


  // Total pages
  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );


  // Start index
  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;


  // End index
  const endIndex =
    startIndex + PRODUCTS_PER_PAGE;


  // IMPORTANT:
  // This will NEVER return more than 6 products
  const currentProducts = products.slice(
    startIndex,
    endIndex
  );


  const handlePrevious = () => {

    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }

  };


  const handleNext = () => {

    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }

  };


  return (
    <main>

      <section className="page-header">

        <div className="container text-center">

          <span>
            OUR HANDMADE COLLECTION
          </span>

          <h1>
            Made With Love
          </h1>

          <p>
            Explore our collection of unique
            handmade pieces.
          </p>

        </div>

      </section>


      <section className="collection-section">

        <div className="container">

          <div className="row g-4">

            {currentProducts.map((product) => (

              <div
                className="col-md-6 col-lg-4"
                key={product.id}
              >

                <ProductCard
                  product={product}
                />

              </div>

            ))}

          </div>


          {/* Pagination */}

          {totalPages > 1 && (

            <div className="pagination-wrapper">

              <button
                className="pagination-btn"
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                Previous
              </button>


              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (

                <button
                  key={page}
                  className={
                    currentPage === page
                      ? "pagination-number active"
                      : "pagination-number"
                  }
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>

              ))}


              <button
                className="pagination-btn"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Collection;