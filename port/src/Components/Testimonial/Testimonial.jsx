import React from 'react';
import './details.css'; // Import the CSS file for styling
import imageSrc from "../../img/Bell.png";
const Details = () => {
  return (
    <div className="details-container">
      <div className="box">
      <div className="box-content">
        <p className="bold-paragraph">Lorem Ipsum is simply <br />dummy text.</p>
        <p>KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br />mobile and web applications and website builders <br />measuring dozens of completed projects. We build and <br />develop mobile applications for several top platforms,<br /> including Android  & IOS. </p>
        <button className="view-more-button white-button">View More</button>
      </div>
      </div>
      <div className="box blue-box">
        <div className="box-content">
        
            
        <p className="bold-paragraph white-text">Lorem Ipsum is simply<br /> dummy text.</p>
        <p className="white-text">KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br />mobile and web applications and website builders<br /> measuring dozens of completed projects. We build and<br /> develop mobile applications for several top platforms,<br /> including Android  & IOS. </p>
        <button className="view-more-button">View More</button>
        <div className="image-container">
        <img src={imageSrc} alt="Image" className="top-right-image" />
         </div>
      </div>
      </div>
    </div>
  );
}

export default Details;
