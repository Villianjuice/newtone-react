import { Typography } from '@mui/material';

const styles = {
  title: {
    m: '20px 0',
    fontWeight: 'bold',
  }
};

const Title = ({title}) => {
  return (
    <Typography variant="h5" sx={styles.title}>
      {title}
    </Typography>
  );
};

export default Title;
