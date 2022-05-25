import { Box, Typography } from '@mui/material';

import ButtonX from '../../composables/Button';

const styles = {
  bold: { fontWeight: 'bold', fontSize: '1.2rem' },
  box: {
    maxWidth: '390px',
    minHeight: '135px',
    backgroundColor: 'info.light',
    p: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  boxDesc: { display: 'flex', justifyContent: 'space-between' },
};

const Сheckout = () => {
  return (
    <Box sx={styles.box}>
      <Box sx={styles.boxDesc}>
        <Typography sx={styles.bold}>Итого:</Typography>
        <Typography sx={styles.bold}>17 630.00 ₽</Typography>
      </Box>
      <ButtonX >Оформить заказ</ButtonX>
    </Box>
  );
};

export default Сheckout;
