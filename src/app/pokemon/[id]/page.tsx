'use client'

import { FC } from 'react'
import SinglePokemon from '@/components/pages/SinglePokemon'

interface ISinglePokemonProps {
  params: {
    id: string
  }
}

const page: FC<ISinglePokemonProps> = ({ params }) => {
  return <SinglePokemon id={params.id} />
}

export default page
