import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Slide,
  Dialog,
  Grid,
  List,
  ListItem,
  Divider,
  Typography,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import SwiperGallery from '../SwiperGallery/SwiperGallery';
import ButtonX from '../../composables/Button';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/cartSlice';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const styles = {
  title: { color: 'primary.dark', fontSize: 15, fontWeight: 'bold' },
  price: { color: 'primary.dark', fontSize: 16 },
  size: { color: 'primary.dark', fontSize: 16, fontWeight: 'bold' },
  compound: { color: 'secondary.main', fontSize: 12 },
  compoundDesc: { fontSize: 12 },
  marginItem: { m: '10px 0' },
  marginSpan: { m: '5px 0' },
  linkButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'start',
    height: '100%',
    mt: 1,
  },
  img: { cursor: 'pointer', width: '100%' },
};

export default function ImgDialog({ item }) {
  const itemsInCart = useSelector(({ cart }) => cart.itemsInCart);
  const dispatch = useDispatch();

  const isItemInCart = itemsInCart.some((itemInCart) => itemInCart.id === item.id);

  const handleClick = () => {
    if (isItemInCart) {
      dispatch(deleteItemFromCart(item.id));
    } else {
      dispatch(setItemInCart(item));
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img src={item.firstImage} alt="woman" style={styles.img} onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth='sm'
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <Grid container spacing={3} sx={{ p: '23px' }}>
          <Grid item sm={12} md={6}>
            <SwiperGallery swiperTopWidth="100%" images={item.images} />
          </Grid>
          <Grid item sm={12} md={6}>
            <List disablePadding sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <ListItem disablePadding sx={{ alignItems: 'flex-start' }}>
                <Typography sx={styles.title}>Повседневная хлопковая футболка</Typography>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </ListItem>
              <ListItem disablePadding sx={styles.marginItem}>
                <Typography sx={styles.price}>{item.price} ₽</Typography>
              </ListItem>
              <Divider />
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compound}>Состав</Typography>
              </ListItem>
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compoundDesc}>{item.compound}</Typography>
              </ListItem>
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compound}>Страна</Typography>
              </ListItem>
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compoundDesc}>{item.country}</Typography>
              </ListItem>
              <Divider />

              <ListItem disablePadding sx={styles.linkButton}>
                <ButtonX
                  onClick={handleClick}
                  secondary={isItemInCart ? true : false}
                  sx={styles.marginItem}>
                  {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
                </ButtonX>
                <Link to="/product" style={{ fontSize: '14px', color: 'black' }}>
                  Перейти в карточку товара →
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
