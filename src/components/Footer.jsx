import { Grid, Container, List, ListItem, Link, Divider, Box } from '@mui/material';

import { BsTelegram, BsYoutube, BsInstagram } from 'react-icons/bs';
import Group from '../assets/img/Group.svg';
import Visa from '../assets/img/Visa.svg';
import Mir from '../assets/img/mir-logo_1.svg';
import Logo from '../composables/Logo';

const styles = {
  AppBar: { padding: '40px 5px', bgcolor: 'primary.main' },
  adress: { fontFamily: 'PTRootUI', fontSize: '20px', color: 'primary.light' },
};

const Footer = () => {
  return (
    <Box sx={styles.AppBar} component="footer">
      {/* <AppBar position="static" > */}
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item md={4} xs={12}>
            <List>
              <ListItem disablePadding sx={{ mb: 2 }}>
                <Link sx={styles.adress} color="primary.light" href="tel:+7 800 555-10-61">
                  +7 800 555-10-61
                </Link>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: 'primary.light', m: '0 15px' }}
                />
                <Link sx={styles.adress} color="primary.light" href="tel:+7 495 649-83-14">
                  +7 495 649-83-14
                </Link>
              </ListItem>
              <ListItem sx={styles.adress} disablePadding>
                г. Москва, Новорязанская ул., 18, д. 11
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <Logo />
          </Grid>
          <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
            <List>
              <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}>
                <Link href="https://telegram.org/z/">
                  <BsTelegram color="#a09a9a" size={22} />
                </Link>
                <Link href="https://www.youtube.com/" sx={{ m: '0 15px' }}>
                  <BsYoutube color="#a09a9a" size={22} />
                </Link>
                <Link href="https://www.instagram.com/">
                  <BsInstagram color="#a09a9a" size={22} />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <img src={Group} alt="Group" />
                <img src={Visa} alt="Visa" style={{ margin: '0 15px' }} />
                <img src={Mir} alt="Mir" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      {/* </AppBar> */}
    </Box>
  );
};

export default Footer;
