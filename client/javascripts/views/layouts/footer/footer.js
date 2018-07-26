import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <nav className="leftFooter">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/apis" className="footer-link">APIs</Link>
            <Link to="/ads" className="footer-link">Advertising</Link>
            <Link to="/shop" className="footer-link">Shop</Link>
          </nav>
          <nav className="rightFooter">
            <p className="copy-right">©2018 Kdakean</p>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
