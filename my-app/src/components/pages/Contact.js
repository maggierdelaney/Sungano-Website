import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div class="container">
      <div class="container">
        <ul class="stats-text" id="text-over-img">STATS
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
      <br></br>
      <p class="stats-text">
        For inquiries, please direct message on instagram<a id="stats-text" class="nav-link active" href="https://www.instagram.com/sungano/">@sungano</a>
      </p>
      <br></br>
    </div>
  );
}
