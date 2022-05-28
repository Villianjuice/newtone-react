import { Box } from '@mui/material';

const ButtonX = ({ children, onClick, secondary }) => {
  const styles = {
    primary: {
      fontSize: '15px',
      height: '35px',
      width: '100%',
      cursor: 'pointer',
      backgroundColor: 'success.light',
      color: 'primary.light',
      border: '1px solid #d0cfcf'
    },
    secondary: {
      fontSize: '15px',
      height: '35px',
      width: '100%',
      cursor: 'pointer',
      backgroundColor: '#fff',
      color: 'primary.main',
      border: '1px solid #d0cfcf'
    },
  };
  return (
    <Box onClick={onClick} component="button" sx={secondary ? styles.secondary : styles.primary}>
      {children}
    </Box>
  );
};

export default ButtonX;
