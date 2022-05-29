import { Box, Grid, Typography, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const styles = {
  items: { mb: '50px' },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    maxHeight: '140px',
  },
  button: {
    backgroundColor: 'success.light',
    maxWidth: '135px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnCount: { color: 'info.light' },
  btnClose: { color: 'success.light' },
  close: { display: 'flex', justifyContent: 'flex-end', width: '100%' },
  bold: { fontWeight: 'bold', fontSize: '1.2rem' },
  priceItem: { color: 'warning.light' },
};

const CartItem = ({ item }) => {
  return (
    <Grid container spacing={1} sx={styles.items}>
      <Grid item xs={2}>
        <img src={item.firstImage} style={{ maxHeight: '150px' }} alt="woman2" />
      </Grid>
      <Grid item xs={9.2} sx={styles.info}>
        <Typography sx={styles.bold}>{item.title}</Typography>
        <Typography>
          ({item.compound}, {item.country})
        </Typography>
        <Typography sx={styles.priceItem}>{item.price} ₽</Typography>
      </Grid>
      <Grid item xs={0.8}>
        <Box sx={styles.close}>
          <IconButton>
            <CloseIcon sx={styles.btnClose} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CartItem;
