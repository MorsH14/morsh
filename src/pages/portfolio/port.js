import React, { useState } from "react";
import "./port.css";
import { ImCancelCircle } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Portfolio = ({ setPortfolio }) => {
  const [showDetails, setShowDetails] = useState(null);

  const hideModal = () => {
    setPortfolio(false);
  };

  const toggleDetails = (index) => {
    setShowDetails(showDetails === index ? null : index);
  };

  return (
    <div className="portfolioSection">
      <div className="existX" onClick={hideModal}>
        <ImCancelCircle size={25} color="gray" />
      </div>

      <div className="aboutContainer flex-center flex-column gap-10">
        <div>
          <h1 className="animate__animated animate__bounceInDown">Projects Done!</h1>
        </div>
        <div className="hrLine"></div>
      </div>

      <div className="flex-center flex-column">
        <div className="wehH3 pad-20">
          <h3 className="animate__animated animate__fadeInRight">
            Here are some of the websites I've worked on!
          </h3>
        </div>

        <div className="websiteFatherSection">
          {/* 🏠 Real Estate Website */}
          <Fade direction="right">
            <div className={`websiteSection ${showDetails === 1 ? "open" : ""}`}>
              <div className="websiteSingleContainer">
                <div className="imgPortSection">
                  <img
                    src="/assets/1159.png"
                    alt="Real Estate website Img"
                    width={700}
                    className="img"
                  />
                </div>
                <div className="textP flex-between pad-20">
                  <p>Real Estate Website</p>
                  <div className="webIcon flex-center" onClick={() => toggleDetails(1)}>
                    <FaArrowCircleRight size={20} />
                  </div>
                </div>
                {showDetails === 1 && (
                  <div className="projectDropdown pad-20">
                    <p>
                      Built a mobile-first property platform using React and Tailwind.<br />
                      Features: dynamic filtering, pagination, lazy loading.<br />
                      Focus: performance, intuitive UX, clean UI.
                    </p>
                    <a
                      href="https://app.1159realty.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visitBtn"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Fade>

          {/* 💼 Job Search Web App */}
          <Fade direction="left">
            <div className={`websiteSection ${showDetails === 2 ? "open" : ""}`}>
              <div className="websiteSingleContainer">
                <div className="imgPortSection">
                  <img
                    src="/assets/rana.png"
                    alt="Job Search website Img"
                    width={700}
                    className="img"
                  />
                </div>
                <div className="textP flex-between pad-20">
                  <p>Job Search Web App</p>
                  <div className="webIcon flex-center" onClick={() => toggleDetails(2)}>
                    <FaArrowCircleRight size={20} />
                  </div>
                </div>
                {showDetails === 2 && (
                  <div className="projectDropdown pad-20">
                    <p>
                      Developed a searchable job board using Next.js with SSR.<br />
                      Features: search filters, job details modal, location sorting.<br />
                      Focus: speed, SEO, component reuse.
                    </p>
                    <a
                      href="https://rana-ochre.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visitBtn"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Fade>

          {/* 👗 Fashion Designer Website */}
          <Fade direction="right">
            <div className={`websiteSection ${showDetails === 3 ? "open" : ""}`}>
              <div className="websiteSingleContainer">
                <div className="imgPortSection">
                  <img
                    src="/assets/image.png"
                    alt="Fashion website Img"
                    width={700}
                    className="img"
                  />
                </div>
                <div className="textP flex-between pad-20">
                  <p>Fashion Designer Portfolio</p>
                  <div className="webIcon flex-center" onClick={() => toggleDetails(3)}>
                    <FaArrowCircleRight size={20} />
                  </div>
                </div>
                {showDetails === 3 && (
                  <div className="projectDropdown pad-20">
                    <p>
                      Designed an elegant brand site using MUI and Emotion.<br />
                      Features: contact form, gallery, modern animations.<br />
                      Focus: minimalist UX, storytelling, responsive layout.
                    </p>
                    <a
                      href="https://morshclothiers.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visitBtn"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Fade>

          {/* 📈 Startup Landing Pages */}
          <Fade direction="left">
            <div className={`websiteSection ${showDetails === 4 ? "open" : ""}`}>
              <div className="websiteSingleContainer">
                <div className="imgPortSection">
                  <img
                    src="/assets/bb.png"
                    alt="Startup landing page Img"
                    width={700}
                    className="img"
                  />
                </div>
                <div className="textP flex-between pad-20">
                  <p>Startup Landing Pages</p>
                  <div className="webIcon flex-center" onClick={() => toggleDetails(4)}>
                    <FaArrowCircleRight size={20} />
                  </div>
                </div>
                {showDetails === 4 && (
                  <div className="projectDropdown pad-20">
                    <p>
                      Delivered conversion-focused pages React.<br />
                      Focus: strong CTAs, fast load times, responsive design.<br />
                      Used for demo projects and freelance showcases.
                    </p>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="visitBtn"
                      aria-label="Open startup landing demo in a new tab"
                    >
                      See Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
