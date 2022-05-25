import React from 'react';
import { Box } from '@mui/material';

import Title from '../composables/Title';
import SelectNative from '../components/Collection/SelectNative';
import SideBar from '../components/Collection/SideBar';
import Products from '../components/Collection/Products';
import Section from '../composables/Section';

const styles = {
  filter: { display: 'flex', justifyContent: 'space-between', maxWidth: '100%' },
};

const Collection = () => {
  return (
    <Section>
        <Title title="Мужчины" />
        <Box sx={styles.filter}>
          <SideBar />
          <SelectNative />
        </Box>
        <Products />
    </Section>
  );
};

export default Collection;
