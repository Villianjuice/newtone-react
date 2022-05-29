import React from 'react';

import { Box } from '@mui/material';

import Title from '../composables/Title';
import SelectNative from '../components/Collection/SelectNative';
import SideBar from '../components/Collection/SideBar';
import Items from '../components/Collection/Items';
import Section from '../composables/Section';
import { useSelector } from 'react-redux';

const styles = {
  filter: { display: 'flex', justifyContent: 'space-between', maxWidth: '100%' },
};

const Collection = () => {
  const genderItem = useSelector(({ filter }) => filter.gender);
  const [gender, setGender] = React.useState('')
  React.useEffect(() => {
    if (genderItem === 0) {
      setGender('Женское')
    } else {
      setGender('Мужское')
    }
  }, [genderItem])

  return (
    <Section>
      <Title title={gender} />
      <Box sx={styles.filter}>
        <SideBar />
        <SelectNative />
      </Box>
      <Items />
    </Section>
  );
};

export default Collection;
