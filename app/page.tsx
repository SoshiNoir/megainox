'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import InfoCard from './components/InfoCard';
import ProductCard from './components/ProductCard';
import { products as allProducts } from './data/product';

const AnimatedCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0.7 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: false, amount: 0.8 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const products = allProducts.slice(0, 3);

const infoCards = [
  {
    title: 'Qualidade',
    text: 'loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Eficiência',
    text: 'loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Confiança',
    text: 'loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function Home() {
  const images = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className='min-h-screen bg-gray-color'>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className='relative pt-16 py-20 lg:py-40 text-center z-10 min-h-[40vh] md:min-h-[50vh] flex items-center justify-center'
      >
        <div className='px-4 md:px-0 w-full'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
          <div className='relative z-10 text-white flex flex-col items-center justify-center'>
            <h1 className='text-5xl font-bold mb-4 text-white'>Mega Inox</h1>
            <p className='text-lg text-white mb-6'>
              Equipamentos em inox com qualidade e eficiência
            </p>
            <button className='bg-sec-color text-white px-6 py-2 rounded'>
              Conheça nossos equipamentos
            </button>
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className='lg:px-min-container lg:py-20 text-center'>
        <div className=' hover:shadow-gray-500/70 transition-shadow duration-300'>
          <h2 className='text-4xl mt-4 mb-5 text-white'>Nossos Produtos</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-8'>
            {products.map((product) => (
              <AnimatedCard key={product.slug}>
                <ProductCard image={product.gallery[0]} title={product.title} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className='py-10 lg:py-20 text-center bg-sec-color'>
        <div className='lg:px-min-container'>
          <h2 className='text-4xl mb-4 text-white'>Diferencial</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {infoCards.map((card) => (
              <AnimatedCard key={card.title}>
                <InfoCard title={card.title} text={card.text} />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id='about'
        className='lg:py-20 flex flex-col lg:flex-row items-center'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className='w-full lg:w-1/2 text-center lg:text-left lg:mb-8 lg:px-min-container'>
          <AnimatedCard>
            <div className='bg-main-color p-6 rounded shadow-lg shadow-gray-500/50 hover:shadow-xl hover:shadow-gray-500/70 transition-shadow duration-300'>
              <h2 className='text-3xl font-bold mb-4 text-white'>Sobre Nós</h2>
              <p className='text-lg text-white'>
                Somos especialistas em equipamentos de inox, oferecendo soluções
                de alta qualidade para atender às suas necessidades. Somos
                especialistas em equipamentos de inox, oferecendo soluções de
                alta qualidade para atender às suas necessidades. Somos
                especialistas em equipamentos de inox, oferecendo soluções de
                alta qualidade para atender às suas necessidades.Somos
                especialistas em equipamentos de inox, oferecendo soluções de
                alta qualidade para atender às suas necessidades.Somos
                especialistas em equipamentos de inox, oferecendo soluções de
                alta qualidade para atender às suas necessidades.
              </p>
            </div>
          </AnimatedCard>
        </div>
        <div className='lg:px-min-container w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <AnimatedCard>
            <div className='bg-sec-color lg:p-3 rounded shadow-lg shadow-gray-500/50 hover:shadow-xl hover:shadow-gray-500/70 transition-shadow duration-300'>
              <Image
                src='/images/us.png'
                alt='Sobre Nós'
                className='rounded shadow-md'
                width={500}
                height={500}
              />
            </div>
          </AnimatedCard>
        </div>
      </motion.section>

      {/* Contact Section */}
      <section
        id='contact'
        className='lg:py-10 flex flex-col lg:flex-row items-start bg-sec-color lg:px-min-container'
      >
        {/* Left Side */}
        <div className='w-full lg:w-1/2 lg:mb-8 lg:px-min-container text-center'>
          <AnimatedCard>
            <div className='bg-main-color p-6 rounded lg:shadow-lg shadow-gray-500/50 hover:shadow-xl hover:shadow-gray-500/70 transition-shadow duration-300'>
              <h2 className='text-3xl font-bold mb-4 text-white'>Contato</h2>
              <p className='flex items-center text-lg text-white mb-4'>
                <FaEnvelope className='text-white mr-2' /> email@megainox.com
              </p>
              <p className='flex items-center text-lg text-white mb-4'>
                <FaPhone className='text-white mr-2' /> +55 11 99999-9999
              </p>
              <p className='flex items-center text-lg text-white mb-4'>
                <FaMapMarkerAlt className='text-white mr-2' /> Rua Exemplo, 123,
                São Paulo, SP
              </p>
              <div className='mt-6'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627977975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b1c1e3e0e!2sExample%20Location!5e0!3m2!1sen!2sbr!4v1683657600000!5m2!1sen!2sbr'
                  width='100%'
                  height='250'
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading='lazy'
                  title='Google Maps'
                ></iframe>
              </div>
            </div>
          </AnimatedCard>
        </div>
        {/* Right Side */}
        <div className='w-full lg:w-1/2 lg:px-min-container'>
          <AnimatedCard>
            <div className='lg:bg-main-color p-6 rounded shadow-lg shadow-gray-500/50 hover:shadow-xl hover:shadow-gray-500/70 transition-shadow duration-300'>
              <h2 className='text-3xl font-bold mb-4 text-white text-center'>
                Escreva sua mensagem
              </h2>
              <form className='space-y-4'>
                <div className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4'>
                  <input
                    type='text'
                    placeholder='Nome'
                    className='w-full lg:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main-color'
                  />
                  <input
                    type='text'
                    placeholder='Telefone'
                    className='w-full lg:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main-color'
                  />
                </div>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main-color'
                />
                <input
                  type='text'
                  placeholder='Empresa'
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main-color'
                />
                <select className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main-color'>
                  <option>Opção 1</option>
                  <option>Opção 2</option>
                  <option>Opção 3</option>
                  <option>Opção 4</option>
                </select>
                <textarea
                  placeholder='Mensagem'
                  className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main-color'
                  rows={4}
                ></textarea>
                <button
                  type='submit'
                  className='w-full lg:bg-sec-color bg-main-color text-white py-2 rounded hover:bg-gray-700 transition-colors'
                >
                  Enviar
                </button>
              </form>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
