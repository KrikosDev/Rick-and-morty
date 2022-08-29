import { Box, CircularProgress } from '@mui/material';
import styles from './styles';

export const Loader = () => (
  <Box sx={styles.mainBox}>
    <CircularProgress />
  </Box>
);
