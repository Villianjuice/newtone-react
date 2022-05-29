import React from 'react';
import CatalogMan from '../components/main/CatalogMan';
import CatalogWoman from '../components/main/CatalogWoman';

import MainCategory from '../components/main/MainCategory';
import MainGender from '../components/main/MainGender';
import Stores from '../components/main/Stores';
import Section from '../composables/Section';


const Home = () => {
  return (
    <Section>
        <MainGender />
        <MainCategory />
        <CatalogWoman gender="Женщины" />
        <CatalogMan newItems gender="Мужчины" />
        <Stores />
    </Section>
  );
};

export default Home;
