import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div id="home-page" class="container">
      <div class="col-md-10" class="has-bg-img">
        <img src={require("../images/editorial/jacket-front.JPG")} class="bg-img" class="img-fluid" alt="Responsive image"></img>
        <ul class="carousel-caption" id="text-over-img">
          <li class="stats">
            Bust: 33.25’
          </li>
          <li class="stats">
            Waist: 28.25’
          </li>
          <li class="stats">
            Hips: 36.25’
          </li>
          <li class="stats">
            Hair color: black
          </li>
          <li class="stats">
            Dress size: 4
          </li>
        </ul>
      </div>
    </div>
  );
}
