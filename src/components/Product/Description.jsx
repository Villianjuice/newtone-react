import React from 'react';
import { Box, List, Typography, Grid } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';

import Button from '../../composables/Button';
import Select from './Select';

const Description = ({ desc, compound, country }) => {
  return (
    <Box sx={{ margin: '40px 0' }}>
      <List disablePadding>
        <Select name="Описание" icon={<InfoOutlinedIcon />}>
          <Typography sx={{ textAlign: 'justify', p: '15px 18px' }}>{desc}</Typography>
        </Select>
        <Select name="Характеристики" icon={<TuneIcon />}>
          <Grid container sx={{ p: '15px 18px' }} spacing={3}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>Состав</Typography>
              <Box
                sx={{
                  flex: '1 0',
                  borderBottom: '1px dotted #000',
                  height: '1em',
                  margin: ' 0 .4em',
                }}></Box>
              <Typography>{compound}</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>Страна</Typography>
              <Box
                sx={{
                  flex: '1 0',
                  borderBottom: '1px dotted #000',
                  height: '1em',
                  margin: ' 0 .4em',
                }}></Box>
              <Typography>{country}</Typography>
            </Grid>
          </Grid>
        </Select>
        <Select name="Отзывы" icon={<ForumOutlinedIcon />}>
          <Box sx={{ p: '15px 18px' }}>
            <Typography>Отзывов еще никто не оставлял</Typography>
            <Box sx={{ width: 250, m: '15px 0' }}>
              <Button>Написать отзыв</Button>
            </Box>
          </Box>
        </Select>
      </List>
    </Box>
  );
};

export default Description;
