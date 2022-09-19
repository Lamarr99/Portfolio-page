import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import  brand from './img/brand.png';


 const Navbar = () => {
   return (
 
    <nav class="navbar navbar-expand-sm navbar-dark  sticky-top " >
    <div class="container-fluid ">
    <img id='nav-img' className='img-fluid navbar-brand rounded brighten' alt="brand Logo" src={ brand } />
      {/* <a class="navbar-brand" href="#">TONE</a> */}
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTony" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span class="navbar-toggler-icon"></span> */} <FontAwesomeIcon icon={ faBars } />
      </button>

      <div class="collapse navbar-collapse me-lg-3" id="navbarTony">
        <ul  class="navbar-nav  ms-auto mb-2 mb-md-0 ">
        <li className="nav-item">
            <a className="nav-link "  href="#about"><div id="underline"></div>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#projects"><div id="underline"></div>Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jobs"><div id="underline"></div>Experience</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#contact"><div id="underline"></div>Contact</a>
          </li>
          </ul>
      </div>
    </div>
  </nav>
 

 
  )
}

export default Navbar