import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function HttpDemo6() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const url =  "https://fakestoreapi.com/products";
        const response = await axios.get(url);
        setProducts(response.data);
    }

   /*  const fetchProducts = () => {
    const url = 'https://fakestoreapi.com/products';
    axios.get(url).then(response=>{
        console.log(response.data);
        setProducts(response.data);
    }).catch(err=>{
        console.log(err)
    })
  }; */

    useEffect (() => {
        fetchProducts();
    }, []);

  return (
    <>
      
      <div className="container">
      <h1 className="text-center">Fetch Products using axios method</h1>
        <div className="row">
          {console.log(products)}
          {products.map((product, ind) =>{
            return <div className="col-sm-3 card" key={ind}>
            <img
              src={product.image}
              className="card-img-top"
              style={{ height: "150px" }}
              alt=""
            />
            <div className="card-body text-center">
              <h5 className="card-title">{product.category}</h5>
              <p className="card-text">{product.title}</p>
              <p className="card-text">Price: {product.price}</p>
              <p className="card-text">Ratings: {product.rating.rate}</p>
              <button className="btn btn-primary">BUY NOW </button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  
);
}
