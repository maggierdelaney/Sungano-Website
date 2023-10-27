import React from 'react';
import './style.css';

/*braids pictures */
import jacketBody from '../images/editorial/jacket-body.JPG';
import braids from '../images/editorial/braids.JPG';
import jacketFront from '../images/editorial/jacket-front.JPG';

/*pattern dress images */
import patternLean from '../images/editorial/pattern-lean.JPG';
import patternFront from '../images/editorial/pattern-front.JPG';
import patternFar from '../images/editorial/pattern-far.JPG';
import patternLunge from '../images/editorial/pattern-lunge.JPG';

/*black and white images */
import blackLunge from '../images/editorial/black-lunge.JPG';
import blackFront from '../images/editorial/black-front.JPG';
import blackSide from '../images/editorial/black-side.JPG';

/*green overalls images */
import overallsFloor from '../images/editorial/overalls-floor.JPG';
import overallsFront from '../images/editorial/overalls-front.JPG';
import shoes from '../images/editorial/shoes.JPG';

/*last row joshua tree desert images */
import sandBag from '../images/editorial/sand-bag.JPG';
import whiteJacketUp from '../images/editorial/white-jacket-up.JPG';
import JoshuaTreeEdit from '../images/editorial/joshua-tree-edit.JPG';
import rockSide from '../images/editorial/rock-side.JPG';


export default function Editorial() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div class="col">
            <a href={jacketBody} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={jacketBody} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={braids} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={braids} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={jacketFront} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={jacketFront} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row align-items-center">
          <div class="col">
            <a href={patternLean} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={patternLean} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={patternFront} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={patternFront} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={patternFar} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={patternFar} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={patternLunge} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={patternLunge} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row align-items-center">
          <div class="col">
            <a href={blackLunge} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={blackLunge} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={blackFront} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={blackFront} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={blackSide} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={blackSide} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row align-items-center">
          <div class="col">
            <a href={overallsFloor} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={overallsFloor} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={overallsFront} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={overallsFront} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={shoes} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={shoes} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container">
        <div className="row align-items-center">
          <div class="col">
            <a href={sandBag} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={sandBag} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={whiteJacketUp} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={whiteJacketUp} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={JoshuaTreeEdit} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={JoshuaTreeEdit} alt="Card image cap"></img>
            </a>
          </div>
          <div class="col">
            <a href={rockSide} target="_blank" rel="noopener noreferrer">
              <img class="card-img-top" src={rockSide} alt="Card image cap"></img>
            </a>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  )
}
