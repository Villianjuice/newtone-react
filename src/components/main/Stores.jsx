import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import firstStore from '../../assets/img/firstStore.jpg';
import secondStore from '../../assets/img/secondStore.jpg';

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold',
    fontSize: '27px',
    margin: '50px 0 !important',
  },
  storeInfo: {
    maxWidth: '400px',
    padding: '0 20px',
  },
  street: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '200',
    margin: '50px 0 25px 0',
  },
});
const bold = {
  color: 'primary.main',
  fontWeight: 'bold',
  fontSize: '20px',
};

const styles = {
  street: {
    color: 'secondary.main',
    fontWeight: 'bold',
    fontSize: '20px',
    cursor: 'pointer',
    '&:hover': {
      color: 'warning.light',
      textDecoration: 'underline',
    },
  },
  streetActive: {
    textDecoration: 'underline',
    ...bold
  },
  box: {
    m: '35px 0',
  },
  bold,
  normal: {
    color: 'primary.main',
    fontSize: '20px',
  },
  link: {
    textDecoration: 'none',
    ...bold
  },
  img: {
    height: '450px',
  },
};

const store = {
  a: {
    street: 'ул. Новорязанская, 18, стр. 11',
    tel: '+7 800 555-10-61',
    work: 'пн-пт 10:00-19:00',
    img: firstStore,
  },
  b: {
    street: 'ул. Орлова, 47, стр. 13',
    tel: '+7 495 649-83-14',
    work: 'пн-пт 10:00-20:00',
    img: secondStore,
  },
};

const Stores = () => {
  const classes = useStyles();
  const [switchStore, setSwitchStore] = React.useState(true);
  return (
    <section>
      <Typography variant="h4" align="center" component="h2" className={classes.title}>
        Наши Магазины в Москве
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={styles.img}
              src={switchStore ? store.a.img : store.b.img}
              alt="firstStore"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className={classes.storeInfo}>
            <Box className={classes.street}>
              <Typography
                onClick={() => setSwitchStore(true)}
                sx={switchStore ? styles.streetActive : styles.street}>
                М: Комсомольская
              </Typography>
              <Typography
                onClick={() => setSwitchStore(false)}
                sx={switchStore ? styles.street : styles.streetActive}>
                М: Бауманская
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <Typography sx={styles.bold}>Адрес:</Typography>
              <Typography sx={styles.normal}>
                {switchStore ? store.a.street : store.b.street}
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <Typography sx={styles.bold}>Контакты:</Typography>
              <Typography sx={styles.normal}>{switchStore ? store.a.tel : store.b.tel}</Typography>
              <Typography sx={styles.normal}>
                {switchStore ? store.a.work : store.b.work}
              </Typography>
            </Box>
            <Box sx={styles.box}>
              <Link
                sx={styles.link}
                href="https://yandex.ru/maps/org/inseyls_rus/1102332111/?from=tabbar&ll=37.660332%2C55.770355&mode=search&sll=37.660332%2C55.770355&source=serp_navig&sspn=0.015018%2C0.004623&text=%D0%90%D0%B4%D1%80%D0%B5%D1%81%3A%20%D0%9D%D0%BE%D0%B2%D0%BE%D1%80%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2018%2C%20%D1%81%D1%82%D1%80.%2011%20%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B%3A%208%20800%20555-10-61%20%D0%BF%D0%BD-%D0%BF%D1%82%2010%3A00%E2%80%9319%3A00&z=14">
                Посмотреть на карте →
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default Stores;
