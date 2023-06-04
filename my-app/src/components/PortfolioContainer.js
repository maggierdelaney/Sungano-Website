import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Commercial from './pages/Commercial';
import Editorial from './pages/Editorial';
import Social from './pages/Social';
import Contact from './pages/Contact';
import './pages/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Commercial') {
      return <Commercial />;
    }
    if (currentPage === 'Editorial') {
      return <Editorial />;
    }
    if (currentPage === 'Social') {
        return <Social />;
      }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
