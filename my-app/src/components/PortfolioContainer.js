import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Commercial from './pages/Commercial';
import Editorial from './pages/Editorial';
import Contact from './pages/Contact';
import Stats from './pages/Digital';
import './pages/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Commercial') {
      return <Commercial />;
    }
    if (currentPage === 'Editorial') {
      return <Editorial />;
    }
    if (currentPage === 'Digital') {
      return <Stats />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
