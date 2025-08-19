'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const images = ['/images/hero1.jpg', '/images/hero2.jpg', '/images/hero3.jpg'];

const HeroSection = () => {
  return (
    <section className='w-full h-[calc(100vh-80px)] bg-background relative'>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className='h-full z-0'
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className='relative h-[calc(100vh-80px)]'>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes='100vw'
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Texto e botão centralizados acima do carrossel */}
      <div className='absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-60'>
        <div className='text-center text-white px-4'>
          <h1 className='text-5xl md:text-6xl font-extrabold mb-4 text-main-color tracking-tight'>
            Mega Inox
          </h1>
          <p className='text-lg md:text-xl mb-6 text-foreground/90'>
            Equipamentos em inox com qualidade e eficiência
          </p>
          <Link
            href='/solutions'
            className='inline-block bg-main-color hover:bg-sec-color text-white font-semibold px-6 py-3 rounded-md transition-colors'
          >
            Conheça nossos equipamentos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
