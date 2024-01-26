import React from 'react';
import './footer.css'; // Make sure to import your CSS file

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-footer">
          <div className="row row-footer">
            {/* Contact Section */}
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <h4>Contact Us</h4>
              <p>
                Email: example@example.com<br />
                Phone: (123) 456-7890<br />
                Address: 123 Street, City, Country
              </p>
            </div>

            {/* Quick Links Section */}
            <div className='col-md-3'></div>
            <div className="col-md-3 Quick">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Calculator</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Insights</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          <div className="container-footer">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
