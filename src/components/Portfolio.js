import React from 'react'
import cart from './img/cart.JPG'
import list  from './img/List.png'
import qr from './img/QR-generator.png'
import swopp from './img/swopp.jpg'

const Portfolio = () => {
  return (
    <>
    <div className=' work-page d-flex flex-column align-content-center justify-content-center'>
        <h1 className=' about-me mx-auto my-5'>Some things I've built </h1> 
<div className='d-flex flex-row flex-wrap m-3  justify-content-center align-items-start'>

<div className='card text-center bg-dark p-3 rounded hvr-float-shadow m-1 grid'>
  <figure class="effect-lexi">
  <h3 className='card-header'>ToDo App</h3>
<a href='https://lamarr99.github.io/ToDoList-App/' ><img className='img-fluid rounded work-image justify-content-center shadow' src={ list } /></a>
<figcaption>
  {/* <p>Each and every friend is special. Lexi won't hide a single cookie.</p> */}
  </figcaption></figure>
</div>
<div className='text-center bg-dark p-3 rounded    hvr-float-shadow m-1'>

<figure >  <h3 className>Shopping cart</h3>
  <a href='https://lamarr99.github.io/Shopping-Cart-JS/' ><img className='img-fluid rounded work-image justify-content-center shadow ' src={ cart } /></a>
<figcaption>
  </figcaption></figure></div>

<div className=' text-center bg-dark p-3 rounded   hvr-float-shadow m-1'>

<figure>  <h3>QR Code Generator</h3>
<a href='https://lamarr99.github.io/QR-Code-Generator/' ><img className='img-fluid rounded work-image justify-content-center shadow ' src={ qr} /></a>
<figcaption>
  </figcaption></figure>
</div>
<div className=' text-center bg-dark p-3 rounded   hvr-float-shadow m-1'>

<figure>  <h3>Swopp!</h3>
<a href='https://lamarr99.github.io/Swopp/' ><img className='img-fluid rounded work-image justify-content-center shadow ' src={ swopp} /></a>

<figcaption>
  </figcaption></figure>
</div>
</div>

    </div>
    
    </>
  )
  function Phone(props) {
    return <h1>Buy this {props.brand} {props.brand.model}</h1>
  }
  
  function Store() {
    const apple = {brand: 'Iphone',model:'13 Pro Max'}
    return (
  <>
  <h1>What is going on?</h1>
  <Phone name={ apple } />
  </>
  
    )
  }
}

export default Portfolio