import React, { useState } from 'react'
import "./home.css"
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa6";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";
// import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import About from '../about/about';
import Contact from '../contact/contact';
// import Resume from '../resumepage/resume';
import Portfolio from '../portfolio/port';
import 'animate.css';
import { SiExpress, SiMui, SiTypescript } from 'react-icons/si';




const Homepage = () => {



  const [about, setAbout] = useState(false)
  // const [resume, setResume] = useState(false)
  const [portfolio, setPortfolio] = useState(false)
  const [contact, setContact] = useState(false)
  const [showNav, setShowNav] = useState(false)


  const openAbout = ()=>{
      setAbout(true)
  }
  // const openResume = ()=>{
  //   setResume(true)
  // }
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
        <nav class="animate__animated animate__fadeInDown">
          <div className='navName'>MorsH</div>

          <div className='listWrapper'>
          <ul className={showNav ? "navMedia" : 'navContainer flex-around gap-20'}>
            <li onClick={openAbout}>About</li>
            {/* <li onClick={openResume}>Resume</li> */}
            <li onClick={openPortfolio}>Projects</li>
            <li onClick={openContact}>Contact</li>
          </ul>
          </div>

          < VscListSelection color='white' size={30} className='listIcon' onClick={handleClick}/>
        </nav>

        <div className='centerWraper flex-center flex-column'>
          <h1 class="animate__animated animate__fadeInDown">Olamide Alade</h1>
          <div className='homeText'>
            <p class="animate__animated animate__bounceInLeft">I am a Front-end Developer</p>
          </div>

          <div className='iconWrapper  animate__animated animate__fadeInDown'>
            <div>
            <FaHtml5  size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < FaCss3Alt size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < IoLogoJavascript size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < FaReact size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < SiMui size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < FaNodeJs size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < TbBrandNextjs size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < TbBrandMysql size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < IoLogoNodejs size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < SiExpress size={40} color='rgb(55, 100, 55)'/>
            </div>
            <div>
            < SiTypescript size={40} color='rgb(55, 100, 55)'/>
            </div>
        </div>

        </div>

       
        <div className='homeFooterSec'>

          <div className='engContainer'>
            <p>ENG</p>
          </div>

          <div class="animate__animated animate__fadeInRight">

            <div className='homeIcon '>
              <a href='https://x.com/midemorsh' className='iconImgHome'> < FaTwitter size={17} /></a>
            </div>
            {/* <div className='homeIcon'>
            <a href='https://web.facebook.com/profile.php?id=100080568897119' className='iconImgHome'><FaSquareFacebook size={17} /></a>
            </div> */}
            <div className='homeIcon'>
            <a href='https://www.linkedin.com/in/alade-olamide-a86304360?' className='iconImgHome'>< FaLinkedin size={17} /></a>
            </div>

            <div className='homeIcon'>
            <a href='https://www.instagram.com/_midemorsh/' className='iconImgHome'>< FaInstagram size={17} /></a>
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
     {/* { resume ? <Resume setResume={setResume}/> : null} */}

    </div>
  )
}

export default Homepage