import React, { useState } from 'react'
import "./home.css"
import { FaTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import About from '../about/about';
import Contact from '../contact/contact';
import Resume from '../resumepage/resume';
import Portfolio from '../portfolio/port';




const Homepage = () => {



  const [about, setAbout] = useState(false)
  const [resume, setResume] = useState(false)
  const [portfolio, setPortfolio] = useState(false)
  const [contact, setContact] = useState(false)
  const [showNav, setShowNav] = useState(false)


  const openAbout = ()=>{
      setAbout(true)
  }
  const openResume = ()=>{
    setResume(true)
  }
  const openPortfolio = ()=>{
    setPortfolio(true)
  }

  const openContact = ()=>{
    setContact(true)
  }


  const handleClick = () => {
    setShowNav(!showNav)
  }

  return (

    <div className='homeBodyContainer'>


      <div className='homeMainContainer'>
        <nav>
          <div className='navName'>MorsH</div>

          <ul className={showNav ? "navMedia" : 'navContainer flex-around gap-20'}>
            <li onClick={openAbout}>About</li>
            <li onClick={openResume}>Resume</li>
            <li onClick={openPortfolio}>Portfolio</li>
            <li onClick={openContact}>Contact</li>
          </ul>

          < VscListSelection color='white' size={30} className='listIcon' onClick={handleClick}/>
        </nav>

        <div className=' flex-center flex-column'>
          <h1>Olamide Alade</h1>
          <div className='homeText'>
            <p>I am a Full-stack Developer!</p>
          </div>
        </div>

        <div className='homeFooterSec'>

          <div className='engContainer'>
            <p>ENG</p>
          </div>

          <div className=' '>

            <div className='homeIcon '>
              <a href='https://x.com/__morsh' className='iconImgHome'> < FaTwitter size={17} /></a>
            </div>
            <div className='homeIcon'>
            <a href='https://web.facebook.com/profile.php?id=100080568897119' className='iconImgHome'><FaSquareFacebook size={17} /></a>
            </div>
            <div className='homeIcon'>
            <a href='https://www.linkedin.com/in/alade-olamide-b45b51309/' className='iconImgHome'>< FaLinkedin size={17} /></a>
            </div>

            <div className='homeIcon'>
            <a href='https://www.instagram.com/morshdev/' className='iconImgHome'>< FaInstagram size={17} /></a>
            </div>
            <div className='homeIcon'>
            <a href='https://github.com/MorsH14' className='iconImgHome'> < FaGithub size={17} /></a>
            </div>

          </div>
        </div>
      </div>


      {about ? <About setAbout={setAbout} /> : null}
      {contact ? <Contact setContact={setContact}/> : null}
      {portfolio ? <Portfolio setPortfolio={setPortfolio} /> : null}
     { resume ? <Resume setResume={setResume}/> : null}

    </div>
  )
}

export default Homepage