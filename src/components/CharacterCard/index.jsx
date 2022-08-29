import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ModalWindow } from '../';
import styles from './styles';
import { CharacterCharacteristic } from '../';

export const CharacterCard = ({ character }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const isEpisodes =
    character.episode.length > 1
      ? `and ${character.episode.length - 1} more...`
      : '';

  return (
    <>
      <ModalWindow
        handleClose={handleClose}
        open={open}
        character={character}
      />

      <Card onClick={handleOpen} variant='outlined' sx={styles.chatacterCard}>
        <CardActionArea sx={styles.styledArea}>
          <Box>
            <CardMedia
            sx={{width: '100%'}}
              alt='image did not load'
              component='img'
              src={character.image}
            />
            <Box sx={styles.contentBox}>
              <CharacterCharacteristic
                characteristicName={'Name'}
                value={character.name}
              />

              <CharacterCharacteristic
                characteristicName={'Status'}
                value={character.status}
              />

              <CharacterCharacteristic
                characteristicName={'Species'}
                value={character.species}
              />

              {character.type && (
                <CharacterCharacteristic
                  characteristicName={'Type'}
                  value={character.type}
                />
              )}

              <CharacterCharacteristic
                characteristicName={'Gender'}
                value={character.gender}
              />

              <CharacterCharacteristic
                characteristicName={'Location'}
                value={character.name}
              />

              <Box sx={styles.episodeBox}>
                <Typography sx={styles.anotherText}>Episode:</Typography>

                <Typography sx={styles.styledEpisodeText}>
                  {`${character.episode[0].name} ${isEpisodes}`}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};
