'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { products } from '../data/product';

const sortedProducts = [...products].sort((a, b) =>
  a.title.localeCompare(b.title)
);

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLLIElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(e.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='bg-gradient-to-r from-main-color to-sec-color text-white py-4 z-50 fixed top-0 left-0 w-full'
    >
      <div className='container mx-auto flex justify-between items-center lg:justify-between relative'>
        <Link href='/' className='text-2xl font-bold mx-auto lg:mx-0'>
          Mega Inox
        </Link>
        <button
          className='lg:hidden text-3xl focus:outline-none'
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
            setShowSolutionsMenu(false);
          }}
        >
          <HiMenu />
        </button>
        {/* Main menu (mobile & desktop) */}
        {!showSolutionsMenu ? (
          <ul
            className={`absolute top-12 left-0 w-full bg-gradient-to-r from-main-color to-sec-color lg:bg-none px-4 py-2 transition-all duration-300 ease-in-out lg:static lg:w-auto lg:flex lg:flex-row lg:space-x-4 lg:p-0 z-50 text-center lg:text-left ${
              isMenuOpen
                ? 'flex flex-col opacity-100 pointer-events-auto translate-y-0'
                : 'opacity-0 pointer-events-none -translate-y-full lg:opacity-100 lg:pointer-events-auto lg:translate-y-0'
            }`}
          >
            <li>
              <Link
                href='/'
                className='block hover:scale-105 transition-transform py-2 px-4'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/#about'
                className='block hover:scale-105 transition-transform py-2 px-4'
              >
                Quem Somos
              </Link>
            </li>
            <li>
              <Link
                href='/#contact'
                className='block hover:scale-105 transition-transform py-2 px-4'
              >
                Contato
              </Link>
            </li>
            {/* Soluções dropdown for desktop, button for mobile */}
            <li
              className='group lg:relative'
              ref={solutionsRef}
              onMouseEnter={() => setIsSolutionsOpen(true)}
            >
              <Link
                href='/solutions'
                className='block hover:scale-105 transition-transform py-2 px-4 focus:outline-none lg:cursor-pointer w-full'
                tabIndex={0}
                onClick={(e) => {
                  if (window.innerWidth < 1024) {
                    e.preventDefault();
                    setShowSolutionsMenu(true);
                  }
                }}
                onFocus={() =>
                  window.innerWidth >= 1024 && setIsSolutionsOpen(true)
                }
                onBlur={() =>
                  window.innerWidth >= 1024 && setIsSolutionsOpen(false)
                }
              >
                Soluções
              </Link>
              {/* Desktop dropdown */}
              <ul
                className={`hidden lg:absolute lg:left-0 lg:top-full lg:min-w-[200px] lg:bg-white lg:text-main-color lg:shadow-lg lg:rounded lg:mt-2 lg:z-50 lg:block ${
                  isSolutionsOpen
                    ? 'lg:opacity-100 lg:pointer-events-auto'
                    : 'lg:opacity-0 lg:pointer-events-none'
                } lg:transition-opacity lg:duration-200`}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                {sortedProducts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/product/${p.slug}`}
                      className='block px-4 py-2 hover:bg-main-color hover:text-white rounded transition-colors'
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ) : (
          // Solutions submenu for mobile
          <ul className='absolute top-12 left-0 w-full bg-gradient-to-r from-main-color to-sec-color px-4 py-2 flex flex-col z-50 text-center'>
            <li>
              <button
                className='block w-full text-left py-2 px-4 font-bold hover:scale-105 transition-transform mb-2'
                onClick={() => setShowSolutionsMenu(false)}
              >
                ← Voltar
              </button>
            </li>
            {sortedProducts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/product/${p.slug}`}
                  className='block px-4 py-2 hover:bg-main-color hover:text-white rounded transition-colors text-left'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {/* Social media icons (desktop) */}
        <div className='hidden lg:flex space-x-4'>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl hover:text-gray-300 transition-colors'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl hover:text-gray-300 transition-colors'
          >
            <FaInstagram />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=5511999998888'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl hover:text-gray-300 transition-colors'
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
