import React from "react";
import "./about.css";
import { ImCancelCircle } from "react-icons/im";
import { FaTwitter } from "react-icons/fa6";
// import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiWebflow } from "react-icons/si";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import { Fade } from "react-awesome-reveal";

const About = ({ setAbout }) => {
  const hideModal = () => {
    setAbout(false);
  };

  return (
    <div className="aboutSection">
      <div className="existX" onClick={hideModal}>
        <ImCancelCircle size={25} color="gray" />
      </div>

      <div className="aboutContainer flex-center flex-column gap-10">
        <div>
          <h1 class="animate__animated animate__bounceInDown">About Me</h1>
        </div>
        <div className="hrLine animate__animated animate__fadeInLeft"></div>
      </div>

      <div className="aboutImgContainer">
        <Fade direction="left">
          {" "}
          <div className="aboutImgSec"></div>{" "}
        </Fade>

        <div className="textSection">
          <Fade direction="right">
            <div className="aboutText">
              <h3 class="animate__animated animate__bounce">
                My name is Olamide Alade, a Frontend Engineer.
              </h3>

              <p>
                I’m a creative and detail-oriented Front-End Developer based in
                Nigeria, with a solid foundation in building scalable,
                SEO-optimized, and responsive web applications. Over the last 3+
                years, I’ve worked on real-world projects across industries like
                real estate, job search platforms, and fashion portfolios. I’m
                passionate about delivering clean code and smooth user
                experiences using tools like React, Next.js, Tailwind, and MUI.
                I enjoy turning complex problems into clean, user-friendly
                designs, and I’m constantly seeking ways to improve my craft.
                Let’s work together and bring your ideas to life.
              </p>
            </div>
          </Fade>

          <a href="/assets/OlamideAlade_Resume.docx">
            <button>Download CV</button>
          </a>

          <Fade direction="down">
            <div className="iconFlex gap-20">
              <div className="homeIcon">
                <a href="https://x.com/midemorsh" className="iconImgHome">
                  {" "}
                  <FaTwitter size={20} />
                </a>
              </div>
              {/* <div className='homeIcon'>
                            <a href='https://web.facebook.com/profile.php?id=100080568897119' className='iconImgHome'><FaSquareFacebook size={20} /></a>
                        </div> */}
              <div className="homeIcon">
                <a
                  href="https://www.linkedin.com/in/alade-olamide-a86304360?"
                  className="iconImgHome"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>

              <div className="homeIcon">
                <a
                  href="https://www.instagram.com/_midemorsh/"
                  className="iconImgHome"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
              <div className="homeIcon">
                <a href="https://github.com/MorsH14" className="iconImgHome">
                  {" "}
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div className=" flex-center flex-column">
        <div className="servicesSection">
          <h1>My Services</h1>
        </div>

        <div className="servicesSection">
          <Fade direction="left">
            <div className="servicesTextSection">
              <ImHtmlFive2 className="myServiceIcon" size={50} />

              <h3>Front-end development</h3>
              <p>
                Building the user-facing part of websites using HTML, CSS,
                JAVASCRIPT and REACT. Ensuring that they are attractive and easy
                to use.
              </p>
            </div>
          </Fade>
          <Fade direction="top">
            <div className="servicesTextSection">
              <DiJavascript className="myServiceIcon" size={50} />

              <h3>UI/UX design</h3>
              <p>
                Creating intuitive and visually appealing user interfaces that
                provide an optimal user experience.
              </p>
            </div>
          </Fade>
          <Fade direction="right">
            <div className="servicesTextSection">
              <FaReact className="myServiceIcon" size={50} />

              <h3>Responsive Web Design</h3>
              <p>
                Ensuring that websites are optimized for all screen sizes, from
                desktop to mobile.
              </p>
            </div>
          </Fade>
        </div>

        <div className="servicesSection">
          <Fade direction="left">
            <div className="servicesTextSection">
              <SiWebflow className="myServiceIcon" size={50} />

              <h3>Back-end development</h3>
              <p>
                Developing the server-side of websites, ensuring that they are
                functional and secure. I work with NODE.JS and MYSQL for the
                server side.
              </p>
            </div>
          </Fade>
          <Fade direction="bottom">
            <div className="servicesTextSection">
              <FaNodeJs className="myServiceIcon" size={50} />

              <h3>API's</h3>
              <p>
                Server-side development with Node.js, including building
                back-end APIs, web applications, and microservices.
              </p>
            </div>{" "}
          </Fade>
          <Fade direction="right">
            <div className="servicesTextSection">
              <SiMysql className="myServiceIcon" size={50} />

              <h3> Database Management</h3>
              <p>
                Managing and optimizing databases for websites, ensuring that
                data is stored and retrieved efficiently.
              </p>
            </div>{" "}
          </Fade>
        </div>

        <div className="">
          <div className="testText flex-center">
            <h1>Certification</h1>
          </div>

          <Fade direction="bottom">
            {" "}
            <div>
              <img src="assets/certificate_fiti.jpg" alt="" width={300} />
            </div>
          </Fade>
        </div>

        <div className="testimonialSection">
          <div className="testText flex-center">
            <h1>Testimonial</h1>
          </div>

          <Marquee>
            <div className="mainTextContainer gap-30">
              <div className="flex-between">
                <div className="testimonialImgSec">
                  <div className="TextNameSection">
                    <div className="flexTextImg">
                      <img src="/assets/r1.jpeg" alt="" className="testImg" />
                      <div className="textSectionTestimonial">
                        <h5>Mary Herson</h5>
                        <p>United state</p>
                      </div>
                    </div>

                    <div>
                      <GiBoxingGloveSurprise
                        className="myServiceIcon"
                        size={30}
                      />
                    </div>
                  </div>

                  <div className="pTagTest">
                    <p>
                      Alade technical skills are solid, and he delivered a
                      well-coded website. However, his communication could use
                      some improvement. There were times when it was difficult
                      to get timely updates on the project's progress.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-between">
                <div className="testimonialImgSec">
                  <div className="TextNameSection">
                    <div className="flexTextImg">
                      <img src="/assets/r2.jpeg" alt="" className="testImg" />
                      <div className="textSectionTestimonial">
                        <h5>David H.</h5>
                        <p>United State</p>
                      </div>
                    </div>

                    <div>
                      <GiBoxingGloveSurprise
                        className="myServiceIcon"
                        size={30}
                      />
                    </div>
                  </div>

                  <div className="pTagTest">
                    <p>
                      Olamide exceeded our expectations with her web development
                      skills. She created a sleek, modern site that performs
                      exceptionally well. Her innovative approach and proactive
                      problem-solving were impressive. We couldn't be happier
                      with the results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-between">
                <div className="testimonialImgSec">
                  <div className="TextNameSection">
                    <div className="flexTextImg">
                      <img src="/assets/r3.jpeg" alt="" className="testImg" />
                      <div className="textSectionTestimonial">
                        <h5>Fred Scott</h5>
                        <p>New York</p>
                      </div>
                    </div>

                    <div>
                      <GiBoxingGloveSurprise
                        className="myServiceIcon"
                        size={30}
                      />
                    </div>
                  </div>

                  <div className="pTagTest">
                    <p>
                      Alade is a talented developer with a knack for creating
                      responsive and engaging websites. He was easy to work with
                      and communicated well throughout the project. There were
                      minor issues post-launch, but she was quick to fix them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-between">
                <div className="testimonialImgSec">
                  <div className="TextNameSection">
                    <div className="flexTextImg">
                      <img src="/assets/r4.jpeg" alt="" className="testImg" />
                      <div className="textSectionTestimonial">
                        <h5>Adebisi Susan</h5>
                        <p>Nigeria</p>
                      </div>
                    </div>

                    <div>
                      <GiBoxingGloveSurprise
                        className="myServiceIcon"
                        size={30}
                      />
                    </div>
                  </div>

                  <div className="pTagTest">
                    <p>
                      Olamide did a great job on our e-commerce platform. The
                      new features he implemented increased our sales and
                      improved user experience. There were a few delays in the
                      project, but overall, we are very satisfied with the
                      outcome.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-between">
                <div className="testimonialImgSec">
                  <div className="TextNameSection">
                    <div className="flexTextImg">
                      <img src="/assets/r5.jpeg" alt="" className="testImg" />
                      <div className="textSectionTestimonial">
                        <h5>Kate Gat.</h5>
                        <p>South Africa</p>
                      </div>
                    </div>

                    <div>
                      <GiBoxingGloveSurprise
                        className="myServiceIcon"
                        size={30}
                      />
                    </div>
                  </div>

                  <div className="pTagTest">
                    <p>
                      Olamide did an excellent creative job, addressing our
                      request quickly, and also providing her own graphic
                      insight, being open to feedback and changes or edits when
                      they arose. She worked with us the entire way. Highly
                      recommended.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className='flex-between'>
                                <div className='testimonialImgSec'>
                                    <div className='TextNameSection'>
                                        <div className='flexTextImg'>
                                            <img src='/assets/bi.webp' alt='' className='testImg' />
                                            <div className='textSectionTestimonial'>
                                                <h5>John Herson</h5>
                                                <p></p>
                                            </div>
                                        </div>

                                        <div>
                                            < GiBoxingGloveSurprise className='myServiceIcon' size={30} />
                                        </div>
                                    </div>

                                    <div className='pTagTest'>
                                        <p>Olamide is an exceptional web developer. He redesigned our entire website, making it not only visually appealing but also highly functional. His attention to detail and ability to understand our requirements made the project a success. Highly recommend!</p>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
