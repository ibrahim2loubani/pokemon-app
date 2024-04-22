import { GetAllPokemonArg } from '@/types/pokemon'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: ({ limit = 20, offset = 0 }: GetAllPokemonArg = {}) =>
        `pokemon?limit=${limit}&offset=${offset}`,
    }),
    getPokemonById: builder.query({
      query: (id: string | number) => `pokemon/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetAllPokemonQuery, useGetPokemonByIdQuery } = pokemonApi
