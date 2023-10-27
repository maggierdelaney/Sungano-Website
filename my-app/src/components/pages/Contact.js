import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <div className="container">
      <div className="container">
        <ul className="stats-text" id="text-over-img">STATS
          <li className="stats">
            Bust: 33.25’
          </li>
          <li className="stats">
            Waist: 28.25’
          </li>
          <li className="stats">
            Hips: 36.25’
          </li>
          <li className="stats">
            Hair color: black
          </li>
          <li className="stats">
            Dress size: 4
          </li>
        </ul>
      </div>
      <br></br>
      <p className="stats-text">
        For inquiries, please direct message on instagram<a id="stats-text" className="nav-link active" href="https://www.instagram.com/sungano/">@sungano</a>
      </p>
      <br></br>
    </div>
  );
}
