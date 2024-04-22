import Image from 'next/image'
import { FC } from 'react'
import { ThemeSwitcher } from '../theme/ThemeSwitch'
import Link from 'next/link'

interface INavbarProps {}

const Navbar: FC<INavbarProps> = ({}) => {
  return (
    <nav className='fixed top-0 left-0 w-full flex items-center justify-between px-10 py-2 h-20 bg-background z-10'>
      <Link className='flex items-center gap-6' href={'/'}>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={50}
          height={50}
          priority
          className='object-contain'
        />
        <span className='text-xl font-semibold font-sans'>Pokemon</span>
      </Link>
      <ThemeSwitcher />
    </nav>
  )
}

export default Navbar
