'use client';

import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductCardProps {
  images?: string[];
  title: string;
  description?: string;
  showContactButton?: boolean;
}

const truncate = (text: string, maxLength: number) => {
  const suffix = '...';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length).trimEnd() + suffix;
};

const ProductCard = ({
  images = [],
  title,
  description,
  showContactButton = false,
}: ProductCardProps) => {
  return (
    <div className='w-full h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-main-color flex flex-col min-h-0'>
      {/* Carrossel com altura fixa e overflow controlado */}
      <div className='relative w-full'>
        {images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoHeight
            className='w-full'
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className='relative w-full'>
                  <Image
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    width={1200}
                    height={800}
                    sizes='100vw'
                    className='w-full h-auto object-contain rounded-none'
                    priority={idx === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className='flex items-center justify-center h-full text-white text-sm italic'>
            Nenhuma imagem disponível
          </div>
        )}
      </div>

      {/* Texto com altura controlada e limite de linhas */}
      <div className='flex flex-col justify-between px-4 py-6 md:px-6 md:py-8 flex-grow'>
        <h3 className='text-white text-2xl font-semibold mb-2'>{title}</h3>
        {description && (
          <p className='text-white/80 text-sm leading-relaxed line-clamp-4'>
            {truncate(description, 180)}
          </p>
        )}
        {showContactButton && (
          <a
            href='https://wa.me/5516992340056'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Fale conosco via WhatsApp'
            className='mx-4 mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center flex items-center justify-center gap-2 transition-colors duration-300'
          >
            <FaWhatsapp size={20} aria-hidden='true' />
            <span>Fale conosco</span>
          </a>
        )}
      </div>

      {/* Bottom accent bar to visually unify the card */}
      <div className='w-full h-2 bg-main-color'></div>
    </div>
  );
};

export default ProductCard;
