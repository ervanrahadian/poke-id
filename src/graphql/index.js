import { gql } from "@apollo/client";

export const GET_TOTAL_POKEMONS_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
    }
  }
`;

export const GET_POKEMONS_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      name
      height
      weight
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      abilities {
        ability {
          name
        }
      }
      stats {
        stat {
          name
        }
        base_stat
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;
