import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/luman_logo.png';

const Header = () => {
  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Product', path: '/products' },
    { title: 'Contact Us', path: '/contact' },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 844); // Adjust this value to match iPhone 12 Pro screen size
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white' ,padding:"5px"}}>
      <Toolbar>
        <img src={logo} alt="Company Logo" width="60" height="30"/>
        <div className={styles.container}>
          {isMobile ? (
            // Burger menu for mobile
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              style={{ color:'black'}}
              className={`{styles.menuButton} {styles.navButton}`}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Navbar buttons for larger screens
            navItems.map((item) => (
              <Button
                key={item.title}
                color="inherit"
                component={Link}
                to={item.path}
                style={{ margin: '0 10px', color:'black'}}
                className={styles.button_hover}
              >
                {item.title}
              </Button>
            ))
          )}

          {/* Responsive menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {navItems.map((item) => (
              <MenuItem key={item.title} onClick={handleMenuClose} component={Link} to={item.path}>
                {item.title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;