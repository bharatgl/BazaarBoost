import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={" Product Name"} />
      <BreadCrumb title=" Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
        <section className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="bg-white p-3">
                  <h4>Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime iure impedit dicta. Sint tempore hic sapiente cum
                    magnam eveniet cupiditate optio asperiores. Culpa unde
                    aliquid non, eveniet officia quaerat autem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex gap-10 align-items-center">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a
                          className="text-dark text-decoration-underline"
                          href="#"
                        >
                          Write a review
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <dir>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                        />
                      </dir>
                      <div>
                        <textarea
                          name=""
                          id=""
                          cols="30"
                          className="w-100 form-control"
                          rows="4"
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews mt-3">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Bharat</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dignissimos ex vitae molestiae libero omnis
                        ducimus iure. Animi fuga officiis magnam asperiores
                        cumque consequuntur impedit dolores, libero ducimus
                        assumenda unde repellendus!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
