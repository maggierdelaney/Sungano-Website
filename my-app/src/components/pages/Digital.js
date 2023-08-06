import React from 'react';
import './style.css';


export default function Digital() {
  return (
    <div class="bd-example">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={require("../images/editorial/black-front.JPG")} alt="First slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require("../images/editorial/black-lunge.JPG")} alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={require("../images/editorial/black-neck.JPG")} alt="Third slide"></img>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}