'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={showNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='bg-gradient-to-r from-main-color to-sec-color text-white py-4 z-50 fixed top-0 left-0 w-full'
    >
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
            <a
              href='#home'
              className='block hover:scale-105 transition-transform py-2 px-4'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about'
              className='block hover:scale-105 transition-transform py-2 px-4'
            >
              Quem Somos
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='block hover:scale-105 transition-transform py-2 px-4'
            >
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
    </motion.nav>
  );
}
