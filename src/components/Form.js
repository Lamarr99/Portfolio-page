import React from 'react';
import { faEnvelopeOpen, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faLinkedin,  } from '@fortawesome/free-brands-svg-icons'

const MyForm = (props) => (
  <div id='contact' className='bg-darks'>
<div className='contact-page d-flex flex-column justify-content-center align-items-center'>
<h1 className=' fw-bold text-white about-me text-center mt-5'>Get In Touch</h1>
<p id='brief-about' className='contact-paragraph text-center'>Got a question, proposal or project or want to work together on
 something? <br/> I'm just a click away.
  {/* I am available to work on your projects and bring your ideas 
<br /> to life. I am just a click away. */}
</p>
    
<div className='mt-3'>
<ul className='list-groups d-flex justify-content-center'>
<li className='contact-brand hvr-hang'><a href='https://github.com/Lamarr99'><FontAwesomeIcon icon= {faGithub} inverse/> </a></li>
<li className='contact-brand  hvr-hang'><a href='https://wa.me/message/NLFY2LONBZEVJ1'><FontAwesomeIcon icon={ faWhatsapp } inverse /></a></li>
<li className='contact-brand hvr-hang'><a href='https://www.linkedin.com/in/tony-osijo/'><FontAwesomeIcon icon={ faLinkedin } inverse/></a></li>
<li className='contact-brand hvr-hang'><a href='tel:07062826563'><FontAwesomeIcon icon={ faPhone } inverse/></a></li>
<li className='contact-brand hvr-hang'><a href='mailto:tonyleo2019@outlook.com'><FontAwesomeIcon icon={ faEnvelopeOpen } inverse/></a></li>
</ul>

    </div>
    </div>
    
</div>
)







export default MyForm