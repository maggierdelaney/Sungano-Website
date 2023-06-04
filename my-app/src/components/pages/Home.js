import React from 'react';
import './style.css';

export default function Home() {
  return (
    <div class="container">
      <img id="img-fluid" src={require("../images/makeup.HEIC")} class="img-fluid" alt="Responsive image"></img>
      <img id="img-fluid" src={require("../images/eye-makeup.HEIC")} class="img-fluid" alt="Responsive image"></img>
    </div>
  );
}