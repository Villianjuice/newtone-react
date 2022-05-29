import React from 'react';
import { Box, Container } from '@mui/material';

const styles = {
  section: { m: '35px 0' },
};

const Section = ({ children }) => {
  return (
    <Box component="main" sx={styles.section}>
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};

export default Section;
