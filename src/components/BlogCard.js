import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
          </div>
          <div className="blog-content">
            <p classname="date">05 january 2023</p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              culpa voluptas? Aperiam dolor odio iusto modi autem laudantium
              dolores, nisi explicabo, veritatis, accusamus adipisci molestiae?
              Enim a beatae unde voluptate!
            </p>
            <Link to="/" className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
