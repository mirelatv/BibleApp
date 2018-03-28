import React from 'react';

const Footer = () => (
  <footer className="container pt-3">
    <div className="row">
      <ul className="col-12 d-flex justify-content-around">
        <li className="imgs-footer"><img src="assets/home.svg" alt="Home" className="img-fluid"/></li>
        <li className="imgs-footer"><img src="assets/film.svg" alt="Movies" className="img-fluid"/></li>
        <li className="imgs-footer"><img src="assets/popcorn.svg" alt="Dulcería" className="img-fluid"/></li>
        <li className="imgs-footer"><img src="assets/user.svg" alt="User" className="img-fluid"/></li>
      </ul>
    </div>
  </footer>
)

export default Footer;