import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { profileService } from "../API/profile/ProfileService";

export const Products = () => {
  const { data: profiles } = useQuery({
    queryFn: () => profileService.then((res) => res.data),
    keepPreviousData: true,
  });
  return (
    <div>
      {" "}
      <>
        <div className="col-md-6">
          <img
            src={profiles.image}
            alt={profiles.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{profiles.category}</h4>
          <h1 className="display-5">{profiles.title}</h1>
          <p className="lead fw-folder">
            <i className="fa fa-star"></i>
            {profiles.rating && profiles.rating.rate}
          </p>
          <h3 className="my-4 display-6 fw-bold"> ${profiles.price}</h3>
          <p className="lead">{profiles.description}</p>
          <button className="btn btn-outline-dark me-2">Add to cart</button>
          <button className="btn btn-dark">Go to cart</button>
        </div>
      </>
    </div>
  );
};
