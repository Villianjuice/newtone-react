import React from 'react';
import { Link } from 'react-router-dom';
import CatalogMan from '../components/main/CatalogMan';
import CatalogWoman from '../components/main/CatalogWoman';

import MainCategory from '../components/main/MainCategory';
import MainGender from '../components/main/MainGender';
import Stores from '../components/main/Stores';
import Section from '../composables/Section';

const styles = {};

const Home = () => {
  return (
    <Section>
        <MainGender />
        <MainCategory />
        <CatalogWoman gender="Женщины" />
        <CatalogMan gender="Мужчины" />
        <Stores />
    </Section>
  );
};

export default Home;
