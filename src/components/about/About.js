import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function About() {
  const navigate = useNavigate();

  const goToProducts = () => {
    console.log("Do Something...."); //Logic
    navigate("/productlist");
  };

  return (
    <div>
      <Header />
      <h1>About</h1>
      <a href='/productlist'>Go to product page without using routing</a>
      <br/><br/>
      <button><Link to="/productlist" className='nav-link'>Go to Product Page With Routing </Link></button>
      <br/><br/>
      <button onClick={goToProducts}>Do Something & Go to Products</button>
      <br/>
      <br/>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Next</button>
      <Footer/>
    </div>
  )
}
