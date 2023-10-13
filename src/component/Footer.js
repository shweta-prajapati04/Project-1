import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (


    <div className='footer_text'>
<br></br><br></br>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>About Company 
                </h6>
                <p  className='footer_text'>
                  We, at Liberty Shoes have been fashioning footwear,
                  for well over 50 years now, for the style-conscious people around the globe.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  ONLINE SHOPPING
                </h6>
                <p>
                  <Link to="/product" className="text-reset">New Arrival</Link>
                </p>
                <p>
                  <Link to="/product/mens" className="text-reset">Men</Link>
                </p>
                <p>
                  <Link to="/product/womens" className="text-reset">Women</Link>
                </p>
                <p>
                  <Link to="/product/kids" className="text-reset">Kids</Link>
                </p>

              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  POLICIES
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className=" footer_text col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4 ">Contact</h6>
                <p className='footer_text' ><i className="fas fa-home me-3"></i> Ground Floor, Building No. 8
                  Tower - A, DLF Cyber City,
                  Gurgaon - 122002, Haryana
                </p>

                <p><i className="fas fa-phone me-3">Email:</i>lsocare@libertyshoes.com</p>
                <p><i className="fas fa-print me-3">Phone:</i> +91-95895-15126</p>
              </div>

            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundcolor: "rgba(0, 0, 0, 0.05)" }}>
          Copyright © 2023 - Liberty . All rights reserve
        </div>

      </footer>
    </div>
  )
}
