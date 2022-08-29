import {
  Box,
  Typography,
  Modal,
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';
import styles from './style';
import { v4 as uuidv4 } from 'uuid';
import { CharacterCharacteristic } from '../CharacterCharacteristic';

export const ModalWindow = ({ handleClose, open, character }) => {
  const last = character.episode.length - 1;

  return (
    <Modal open={open} onClose={handleClose} sx={styles.modal}>
      <Card onClick={handleClose} variant='outlined' sx={styles.chatacterCard}>
        <CardActionArea sx={styles.styledArea}>
          <Box sx={styles.mainBox}>
            <Box sx={styles.headBox}>
              <Box sx={styles.mediaBox}>
                <CardMedia
                  sx={styles.cardMedia}
                  alt='image did not load'
                  component='img'
                  src={character.image}
                />
              </Box>

              <Box sx={styles.characterBox}>
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
              </Box>
            </Box>

            <Box sx={styles.episodeBox}>
              <Typography sx={styles.anotherText}>Episodes:</Typography>

              {character.episode.map((episode, index) => (
                <Typography key={uuidv4()} sx={styles.styledEpisodeText}>
                  {episode.name}
                  {last !== index && `,`}
                </Typography>
              ))}
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Modal>
  );
};

// debounce for type input +++
// clear ?type= if input is empty +++
// and 1 more +++  ???
// empty default filters +++

//       code +++
/*
<Typography sx={styles.anotherText}>Status: </Typography>

                <Typography sx={styles.styledText}>
                  {character.status}
                </Typography>

Make it as external component
*/
// Shrink FC +++
// rename Modal +++
// export from index +++

//       additional
// rename page and change favicon1 +++
// pagination +++
// makeStyles +/-
