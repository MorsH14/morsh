import React from "react";
import "./port.css";
import { ImCancelCircle } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";

const Portfolio = ({ setPortfolio }) => {
  const hideModal = () => {
    setPortfolio(false);
  };

  return (
    <div className="portfolioSection">
      <div className="existX" onClick={hideModal}>
        <ImCancelCircle size={25} color="gray" />
      </div>

      <div className="aboutContainer flex-center flex-column gap-10">
        <div>
          <h1>Projects Done!</h1>
        </div>
        <div className="hrLine"></div>
      </div>

      <div className=" flex-center flex-column">
        <div className="wehH3 pad-20">
          <h3>Here are some of the website i've worked on! </h3>
        </div>

        <div className="websiteFatherSection">
          <div className="websiteSection">
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
                <p>Fashion Website</p>
                <div className="webIcon flex-center">
                  <a
                    href="https://morshclothiers.vercel.app/"
                    className="linkTag"
                  >
                    <FaArrowCircleRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="websiteSection">
            <div className="websiteSingleContainer">
              <div className="imgPortSection">
                <img
                  src="/assets/du.png"
                  alt="Photography website Img"
                  width={700}
                  className="img"
                />
              </div>
              <div className="textP flex-between pad-20">
                <p>Photography Website</p>
                <div className="webIcon flex-center">
                  <a
                    href="https://dunsinsgraphy.vercel.app/"
                    className="linkTag"
                  >
                    <FaArrowCircleRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="websiteSection">
            <div className="websiteSingleContainer">
              <div className="imgPortSection">
                <img src="/assets/bb.png" alt="" width={700} className="img" />
              </div>
              <div className="textP flex-between pad-20">
                <p>Entertainment Website</p>
                <div className="webIcon flex-center">
                  <a
                    href="https://betabelieveevent.vercel.app/"
                    className="linkTag"
                  >
                    {" "}
                    <FaArrowCircleRight size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
