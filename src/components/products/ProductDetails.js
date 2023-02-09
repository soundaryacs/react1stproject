import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const [prodInfo, setProdInfo] = useState({});
  const { id } = useParams();
  console.log(useParams());

  const fetchData = async () => {
    let prodInfo = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProdInfo(prodInfo.data);
    console.log(prodInfo.data);
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <div className='container-fluid bg-primary p-2 mb-3'>
        <h3 className='text-center text-white'>Product Detail: {id} - {prodInfo.title}</h3>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-4'>
            <img src={prodInfo?.image} alt="Product"  style={{width:'100%', border:'1px solid #ededed', padding:'50px'}}/>
          </div>
          <div className='col-md-8 col-sm-8'>
            <h4>{prodInfo?.title}</h4>
            <p>{prodInfo?.description}</p>
            <h3>₹ {prodInfo?.price} /- </h3>
            <p><strong>Category:</strong> {prodInfo?.category}</p>
            <button className='btn btn-danger'>Buy Now</button>
            <button className='btn btn-success ms-2'>Add to Cart</button><br /><br />
            <p><strong>Ratings:</strong> {prodInfo?.rating?.rate} / 5</p>
            <p><strong>Number of Ratings:</strong> {prodInfo?.rating?.count} Buyers</p>

            <br/>
            <br/>
            <button className='btn btn-dark'><Link to='/productlist' style={{textDecoration:'none', color:'#ffffff'}}>View all Products</Link></button>
          </div>
        </div>

      </div>
    </div>
  )
}
