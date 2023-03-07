import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />

      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowNarrowLeft className="fs-4" /> Go back to blogs
                </Link>

                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-3.webp"
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore eos doloribus ipsum ad! Sequi perspiciatis omnis error
                  facilis deleniti reprehenderit consectetur placeat beatae
                  ratione? Earum dolorem odio eius placeat nisi. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Labore eos
                  doloribus ipsum ad! Sequi perspiciatis omnis error facilis
                  deleniti reprehenderit consectetur placeat beatae ratione?
                  Earum dolorem odio eius placeat nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
