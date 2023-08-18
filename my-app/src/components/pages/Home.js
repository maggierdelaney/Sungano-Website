import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div id="home-page" class="container">
      <div class="col-md-10" class="has-bg-img">
        <img src={require("../images/editorial/color-neck.JPG")} class="bg-img" class="img-fluid" alt="Responsive image"></img>
      </div>
    </div>
  );
}
