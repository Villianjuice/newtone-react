import React from 'react';
import { Box, Container } from '@mui/material';

import Title from '../components/Title';
import SelectNative from '../components/Collection/SelectNative';
import SideBar from '../components/Collection/SideBar';
import Products from '../components/Collection/Products';

const styles = {
  section: { m: '50px 0' },
  filter: { display: 'flex', justifyContent: 'space-between', maxWidth: '100%' },
};

const Collection = () => {
  return (
    <Box component="section" sx={styles.section}>
      <Container maxWidth="xl">
        <Title title="Мужчины" />
        <Box sx={styles.filter}>
          <SideBar />
          <SelectNative />
        </Box>
        <Products />
      </Container>
    </Box>
  );
};

export default Collection;
