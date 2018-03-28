import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import Home from './Home';
import Snack from './Snack';
import Cartelera from './Cartelera';
import Account from './Account';

const Footer = () => {
  return (
    <Router>
      <div>
        <footer className="container pt-3">
          <div className="row">
            <ul className="col-12 d-flex justify-content-around">
              <li className="imgs-footer"><a href="#"><Link to='/Home'><img src="assets/home.svg" alt="Home" className="img-fluid"/></Link></a></li>
              <li className="imgs-footer"><a href="#"><Link to='/Cartelera'><img src="assets/film.svg" alt="Movies" className="img-fluid"/></Link></a></li>
              <li className="imgs-footer"><a href="#"><Link to='/Snack'><img src="assets/popcorn.svg" alt="Dulcería" className="img-fluid"/></Link></a></li>
              <li className="imgs-footer"><a href="#"><Link to='/Account'><img src="assets/user.svg" alt="User" className="img-fluid"/></Link></a></li>
            </ul>
          </div>
        </footer>
        <Switch>
          <Route path='/Home' component={Home} /> 
          <Route path='/Cartelera' component={Cartelera} />
          <Route path='/Snack' component={Snack} /> 
          <Route path='/Account' component={Account} />
          <Redirect from='/' to='/Home' />
        </Switch>
      </div>
    </Router>
  )
}

export default Footer;