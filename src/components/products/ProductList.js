import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Product from "./Product";
import { products } from "./products_data";

export default function ProductList() {
  return (
    <>
    <Header />
      <div className="container">
        <div className="row m-3">
          <div className="col-sm-4 offset-3">
            <input type='search' className="form-control" placeholder="Search..." />
          </div>
          <div className="col-sm-2 offset-3">
            <button className="btn btn-primary">Asc</button>
            <button className="btn btn-secondary ms-1">Desc</button>
          </div>
        </div>
        <div className="row">
          {products.map((product) => {
            return <Product prod={product} key={product.id} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
