import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <div id="behind-nav">
      <ul id="nav-flex" class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#commercial" onClick={() => handlePageChange('Commercial')}
            className={currentPage === 'Commercial' ? 'nav-link active' : 'nav-link'}>Commercial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#editorial" onClick={() => handlePageChange('Editorial')}
            className={currentPage === 'Editorial' ? 'nav-link active' : 'nav-link'}>Editorial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#contact" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#social" onClick={() => handlePageChange('Social')}
            className={currentPage === 'Social' ? 'nav-link active' : 'nav-link'}>Social</a>
        </li>
      </ul>
    </div>
  );
}


export default Nav;
