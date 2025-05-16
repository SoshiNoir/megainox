'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import InfoCard from './components/InfoCard';
import ProductCard from './components/ProductCard';

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
    }, 2000); // Adjusted interval to 2 seconds for smoother transitions

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='min-h-screen bg-gray-color'>
      {/* Hero Section */}
      <section className='relative py-20 lg:py-40 text-center '>
        <div className='px-4 md:px-0'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
          <div className='relative z-10 text-white'>
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
            <ProductCard image='/images/hero1.jpg' title='Produto 1' />
            <ProductCard image='/images/hero2.jpg' title='Produto 2' />
            <ProductCard image='/images/hero3.jpg' title='Produto 3' />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className='py-10 lg:py-20 text-center bg-sec-color'>
        <div className='lg:px-min-container'>
          <h2 className='text-4xl mb-4 text-white'>Diferencial</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            <InfoCard
              title='Qualidade'
              text='loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit.'
            />
            <InfoCard
              title='Eficiência'
              text='loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit.'
            />
            <InfoCard
              title='Confiança'
              text='loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit. loren ipsum dolor sit amet, consectetur adipiscing elit.'
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='lg:py-20 flex flex-col lg:flex-row items-center'
      >
        <div className='w-full lg:w-1/2 text-center lg:text-left lg:mb-8 lg:px-min-container'>
          <div className='bg-main-color p-6 rounded shadow-lg shadow-gray-500/50 hover:shadow-xl hover:shadow-gray-500/70 transition-shadow duration-300'>
            <h2 className='text-3xl font-bold mb-4 text-white'>Sobre Nós</h2>
            <p className='text-lg text-white'>
              Somos especialistas em equipamentos de inox, oferecendo soluções
              de alta qualidade para atender às suas necessidades. Somos
              especialistas em equipamentos de inox, oferecendo soluções de alta
              qualidade para atender às suas necessidades. Somos especialistas
              em equipamentos de inox, oferecendo soluções de alta qualidade
              para atender às suas necessidades.Somos especialistas em
              equipamentos de inox, oferecendo soluções de alta qualidade para
              atender às suas necessidades.Somos especialistas em equipamentos
              de inox, oferecendo soluções de alta qualidade para atender às
              suas necessidades.
            </p>
          </div>
        </div>
        <div className='lg:px-min-container w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <div className='bg-sec-color lg:p-3 rounded shadow-lg shadow-gray-500/50 hover:shadow-xl hover:shadow-gray-500/70 transition-shadow duration-300'>
            <Image
              src='/images/us.png'
              alt='Sobre Nós'
              className='rounded shadow-md'
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='lg:py-10 flex flex-col lg:flex-row items-start bg-sec-color lg:px-min-container'>
        {/* Left Side */}
        <div className='w-full lg:w-1/2 lg:mb-8 lg:px-min-container text-center'>
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
        </div>

        {/* Right Side */}
        <div className='w-full lg:w-1/2 lg:px-min-container'>
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
        </div>
      </section>
    </div>
  );
}
