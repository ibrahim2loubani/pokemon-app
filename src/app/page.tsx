'use client'

import { useEffect, useState } from 'react'
import { useGetAllPokemonQuery } from '@/queries/pokemon'
import { NextPage } from 'next'
import PokemonTable from '@/components/tables/PokemonTable'
import { Button } from '@/components/ui/button'
import { IPokemon } from '@/types/pokemon'
import { useToast } from '@/components/ui/use-toast'

const App: NextPage = (): JSX.Element => {
  const limit = 10
  const [offset, setOffset] = useState(0)
  const { toast } = useToast()
  const [pokemons, setPokemons] = useState<IPokemon[]>([])
  const { data, error, isLoading, isFetching } = useGetAllPokemonQuery({
    limit,
    offset,
  })

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Operation failed',
        description: 'Something went wrong!',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  useEffect(() => {
    if (data?.results) {
      setPokemons((prevPokemons) => [...prevPokemons, ...data.results])
    }
  }, [data])

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + limit)
  }

  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <div className='w-full max-w-xl bg-primary text-white text-xl font-bold h-14 flex items-center px-4'>
        PokeReact
      </div>
      {pokemons.length ? <PokemonTable pokemons={pokemons} /> : null}
      <Button
        onClick={loadMore}
        disabled={isLoading}
        isLoading={isFetching}
        className='mt-10 dark:text-white'
      >
        Load more
      </Button>
    </main>
  )
}

export default App
