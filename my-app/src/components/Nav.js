import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <div id="behind-nav" >
      <ul id="nav-flex" className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}><strong>H</strong>ome</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#commercial" onClick={() => handlePageChange('Commercial')}
            className={currentPage === 'Commercial' ? 'nav-link active' : 'nav-link'}><strong>c</strong>ommercial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#editorial" onClick={() => handlePageChange('Editorial')}
            className={currentPage === 'Editorial' ? 'nav-link active' : 'nav-link'}><strong>e</strong>ditorial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#contact" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}><strong>c</strong>ontact</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" href="https://www.instagram.com/sungano/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  );
}


export default Nav;
