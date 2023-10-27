import React from 'react';
import './style.css';

/*makeup photos top row */
import makeupCloseImage from '../images/commercial/makeup-close.JPG';
import makeupLipImage from '../images/commercial/makeup-lip.JPG';
import makeupRightImage from '../images/commercial/makeup-right.JPG';
import makeupSkinImage from '../images/commercial/makeup-skin.JPG';

/*denim romper photos */
import denimLounge from '../images/commercial/denim-lounge.JPG';
import denimStand from '../images/commercial/denim-stand.JPG';
import denimStool from '../images/commercial/denim-stool.JPG';

/*romper outdoors photos */
import romperSide from '../images/commercial/romper-side.JPG';
import romper from '../images/commercial/romper.JPG';
import romperSun from '../images/commercial/romper-sun.JPG';

/*black and white sweater photos */
import sweaterBody from '../images/commercial/sweater-body.JPG';
import sweaterChin from '../images/commercial/sweater-chin.JPG';
import sweaterFace from '../images/commercial/sweater-face.JPG';
import sweaterLegs from '../images/commercial/sweater-legs.JPG';

export default function Commercial() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <a href={makeupCloseImage} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={makeupCloseImage} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={makeupLipImage} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={makeupLipImage} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={makeupRightImage} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={makeupRightImage} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={makeupSkinImage} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={makeupSkinImage} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col">
            <a href={denimLounge} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={denimLounge} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={denimStand} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={denimStand} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={denimStool} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={denimStool} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row">
        <div class="col">
            <a href={romperSide} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={romperSide} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={romper} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={romper} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={romperSun} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={romperSun} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="row">
        <div class="col">
            <a href={sweaterBody} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={sweaterBody} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={sweaterChin} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={sweaterChin} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={sweaterFace} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={sweaterFace} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={sweaterLegs} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={sweaterLegs} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}