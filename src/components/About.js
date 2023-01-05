
import React from 'react';
import tony from './img/tony.JPG'

const About = () => {
  return (
      <div  id='about' className=' about-page '>
    <div className='container text-center  text-dark '>
      <div className='d-flex flex-nowrap justify-content-center align-items-center'>
<h1 className='about-me text-start my-3 me-3 fw-bold '>About Me </h1>

<hr className='hr'/>
</div>
<div className='d-flex flex-row flex-wrap justify-content-evenly container'>
  
<div>
<p className='contact-paragraph  mt-3 text-dark'>Hello! My name is Tony and I enjoy creating things that live  on the internet.

 My interest in web development started back  in 2019 when I decided to try making a landing page for a friend's Affiliate 
 marketing business 
 — turns out hacking together a  landing page taught me
 a lot about HTML & CSS! <br/> <br/>
 {/* I'm  a Frontend developer based out of Lagos,Nigeria and I love combining the worlds of logic 
    and creative design to make eye catching, accessible, and user-friendly websites and applications. */}
    <br/><br/>
    I am passionate about providing solutions to users by building accessible products and 
    I believe in lifelong learning and continuous improvement which is why I'm excited to make the leap
 and continue refining my skills with the right company.
<br/> 
Here are a few technologies I’ve been working with recently:</p> 
<p></p><br/>
<ul className='list-unstyled'>
  <li>JavaScript (ES6)</li>
  <li>React</li>
</ul>
</div>
<div className='img'>
<img id="img" className='img-fluid img-fluids hvr-hang shadow mb-3 mb-lg-0 order-sm-1' src={ tony } alt="Tony's Photo"  />
</div>
</div>
    </div>
    </div>
  )
}

export default About