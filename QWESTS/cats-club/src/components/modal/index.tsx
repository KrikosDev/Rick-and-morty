import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

interface modalProps {
  description?: string;
  handleClose: () => void;
  open: boolean;
  name: string | undefined;
}

export const Modal: FC<modalProps> = ({
  handleClose,
  open,
  description,
  name,
}) => {
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{`Here's what we can tell you about ${name}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>It was very interesting!</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
