import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


 function Header() {

  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
    strings: [ "I'm a Frontend Developer.", "I build things for the web."] ,
    // Strings to display
      // Speed settings, try different values untill you get good results
      startDelay: 250,
      typeSpeed: 80,
      backSpeed: 70,
      backDelay: 100,
      loop:false
    });

    return () => {
        typed.destroy();
      };
    }, []);
  


    return (
      <>
      
      <div id="head"  className="header-wrapper ">
         
          <div className="main-info px-5 container mt-sm-5
           justify-content-sm-center  align-content-sm-center">
          <p id='hi' className='lead '>Hi, my name is</p>
         <h2 className='my-name h1 py-lg-2 pb-2 display-5 '>Tony Osijo.</h2>
        
        {/* <h3 className="main-text fs-5">Hi, my name is<br/> <span className="my-name fs-1">Tony Osijo</span>.
        
        </h3> */}
     
        <div className='main-head'>
        <span className="strings mt-5 h1" ref={el}></span>
        </div> <br/>
        <p id='brief-about' className='mb-4 lead  '>I’m a Frontend Developer specializing in building <br/> 
        (and occasionally designing) quality digital experiences.<br/>
            Currently, I’m focused on building accessible,
            human-centered <br/> products at <a href='checkdp.com' target='_blank' id='hi' className='my-name'>
              CheckDP</a>.</p>
        <div className=''>
        
        <a href="#"  className="btn-main-offer hvr-bounce-to-right mb-5 text-center" download='01-Tony Osijo'>Resume</a>
        </div>
      </div>
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
      </div>

      </>

      
    );
  }

  export default Header
       