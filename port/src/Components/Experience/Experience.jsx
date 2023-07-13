import React from 'react';
import './Experience.css'; // Import the CSS file for styling
import image1 from '../../img/11.png';
import image2 from '../../img/2222.png';
import image3 from '../../img/3333.png';
import image4 from '../../img/4444.png';
const Experience = () => {
  return (
    <div className="container">
      <div className="row">
      <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
      </div>
      <hr className="divider" />
      <h1 className="bold-headingg">Lorem Ipsum is simply dummy text of the printing.</h1>
      <div className="paragraphh">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's.</p>
      </div>
      
    </div>
  );
}




export default Experience;