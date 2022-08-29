import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query getCharacters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        location {
          name
        }
        episode {
          name
        }
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
