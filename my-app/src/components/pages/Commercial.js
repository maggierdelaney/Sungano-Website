import React from 'react';
import './style.css';

export default function Commercial() {
  return (
    <div id="com-cards">
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
    </div>
  );
}