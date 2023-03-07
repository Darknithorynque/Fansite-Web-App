import React from 'react';
import './navbar.css';
import GetTouch  from './getTouch';
import Counter from './getTouch';
//import React {useState} from 'react';
import { Link, Outlet, Router } from 'react-router-dom';
import Career from './more/about';



const Navbar = () =>{


    return(

<>


<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link to={"/"} style={{textDecoration:"none"}}><a className="color-navbar navbar-brand" > Elliot Page Support Fansite  </a></Link>
        <div id="counter">
         <i id='example' className="fa-solid fa-heart fa-3x"></i>       
        </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span className="navbar-toggler-icon" style={{marginLeft:"-10px"}}></span>
           </button>

    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <Link to="/about" style={{textDecoration:"none"}}><a className="nav-link"> About Elliot Page</a></Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
             <Link to="/movies" style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Movies</a></li></Link>
              <Link to="/tvShows"  style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">TV Shows</a></li></Link>
              <Link to={"/directedBy"}  style={{textDecoration:"none"}}><li><a className="dropdown-item" href="#">Directed By</a></li></Link>
              <li>
                <hr className="dropdown-divider"/>
              </li>
             <Link to="/more" style={{textDecoration:"none"}}> <li><a className="dropdown-item" href="#">Something else here</a></li></Link>
        </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</>

)
}

export default Navbar;

