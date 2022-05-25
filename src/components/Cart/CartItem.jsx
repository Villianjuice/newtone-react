import { Box, Grid, Typography, IconButton } from '@mui/material';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import woman2 from '../../assets/img/woman2.jpg';

const styles = {
  items: { mb: '50px' },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    // height: '158px',
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

const CartItem = () => {
  return (
    <Grid container spacing={1.5} sx={styles.items}>
      <Grid item md={2}>
        <img style={{ maxWidth: '100px' }} src={woman2} alt="woman2" />
      </Grid>
      <Grid item md={8} sx={styles.info}>
        <Typography sx={styles.bold}>Повседневная хлопковая футболка</Typography>
        <Typography sx={styles.bold}>(M)</Typography>
        <Typography sx={styles.priceItem}>3 590.00 ₽</Typography>
        <Box sx={styles.button}>
          <IconButton>
            <RemoveIcon fontSize="small" sx={styles.btnCount} />
          </IconButton>
          <Typography sx={styles.btnCount}>2</Typography>
          <IconButton>
            <AddIcon fontSize="small" sx={styles.btnCount} />
          </IconButton>
        </Box>
      </Grid>
      <Grid item md={2} sx={styles.info}>
        <Box sx={styles.close}>
          <IconButton>
            <CloseIcon sx={styles.btnClose} />
          </IconButton>
        </Box>
        <Typography>7 180.00 ₽</Typography>
      </Grid>
    </Grid>
  );
};

export default CartItem;
