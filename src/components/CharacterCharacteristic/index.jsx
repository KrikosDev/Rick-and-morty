import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles';

export const CharacterCharacteristic = ({ characteristicName, value }) => (
  <Box sx={styles.textBox}>
    <Typography sx={styles.anotherText}>{characteristicName}: </Typography>

    <Typography sx={styles.styledText}>{value}</Typography>
  </Box>
);
