import { FC } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import Image from 'next/image'

interface IPokemonCardProps {
  name: string
  imageUrl: string
  id: string
  height: number
  weight: number
  types: string[]
}

const PokemonCard: FC<IPokemonCardProps> = ({
  name,
  imageUrl,
  id,
  height,
  weight,
  types,
}) => {
  const details = [
    { key: 'Name', value: name },
    { key: 'Height', value: height },
    { key: 'Weight', value: weight },
    { key: 'Types', value: types },
  ]

  return (
    <Card>
      <CardHeader className='p-0'>
        <CardTitle className='capitalize font-bold text-xl bg-primary text-white p-2'>
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex justify-center items-center'>
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          priority
          className='object-contain'
        />
      </CardContent>
      <CardFooter className='px-0 flex flex-col'>
        {details.map((detail) => (
          <div
            key={detail.key}
            className='w-full flex items-center justify-between px-8 h-14 border-y'
          >
            <span>{detail.key}</span>
            <span>
              {detail.key === 'Types' && Array.isArray(detail.value)
                ? [...detail.value]
                    .reverse()
                    .map((type, index) => <div key={index}>{type}</div>)
                : detail.value}
            </span>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}

export default PokemonCard
