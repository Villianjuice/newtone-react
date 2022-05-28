import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Container, IconButton, Typography, Badge } from '@mui/material';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

import Search from './Search';
import Logo from '../composables/Logo';

const styles = {
  AppBar: { padding: '15px 5px' },
  Toolbar: { justifyContent: 'space-between', display: 'flex', alignItems: 'center' },
  BoxIcons: { display: 'flex', alignItems: 'center' },
  gender: { display: 'flex', alignItems: 'center', m: '5px 0' },
  link: { color: 'primary.light', mr: '40px' },
};

const Header = () => {
  const navigate = useNavigate();

  const totalPrice = useSelector(({ cart }) => cart.totalPrice);
  const totalCount = useSelector(({ cart }) => cart.totalCount);
  
  return (
    // <Box sx={{ flexGrow: 1 }} component='header'>
      <AppBar position="static" sx={styles.AppBar}>
        <Container maxWidth="xl">
          <Box sx={styles.Toolbar}>
            <Box sx={{ mr: 2 }}>
              <Logo />
            </Box>
            <Search />
            <Box sx={styles.BoxIcons}>
              <IconButton
                onClick={() => navigate('/')}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 5 }}>
                <PersonOutlineIcon fontSize="28px" />
              </IconButton>
              <IconButton
                onClick={() => navigate('/cart')}
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ ml: 5 }}>
                <Badge badgeContent={totalCount}  color="secondary" >
                  <LocalGroceryStoreOutlinedIcon fontSize="28px" />
                </Badge>
              </IconButton>
              <Typography> {totalPrice} ₽</Typography>
            </Box>
          </Box>
          <Box sx={styles.gender}>
            <Link to="/collection">
              <Typography sx={styles.link}>Мужское</Typography>
            </Link>
            <Link to="/collection">
              <Typography sx={styles.link}>Мужское</Typography>
            </Link>
          </Box>
        </Container>
      </AppBar>
    // </Box>
  );
};

export default Header;
