import { Box } from '@mui/material';

const styles = {
  button: {
    fontSize: '18px',
    height: '50px',
    width: '100%',
    cursor: 'pointer',
    backgroundColor: 'success.light',
    color: 'primary.light',
    border: 'none'
    // '&:hover': {backgroundColor: 'primary.light'},
  },
  
}

const ButtonX = ({children}) => {
  return (
    <Box
      component="button"
      sx={styles.button}>
      {children}
    </Box>
  );
};

export default ButtonX;
