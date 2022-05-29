import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Jama from '../../assets/img/Jama.png';
import Erjan from '../../assets/img/Erjan.png';
import { useDispatch } from 'react-redux';
import { setGender } from '../../redux/filter/filterSlice';

const styles = {
  gender: { mb: '20px' },
};

const MainGender = () => {
  const dispatch = useDispatch();

  const changeGenderFemale = React.useCallback(() => {
    dispatch(setGender(0));
  }, [dispatch]);
  const changeGenderMale = React.useCallback(() => {
    dispatch(setGender(1));
  }, [dispatch]);
  return (
    <Grid container spacing={2} sx={styles.gender}>
      <Grid item xs={6} md={6}>
        <Link to="/collection" onClick={changeGenderFemale} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={Jama} alt="Jama" />
        </Link>
      </Grid>

      <Grid item xs={6} md={6}>
        <Link to="/collection" onClick={changeGenderMale} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={Erjan} alt="Erjan" />
        </Link>
      </Grid>
    </Grid>
  );
};

export default MainGender;
