import React from 'react';
import './timeline.css';
import image1 from '../../img/17.png';
import image2 from '../../img/17.png';
import image3 from '../../img/17.png';
import image4 from '../../img/21.png';
import image5 from '../../img/22.png';
import image6 from '../../img/23.png';



const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="text">
          <img src={image4} alt="Image" className="image" />
          <h1 className="bold-headingg"> <span className="highlight">Lorem Ipsum</span>  is simply dummy<br /> text of the printing. </h1>
            <p>
            EXAMPLE COMPANY (PVT) LTD is a team of experienced<br /> mobile and web applications and website builders<br /> measuring dozens of completed projects. We build and <br />develop mobile applications for several top platforms, <br />including Android  & IOS. 
            </p>
            
          </div>
        </div>
        <div className="column">
          <img src={image1} alt="Image" className="image" />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={image2} alt="Image" className="image" />
        </div>
        <div className="column">
          <div className="text">
          <img src={image5} alt="Image" className="image" />
            <p className="bold-paragraph"> <span className="highlight">Lorem Ipsum</span>  is simply dummy<br /> text of the printing. </p>
            
            <p>
            EXAMPLE COMPANY (PVT) LTD is a team of experienced<br /> mobile and web applications and website builders<br /> measuring dozens of completed projects. We build and <br />develop mobile applications for several top platforms, <br />including Android  & IOS. 
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="text">
          <img src={image6} alt="Image" className="image" />
          <p className="bold-paragraph"> <span className="highlight">Lorem Ipsum</span>  is simply dummy<br /> text of the printing. </p>
          
            <p>
            EXAMPLE COMPANY (PVT) LTD is a team of experienced<br /> mobile and web applications and website builders<br /> measuring dozens of completed projects. We build and <br />develop mobile applications for several top platforms, <br />including Android  & IOS. 
            </p>
           
          </div>
        </div>
        <div className="column">
          <img src={image3} alt="Image" className="image" />
        </div>
      </div>
    </div>
  );
};

export default App;