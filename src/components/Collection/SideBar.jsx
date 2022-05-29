import * as React from 'react';
import { Box, Drawer, List, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterCheckMarks from './FilterCheckMarks';

import Button from '../../composables/Button';
import { setCompound, setCountry, setSize } from '../../redux/filter/filterSlice';

const styles = {
  buttonFilter: {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
    p: '10px 15px',
    background: '#ededed',
    cursor: 'pointer',
  },
  drawer: {
    width: '400px',
    height: '100%',
    p: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

const [size, compound, country] = [
  {
    name: 'Размер',
    types: ['S', 'M', 'L', 'XL'],
  },
  {
    name: 'Состав',
    types: ['Хлопок', 'Кожа', 'Лён', 'Экохлопок', 'Трикотаж', 'Шерсть'],
  },
  {
    name: 'Страна',
    types: ['Турция', 'Испания', 'Италия', 'Португалия', 'Швейцария', 'Китай'],
  },
];

export default function SideBar() {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onSetSize = React.useCallback(
    (compounds) => {
      dispatch(setSize(compounds));
    },
    [dispatch],
  );
  const onSetCompound = React.useCallback(
    (compounds) => {
      dispatch(setCompound(compounds));
    },
    [dispatch],
  );
  const onSetCountry = React.useCallback(
    (compounds) => {
      dispatch(setCountry(compounds));
    },
    [dispatch],
  );

  const list = (anchor) => (
    <Box
      sx={styles.drawer}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <FilterCheckMarks onFilter={onSetSize} {...size} />
        <FilterCheckMarks onFilter={onSetCompound} {...compound} />
        <FilterCheckMarks onFilter={onSetCountry} {...country} />
      </List>
      <Button onClick={toggleDrawer('left', false)}>Применить</Button>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box sx={styles.buttonFilter} onClick={toggleDrawer('left', true)}>
          <Typography>Фильтры</Typography>
          <FilterAltOutlinedIcon />
        </Box>
        <Box sx={{ mt: 20 }}>
          <Drawer anchor="left" open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </Box>
      </React.Fragment>
    </div>
  );
}
