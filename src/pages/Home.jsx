import { Container, Grid, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import MainCategory from '../components/main/MainCategory';
import MainGender from '../components/main/MainGender';
import Catalog from '../components/main/Catalog';
import Stores from '../components/main/Stores';

const styles = {};

const Home = () => {
  return (
    <main>
      <Container maxWidth="xl">
        <MainGender />
        <MainCategory />
        <Catalog gender="Женщины" />
        <Catalog gender="Мужчины" />
        <Stores />
      </Container>
    </main>
  );
};

export default Home;
