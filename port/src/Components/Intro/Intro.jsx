import React from 'react';
import leftImage from '../../img/22222.png';
import  rightImage1 from '../../img/man.png';
import  rightImage2 from '../../img/1111.png';
import './Intro.css';

const Intro = () => {
  return (
    <div className="intro-box">
      <div className="left-side">
        <div className="left-content">
          <div className="middle">
        
          <h1 className="bold-heading"> Experienced<span className="highlight"> mobile and web</span><br /> applications and website <br />builders measuring. </h1>
          
           <p className="paragraph">
           EXAMPLE COMPANY (PVT) LTD is a team of experienced mobile and web applications<br /> and website builders measuring dozens of completed projects.<br /> We build and develop mobile applications for several top platforms,<br /> including Android  & IOS. 
            </p> 
            
            <div className="buttons">
              <button>Contact us</button>
              <button>View more</button>
            </div>
          </div>
          <img src={leftImage} alt="Left Image" className="left-corner-image" />
        </div>
      </div>
      <div className="right-side">
        <div className="right-images">
          <img src={rightImage1} alt="Right Image 1" className="right-image" />
        </div>
        <img src={rightImage2} alt="Right Image 2" className="right-corner-image" />
      </div>
    </div>
  );
};

export default Intro;