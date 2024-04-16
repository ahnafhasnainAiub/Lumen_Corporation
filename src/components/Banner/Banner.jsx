import React from 'react';
import '../Banner/Banner.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Banner = () => {
  const navItems = [
    { title: 'About us', path: '/about' },
    // Add more nav items here if needed
  ];

  return (
    <div className='banner'>
      <div className='banner-text'>
        <h1 className='mb-4'>Lumen Corporation</h1>
        <p className='mb-4'>We ensure better services for a better world.</p>
        {navItems.map((item) => (
          <Button
            key={item.title}
            component={Link}
            to={item.path}
            style={{ backgroundColor: '#39A78E', color: 'white', marginBottom: '10px' }}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Banner;
