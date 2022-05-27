import { Button, Typography } from '@mui/material';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../modal';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 20px;
  width: 30%;
  color: rgb(31, 39, 92) p {
    justify-items: center;
  }
`;

interface catsProps {
  description?: string | undefined;
  image?: string | null;
  name?: string | undefined;
}

export const CatsCard: FC<catsProps> = (props) => {
  const url = props?.image;
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {url && (
        <>
          <Wrapper>
            <img src={url} alt='Кот куда-то ушёл' />
            <Typography fontSize={18} className='name'>
              {props?.name}
            </Typography>
            <Button onClick={handleClickOpen}>More info...</Button>
          </Wrapper>
          <Modal
            description={props?.description}
            name={props?.name}
            open={open}
            handleClose={handleClose}
          />
        </>
      )}
    </>
  );
};
