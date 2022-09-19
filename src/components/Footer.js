import { faAngleDoubleUp, faEnvelope, faEnvelopeOpen, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faWhatsapp, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'
import React from 'react';

const Footer = () => {
  return (
    
    <div id="footer" className='footer text-center'>
<a href='#head' className='btn-main-offers hvr-ripple-out'><FontAwesomeIcon icon={ faAngleDoubleUp } inverse /> </a>
   
    <p className=' mt-4 fw-bold copyright'>Designed & built by Tony Osijo </p>

    </div>

  )
}

export default Footer