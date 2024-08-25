import React from 'react';

const Footer = () => {
  return (
    <footer className="text-light py-4" style={{backgroundColor:'green'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing the best travel experiences across the globe. Discover new places and unique adventures with us.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/destinations" className="text-light">Destinations</a></li>
              <li><a href="/packages" className="text-light">Packages</a></li>
              <li><a href="/contact" className="text-light">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@travelwebsite.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Travel St, Wanderlust City, World</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; {new Date().getFullYear()} Travel Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
