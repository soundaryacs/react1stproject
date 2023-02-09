import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'

export default function Login() {
    return (
        <>
        <Header />
            <div className='container'>
                <div className='row'>
                <div className='col-md-4 col-sm-12'></div>
                    <div className='col-md-4 col-sm-12  bg-dark text-white p-3 mt-5'>
                        <h2>Login</h2>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary"><Link to='/dashboard' className='text-white'>Submit</Link></button>
                            
                            <div class="mb-3 mt-3">
                            <Link to='/'>Signup</Link> &nbsp; &nbsp;<Link to='/'>Forget Password</Link>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-4 col-sm-12'></div>
                </div>

            </div>
            <Footer />
        </>
    )
}
