import { Box } from '@mui/material';

const ButtonX = ({children, fs, height}) => {
  const styles = {
    button: {
      fontSize: fs,
      height: height,
      width: '100%',
      cursor: 'pointer',
      backgroundColor: 'success.light',
      color: 'primary.light',
      border: 'none'
      // '&:hover': {backgroundColor: 'primary.light'},
    },
    
  }
  return (
    <Box
      component="button"
      sx={styles.button}>
      {children}
    </Box>
  );
};

export default ButtonX;
