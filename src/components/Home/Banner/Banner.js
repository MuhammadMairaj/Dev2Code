import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/logos/Frame.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-area mt-sm-4 mt-md-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="banner-text mt-lg-4">
              <h2>
                We Deliver Tailored IT Expertise that drives your digital
                transformation
              </h2>
              <p>
              We believe in combining innovative design, sustainable practices, and Standardized Coding to bring your vision to life.
              </p>
              <Link to="">Hire Us</Link>
            </div>
          </div>
          <div className="offset-xl-1 col-xl-6 col-lg-6">
            <div className="banner-img d-md-block d-none">
              <img src={banner} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
