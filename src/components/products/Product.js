import React from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

export default function Product(props) {
  const { image, category, title, price, rating, id} = props.prod;

  const navigate = useNavigate();
  const navigateHandler = (title, price) => {
    navigate({
      pathname: "/productdetail",
      search: `?${createSearchParams({ title, price })}`
    });
  };

  // Props De-structuring
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card mb-2" >
        <img
          src={image}
          className="card-img-top"
          style={{ height: "150px", width:'150px', margin:'auto', padding:'10px'  }}
          alt=""
        />
        <div className="card-body text-center">
          <h6 className="card-text">{title}</h6>
          <p className="card-title"><strong>Category: </strong>{category}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Ratings: {rating.rate}</p>
          <button className="btn btn-dark"><Link to={`/productdetails/${id}`} style={{textDecoration:'none', color:'#ffffff'}}>View Product</Link></button>
          <button className="btn btn-danger ms-1" onClick={() => {
              navigateHandler(title, price)}}>View Detail</button>
        </div>
      </div>
    </div>
  );
}