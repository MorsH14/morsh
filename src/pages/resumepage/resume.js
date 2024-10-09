import React from 'react'
import "./resume.css"
import { ImCancelCircle } from "react-icons/im";
import { Fade } from 'react-awesome-reveal';


const Resume = ({ setResume }) => {



    const hideModal = () => {
        setResume(false)
    }

    return (
        <div className='resumeSection'>

            <div className='existX' onClick={hideModal}>
                <ImCancelCircle size={25} color='gray' />
            </div>

            <div className=' flex-center flex-column'>
                <h1 className='resumeHeaderText'>Resume</h1>
                <div className='hrLine'></div>

            </div>

            <div className=' flex-center'>

                <div className='resumeFlex'>

                <Fade direction="left">
                    <div className='experienceFlex'>
                        <div className='resumeHeader'>
                            <h3>Experience</h3>
                        </div>

                        <div className='resumeText'>
                            <h4>Femtech IT Training</h4>
                            <h6>Web Developer  / 10/2023 - Current</h6>
                            <p>Used HTML, CSS, JAVASCRIPT AND REACT.JS for the Fronted, NODE.JS for server side and MYSQL for database in building a website.</p>
                        </div>
                        <div className='resumeText'>
                            <h4>ShowTech</h4>
                            <h6>Front-end Developer / 09/2023 - 10/2023</h6>
                            <p>Designed user interfaces using HTML, CSS, and JavaScript to create seamless interactions and visually appealing layouts.</p>
                        </div>

                    </div>
                    </Fade>

                    <Fade direction="right">
                    <div className='educationFlex'>

                        <div className='resumeHeader'>
                            <h3>Education</h3>
                        </div>

                        <div className='resumeText'>
                            <h4>Computer Science</h4>
                            <h6>Ekiti State University / 2018 - 2022</h6>
                            <p>I enrolled at Elite university as a computer science student. where i had the knowledge of operating the system and further therein.</p>
                        </div>
                        <div className='resumeText'>
                            <h4>SSCE</h4>
                            <h6>BMHS/ 2016 - 2018</h6>
                            <p>I graduated from baptist modeel high school, based in Nigeria Kwara State.</p>
                        </div>


                    </div>
                    </Fade>
                </div>
            </div>


            <div className=''>

                <div className=' flex-center mar-20'>
                    <h1>My Skills</h1>
                </div>

                <div className=' flex-center'>

                    <div className='resumeFlex'>
                    <Fade direction="left">
                        <div className='experienceFlex'>
                            <h3 className='skillsText'>HTML</h3>
                            <h3 className='skillsText'>CSS</h3>
                            <h3 className='skillsText'>JAVASCRIPT</h3>
                            <h3 className='skillsText'>REACT</h3>
                        </div>
                        </Fade>
                        <Fade direction="right">
                        <div className='educationFlex'>

                            <h3 className='skillsText'>BOOTSTRAP</h3>
                            <h3 className='skillsText'>EXPRESS</h3>
                            <h3 className='skillsText'>NODE.JS</h3>
                            <h3 className='skillsText'>MYSQL</h3>
                        </div>
                        </Fade>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Resume