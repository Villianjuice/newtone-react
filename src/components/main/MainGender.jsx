import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Jama from '../../assets/img/Jama.png';
import Erjan from '../../assets/img/Erjan.png';

const styles = {
  gender: {mb: '20px'}
}

const MainGender = () => {
  return (
    <Grid container spacing={2} sx={styles.gender}>
      <Grid item xs={6}>
        <Link to="/collection">
          <img src={Jama} alt="Jama" />
        </Link>
      </Grid>
      
      <Grid item xs={6} >
        <Link to="/collection">
          <img src={Erjan} alt="Erjan" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default MainGender;
