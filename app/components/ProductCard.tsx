'use client';

import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductCardProps {
  images?: string[];
  title: string;
  description?: string;
}

const truncate = (text: string, maxLength: number) => {
  const suffix = '...';
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length).trimEnd() + suffix;
};

const ProductCard = ({ images = [], title, description }: ProductCardProps) => {
  return (
    <div className='w-full h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-main-color flex flex-col min-h-0'>
      {/* Carrossel com altura fixa e overflow controlado */}
      <div className='relative w-full h-48 md:h-64 overflow-hidden'>
        {images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className='w-full h-full'
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className='relative w-full h-48 md:h-64 overflow-hidden'>
                  <Image
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    fill
                    sizes='(max-width: 768px) 100vw, 100vw'
                    style={{ objectFit: 'cover' }}
                    className='rounded-none'
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
      </div>
    </div>
  );
};

export default ProductCard;
