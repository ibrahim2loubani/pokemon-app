import { FC, useEffect } from 'react'
import { useGetPokemonByIdQuery } from '@/queries/pokemon'
import { type } from 'os'
import { useToast } from '../ui/use-toast'
import PokemonCard from '../cards/PokemonCard'

interface ISinglePokemonProps {
  id: string
}

const SinglePokemon: FC<ISinglePokemonProps> = ({ id }) => {
  const { data, error, isLoading } = useGetPokemonByIdQuery(id)
  const { toast } = useToast()

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

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>No data</div>
  }

  return (
    <div className='max-w-md mx-auto'>
      <PokemonCard
        name={data.name}
        imageUrl={data.sprites.front_default}
        id={data.id}
        height={data.height}
        weight={data.weight}
        types={data.types.map((type: any) => type.type.name)}
      />
      {/* <h1>{data.name}</h1>
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Types: {data.types.map((type: any) => type.type.name).join(', ')}</p> */}
    </div>
  )
}

export default SinglePokemon
