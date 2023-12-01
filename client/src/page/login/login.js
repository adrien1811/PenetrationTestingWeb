import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './login.css';
import { Link } from 'react-router-dom'; 
const login =() =>{
    const handleSubmit = (e) => {
    e.preventDefault();
    }
  return (
    <div>
    <section className="ftco-section ftco-no-pt d-flex justify-content-md-center justify-content-center align-items-md-start align-items-start gradient-container2" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <h1 style={{ fontSize: '20px', color: 'black', textAlign: 'center', paddingTop: '150px' }}>
            Halaman Login
          </h1>
          <div className="col-md-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{ color: 'white' }}>Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: 'white' }}>Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="your password" />
              </div>
              <div className="d-flex justify-content-center">
              <Link to="/home">
                <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default login;
