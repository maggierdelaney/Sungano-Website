import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div id="home-page" className="container">
      <div className="col-md-10" className="has-bg-img">
        <img src={require("../images/editorial/color-neck.JPG")} className="bg-img" className="img-fluid" alt="Responsive image"></img>
      </div>
    </div>
  );
}