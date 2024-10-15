import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, body, image } = service;
  if (_id) {
    return (
      <div className="col-lg-4 col-md-6">
        <Link to={`/services/${_id}`}>
          <div className="service-card text-center">
            <img src={`${image}`} className="img-fluid" alt="" />
            <h4 className="mt-4">{name}</h4>
            <p>{body}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="service-card text-center">
          <img src={`${image}`} className="img-fluid" alt="" />
          <h4 className="mt-4">{name}</h4>
          <p>{body}</p>
        </div>
      </div>
    );
  }
};

export default ServiceCard;
