import React from 'react';
import './style.css';

export default function Commercial() {
  return (
    <div id="com-cards">
      <div class="card">
        <img class="card-img-top" src={require("../images/commercial/black-crop.JPG")} alt="Card image cap"></img>
        {/* <div class="card-body">
        </div> */}
      </div>
      <div class="card">
        <img class="card-img-top" src={require("../images/commercial/blue-dress-side.JPG")} alt="Card image cap"></img>
        {/* <div class="card-body">
          </div> */}
      </div>
      <div class="card">
        <img class="card-img-top" src={require("../images/commercial/blue-dress.JPG")} alt="Card image cap"></img>
        {/* <div class="card-body">
          </div> */}
      </div>
      <div class="card">
        <img class="card-img-top" src={require("../images/commercial/romper-side.JPG")} alt="Card image cap"></img>
        {/* <div class="card-body">
          </div> */}
      </div>
      <div class="card">
        <img class="card-img-top" src={require("../images/commercial/romper.JPG")} alt="Card image cap"></img>
        {/* <div class="card-body">
          </div> */}
      </div>
      <div class="card">
        <img class="card-img-top" src={require("../images/commercial/white-shirt-front.JPG")} alt="Card image cap"></img>
        {/* <div class="card-body">
          </div> */}
      </div>
      <div class="card">
        <img class="card-img-top" src={require("../images/commercial/white-shirt-up.JPG")} alt="Card image cap"></img>
        {/* <div class="card-body">
          </div> */}
      </div>
    
    </div>
  );
}