import React from 'react'
import "./port.css"
import { ImCancelCircle } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";


const Portfolio = ({ setPortfolio }) => {

  const hideModal = () => {
    setPortfolio(false)
  }


  return (
    <div className='portfolioSection'>
      
      <div className='existX' onClick={hideModal}>
        <ImCancelCircle size={25} color='gray' />
      </div>

      <div className='aboutContainer flex-center flex-column gap-10'>
        <div>
          <h1>Portfolio</h1>
        </div>
        <div className='hrLine'></div>
      </div>


      <div className=' flex-center flex-column'>


        <div className='wehH3 pad-20'>
          <h3>Here are some of the website i've worked on! </h3>
        </div>

        <div className='websiteFatherSection'>

          <div className='websiteSection'>

            <div className='websiteSingleContainer'>
              <div className='imgPortSection'>
                <img src='/assets/e.png' alt='e-commerce website Img' />

              </div>
              <div className='textP flex-between pad-20'>
                <p>E-commerce Website</p>
                <div className='webIcon flex-center' >
                <a href='https://e-commerce-omega-ashy.vercel.app/' className='linkTag'>< FaArrowCircleRight size={20} /></a> 
                </div>
              </div>
            </div>
          </div>
          <div className='websiteSection'>

            
          </div>
          <div className='websiteSection'>

            <div className='websiteSingleContainer'>
              <div className='imgPortSection'>
                <img src='/assets/c.png' alt='' />
              </div>
              <div className='textP flex-between pad-20'>
                <p>Car Rentals Website</p>
                <div className='webIcon flex-center' >
                <a href='https://sparecar.vercel.app/' className='linkTag'> < FaArrowCircleRight size={20} /></a> 
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>

    </div>

  )
}

export default Portfolio