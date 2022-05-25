import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import Button from '../../composables/Button';

const Description = () => {
  return (
    <Box sx={{ margin: '40px 0' }}>
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton sx={{ m: '15px 0' }}>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Описание" />
            <ArrowBackIosNewOutlinedIcon sx={{ transform: 'rotate(90deg)' }} />
          </ListItemButton>
        </ListItem>
        <Typography sx={{ textAlign: 'justify', p: '8px 18px' }}>
          Тут описание вашего товара, начните с самого интересного о вашем товаре, зацепите вашего
          покупателя. Пишите так, чтобы было полезно вашему будущему покупателю. Можно добавить
          материал который используется в вашем товаре (или состав вашего продукта). Добавьте
          инструкцию по использованию.
        </Typography>
        <ListItem disablePadding>
          <ListItemButton sx={{ m: '15px 0' }}>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Характеристики" />
            <ArrowBackIosNewOutlinedIcon sx={{ transform: 'rotate(90deg)' }} />
          </ListItemButton>
        </ListItem>
        <Grid container sx={{ p: '0 18px' }} spacing={3}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Состав</Typography>
            <Box
              sx={{
                flex: '1 0',
                borderBottom: '1px dotted #000',
                height: '1em',
                margin: ' 0 .4em',
              }}></Box>
            <Typography>Хлопок</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Состав</Typography>
            <Box
              sx={{
                flex: '1 0',
                borderBottom: '1px dotted #000',
                height: '1em',
                margin: ' 0 .4em',
              }}></Box>
            <Typography>Хлопок</Typography>
          </Grid>
        </Grid>
        <ListItem disablePadding>
          <ListItemButton sx={{ m: '15px 0' }}>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Отзывы" />
            <ArrowBackIosNewOutlinedIcon sx={{ transform: 'rotate(90deg)' }} />
          </ListItemButton>
        </ListItem>
        <Box sx={{ width: 250,p: '0 18px' }}>
          
          <Button>Написать отзыв</Button>
        </Box>
      </List>
    </Box>
  );
};

export default Description;
