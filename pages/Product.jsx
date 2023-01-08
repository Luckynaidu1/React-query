import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { profileService } from "../API/profile/ProfileService";
import { timezoneService } from "../API/timezone/TimezoneService";
import Button from "../components/Button";
import { QueryKeys } from "../helpers/QueryKeys";
import { useTimezone } from "../query-hooks/useTimezone";

export default function Product() {

  
  const {
    isLoading,
    data: profiles,
    isError,
    error,
  } = useQuery({
    queryKey: [QueryKeys.ProfilesGet, pagination],
    queryFn: () =>
    profileService
    .getProfiles(pagination.page, pagination.limit)
    .then((res) => res.data),
    keepPreviousData: true,
  });
  const [filter, setFilter] = useState(profiles);

  if (isError) {
    return <div>something went wrong...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const filterdata=(cat)=>{
    const update=profiles.filter((x)=>x.category === cat)
    setFilter(update)
}  
  return (
    <>
    <div className='pb-5 mb-5 button d-flex justify-content-center'>
         <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(profiles)}>All</button>
         <button className='btn btn-outline-dark me-2' onClick={()=>filterdata("men's clothing")}>mens collection</button>
         <button className='btn btn-outline-dark me-2'onClick={()=>filterdata("women's clothing")}>Womens collection</button>
         <button className='btn btn-outline-dark me-2' onClick={()=>filterdata("jewelery")}>jewellary</button>
         <button className='btn btn-outline-dark me-2' onClick={()=>filterdata("electronics")}>electronics</button>
         </div>
         <div className='row justify-content-center'> 
            {
            filter.map((product,index)=>{
                return<>   
                <div className='mb-4 col-md-3'key={product.id} > 
             <div className="card" >
                <img src={product.image} className="card-img-top" alt={product.title} height='250px'/>
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0,12)}</h5>
                  <p className="card-text fw-bold">${product.price}</p>
                  <NavLink to={`/product/${product.id}`}className="btn btn-primary">Buy now</NavLink>
                </div>
            </div>
              </div>
              </>
              })
            }
            </div>
          </>
  );
}
