'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenuWithFade = () => setIsMenuOpen(false);

  return (
    <nav className='w-full bg-gradient-to-r from-main-color to-sec-color p-4 text-white fixed top-0 left-0 z-50'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='text-xl font-bold'
          onClick={closeMenuWithFade}
        >
          Mega Inox
        </Link>

        <div className='lg:hidden'>
          <button onClick={toggleMenu} aria-label='Toggle menu'>
            {isMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
        </div>

        <ul className='hidden lg:flex lg:space-x-6'>
          <li>
            <Link href='/' className='hover:underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/#sobre' className='hover:underline'>
              Quem Somos
            </Link>
          </li>
          <li>
            <Link href='/#contato' className='hover:underline'>
              Contato
            </Link>
          </li>
          <li>
            <Link href='/solutions' className='hover:underline'>
              Soluções
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <ul className='lg:hidden mt-4 flex flex-col space-y-2 text-center'>
          <li>
            <Link
              href='/'
              onClick={closeMenuWithFade}
              className='block py-2 hover:bg-white hover:text-main-color transition'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/#sobre'
              onClick={closeMenuWithFade}
              className='block py-2 hover:bg-white hover:text-main-color transition'
            >
              Quem Somos
            </Link>
          </li>
          <li>
            <Link
              href='/#contato'
              onClick={closeMenuWithFade}
              className='block py-2 hover:bg-white hover:text-main-color transition'
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              href='/solutions'
              onClick={closeMenuWithFade}
              className='block py-2 hover:bg-white hover:text-main-color transition'
            >
              Soluções
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
