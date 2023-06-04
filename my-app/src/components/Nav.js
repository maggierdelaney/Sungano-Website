import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <ul id="nav-flex" className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#commercial"
          onClick={() => handlePageChange('Commercial')}
          className={currentPage === 'Commercial' ? 'nav-link active' : 'nav-link'}
        >
          Commercial
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#editorial"
          onClick={() => handlePageChange('Editorial')}
          className={currentPage === 'Editorial' ? 'nav-link active' : 'nav-link'}
        >
          Editorial
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#social"
          onClick={() => handlePageChange('Social')}
          className={currentPage === 'Social' ? 'nav-link active' : 'nav-link'}
        >
          Social
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Nav;
