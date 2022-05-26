import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const styles = {
  arrow: { transform: 'rotate(90deg)' },
  arrowActive:  { transform: 'rotate(-90deg)' }
}

const Select = ({children, icon, name}) => {
  const [visibleDesc, setVisibleDesc] = React.useState(false);

  const toogleVisibleDesc = () => {
    setVisibleDesc(!visibleDesc)
  };
  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton onClick={toogleVisibleDesc} sx={{ m: '15px 0' }}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={name} />
          <ArrowBackIosNewOutlinedIcon sx={!visibleDesc ? styles.arrow : styles.arrowActive} />
        </ListItemButton>
      </ListItem>
      {visibleDesc && children}
    </div>
  );
};

export default Select;
