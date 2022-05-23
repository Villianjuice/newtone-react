import React from 'react';
import { Badge, IconButton } from '@mui/material';

const IconButtonHead = ({ children }) => {
  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ ml: 5 }}>
      <Badge color="secondary" variant="dot">
        {children}
      </Badge>
    </IconButton>
  );
};

export default IconButtonHead;
