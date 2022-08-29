import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../../graphql/queries/getCharacters';
import { CharacterCard } from '../';
import { Box, Pagination } from '@mui/material';
import styles from './styles';
import { Filters } from '../';
import { Loader } from '../';
import { useFilterQuery } from '../../hooks/useFilterQuery';
import { rickAndMorty } from '../../images/index';

export const Home = () => {
  const [filter, сhangeFilter, сlearFilter] = useFilterQuery();
  const [currentPage, setCurrentPage] = useState();

  const { data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: Number(filter.page),
      filter: {
        status: filter?.status,
        species: filter?.species,
        gender: filter?.gender,
        type: filter?.type,
      },
    },
  });

  const [characters, setCharacters] = useState();

  useEffect(() => {
    setCharacters(data?.characters);
    !filter.page && сhangeFilter('page', 1);
  }, [data]);

  useEffect(() => {
    setCurrentPage(Number(filter.page));
  }, [filter.page]);

  return (
    <Box sx={styles.mainBox}>
      <Box style={styles.headerBox}>
        <Box sx={styles.imageBox}>
          <img width='100%' src={rickAndMorty} alt='Image did not load' />
        </Box>

        <Filters
          filter={filter}
          сhangeFilter={сhangeFilter}
          сlearFilter={сlearFilter}
        />
      </Box>

      {!data?.characters?.results && <Loader />}

      {!!characters?.results?.length && (
        <>
          <Box sx={styles.characterBox}>
            {characters.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </Box>

          <Box sx={styles.footer}>
            <Pagination
              shape='rounded'
              count={characters?.info?.pages}
              color='primary'
              page={currentPage}
              size='small'
              onChange={(_, value) => {
                сhangeFilter('page', value);
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};
