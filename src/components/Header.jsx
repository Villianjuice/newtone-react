import React from 'react';
import { AppBar, Box, Container, IconButton, Typography } from '@mui/material';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

import logo from '../assets/img/logo-header.svg';
import Search from './Search';
import IconButtonHead from './IconButtonHead';
import { Link } from 'react-router-dom';

const styles = {
  AppBar: { padding: '15px 5px' },
  Toolbar: { justifyContent: 'space-between', display: 'flex', alignItems: 'center'},
  BoxIcons: { display: 'flex', alignItems: 'center' },
  gender: {display: 'flex', alignItems: 'center', m: '5px 0'},
  link: {color: 'primary.light', mr: '40px'}
};

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={styles.AppBar}>
        <Container maxWidth="xl">
          <Box sx={styles.Toolbar}>
            <Box sx={{ mr: 2 }}>
              <img src={logo} alt="logo-header" />
            </Box>
            <Search />
            <Box sx={styles.BoxIcons}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 5 }}>
                <PersonOutlineIcon fontSize="28px" />
              </IconButton>
              <IconButtonHead badge>
                <FavoriteBorderIcon fontSize="28px" />
              </IconButtonHead>
              <IconButtonHead badge>
                <LocalGroceryStoreOutlinedIcon fontSize="28px" />
              </IconButtonHead>
              <Typography> 0.00 ₽</Typography>
            </Box>
          </Box>
          <Box sx={styles.gender}>
            <Link to='/collection'>
              <Typography sx={styles.link}>Мужское</Typography>
            </Link>
            <Link to='/collection'>
              <Typography sx={styles.link}>Мужское</Typography>
            </Link>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
