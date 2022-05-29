import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import mainCat1 from '../../assets/img/main-cat1.jpg';
import mainCat2 from '../../assets/img/main-cat2.jpg';
import mainCat3 from '../../assets/img/main-cat3.jpg';
import mainCat4 from '../../assets/img/main-cat4.jpg';
import { useDispatch } from 'react-redux';
import { setGender } from '../../redux/filter/filterSlice';

const categories = [
  { img: mainCat1, name: 'Вышевка' },
  { img: mainCat2, name: 'Старые коллекции' },
  { img: mainCat3, name: 'Средиземноморье' },
  { img: mainCat4, name: 'Спорт' },
];

const styles = {
  link: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    marginBottom: '10px',
  },
};

const MainCategory = () => {
  const dispatch = useDispatch();

  const changeGenderFemale = React.useCallback(() => {
    dispatch(setGender(0));
  }, [dispatch]);
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item xs={6} md={3} key={category.name}>
          <Link to="/collection" onClick={changeGenderFemale} style={styles.link}>
            <img src={category.img} alt={category.name} style={styles.img} />
            <Typography color="secondary">{category.name}</Typography>
            <Typography>→</Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCategory;
