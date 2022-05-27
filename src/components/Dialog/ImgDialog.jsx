import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Slide,
  Dialog,
  Grid,
  Box,
  List,
  ListItem,
  Divider,
  Typography,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

// import woman2 from '../../assets/img/woman2.jpg';

import SwiperGallery from '../SwiperGallery/SwiperGallery';
import ButtonX from '../../composables/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ImgDialog({ src }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  return (
    <div>
      <img
        src="https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27094020_01_D5.jpg?ts=1644587551286&imwidth=751&imdensity=2"
        alt="woman"
        style={styles.img}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="sm"
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <Grid container spacing={3} sx={{ p: '23px' }}>
          <Grid item sm={12} md={6}>
            <SwiperGallery swiperTopWidth="100%" />
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
                <Typography sx={styles.price}>990.00 ₽</Typography>
              </ListItem>
              <ListItem disablePadding sx={styles.marginItem}>
                <Box>
                  <Button
                    sx={{ minWidth: '14px', mr: 1 }}
                    size="small"
                    variant="outlined"
                    color="primary">
                    X
                  </Button>
                  <Button
                    sx={{ minWidth: '14px', mr: 1 }}
                    size="small"
                    variant="outlined"
                    color="primary">
                    X
                  </Button>
                  <Button
                    sx={{ minWidth: '14px', mr: 1 }}
                    size="small"
                    variant="outlined"
                    color="primary">
                    X
                  </Button>
                  <Button
                    sx={{ minWidth: '14px', mr: 1 }}
                    size="small"
                    variant="outlined"
                    color="primary">
                    X
                  </Button>
                </Box>
              </ListItem>
              <Divider />
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compound}>Состав</Typography>
              </ListItem>
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compoundDesc}>Хлопок</Typography>
              </ListItem>
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compound}>Страна</Typography>
              </ListItem>
              <ListItem disablePadding sx={styles.marginSpan}>
                <Typography sx={styles.compoundDesc}>Италия</Typography>
              </ListItem>
              <Divider />

              <ListItem disablePadding sx={styles.linkButton}>
                <ButtonX height="25px" fs="15px" sx={styles.marginItem}>
                  В корзину
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
