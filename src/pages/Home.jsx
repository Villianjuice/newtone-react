import React from 'react';
import { Link } from 'react-router-dom';

import MainCategory from '../components/main/MainCategory';
import MainGender from '../components/main/MainGender';
import Catalog from '../components/main/Catalog';
import Stores from '../components/main/Stores';
import Section from '../composables/Section';

const styles = {};

const Home = () => {
  return (
    <Section>
        <MainGender />
        <MainCategory />
        <Catalog gender="Женщины" />
        <Catalog gender="Мужчины" />
        <Stores />
    </Section>
  );
};

export default Home;
