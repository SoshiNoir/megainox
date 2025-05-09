'use client';

import { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-gradient-to-r from-main-color to-sec-color text-white py-4 z-50'>
      <div className='container mx-auto flex justify-between items-center lg:justify-between relative'>
        <a href='#' className='text-2xl font-bold mx-auto lg:mx-0'>
          Mega Inox
        </a>
        <button
          className='lg:hidden text-3xl focus:outline-none'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <HiMenu />
        </button>

        <ul
          className={`absolute top-12 left-0 w-full bg-gradient-to-r from-main-color to-sec-color lg:bg-none px-4 py-2 transition-all duration-300 ease-in-out lg:static lg:w-auto lg:flex lg:flex-row lg:space-x-4 lg:p-0 z-50 text-center lg:text-left ${
            isMenuOpen
              ? 'flex flex-col opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-full lg:opacity-100 lg:pointer-events-auto lg:translate-y-0'
          }`}
        >
          <li>
            <a href='#home' className='block hover:underline py-2 px-4'>
              Home
            </a>
          </li>
          <li>
            <a href='#about' className='block hover:underline py-2 px-4'>
              Quem Somos
            </a>
          </li>
          <li>
            <a href='#contact' className='block hover:underline py-2 px-4'>
              Contato
            </a>
          </li>
        </ul>

        <div className='hidden lg:flex space-x-4'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaFacebook />
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaInstagram />
          </a>
          <a
            href='https://wa.me/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-300'
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </nav>
  );
}
