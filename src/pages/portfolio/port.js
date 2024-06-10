import React from 'react'
import "./port.css"
import { ImCancelCircle } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";
import { Toaster, toast } from 'sonner';


const Portfolio = ({ setPortfolio }) => {

  const hideModal = () => {
    setPortfolio(false)
  }

  const alertClick = () => {
    toast.success('This website is still under construction, coming soon!')
  }


  return (
    <div className='portfolioSection'>
      < Toaster position='top-left' richColors/>
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
                <img src='/assets/ht.png' alt='' />

              </div>
              <div className='textP flex-between pad-20'>
                <p>Hotel Website</p>
                <div className='webIcon flex-center' onClick={alertClick} >
                  < FaArrowCircleRight size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className='websiteSection'>

            <div className='websiteSingleContainer'>
              <div className='imgPortSection'>
                <img src='/assets/wt.png' alt='' />
              </div>
              <div className='textP flex-between pad-20'>
                <p>E-commerce Website</p>
                <div className='webIcon flex-center' onClick={alertClick} >
                  < FaArrowCircleRight size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className='websiteSection'>

            <div className='websiteSingleContainer'>
              <div className='imgPortSection'>
                <img src='/assets/pi.jpg' alt='' />
              </div>
              <div className='textP flex-between pad-20'>
                <p>Fashion Website</p>
                <div className='webIcon flex-center' onClick={alertClick} >
                  < FaArrowCircleRight size={20} />
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