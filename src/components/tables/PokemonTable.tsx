import { FC } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import Image from 'next/image'
import { IPokemon } from '@/types/pokemon'
import { useRouter } from 'next/navigation'

interface IPokemonTableProps {
  pokemons: IPokemon[]
}

const PokemonTable: FC<IPokemonTableProps> = ({ pokemons }) => {
  const router = useRouter()

  return (
    <Table className='max-w-xl overflow-hidden mx-auto'>
      <TableBody>
        {pokemons.map((pokemon) => {
          const urlParts = pokemon.url.split('/')
          const id = urlParts[urlParts.length - 2]

          return (
            <TableRow
              key={id}
              className='cursor-pointer w-full hover:bg-gray-100 dark:hover:bg-gray-800'
              onClick={() => router.push(`/pokemon/${id}`)}
            >
              <TableCell colSpan={3}>
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt='pokemon'
                  width={60}
                  height={60}
                  className='object-contain'
                />
              </TableCell>
              <TableCell className='font-medium text-base'>
                {pokemon.name}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className='font-semibold text-xl'>
            Total
          </TableCell>
          <TableCell className='font-semibold text-xl'>
            {pokemons.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default PokemonTable
