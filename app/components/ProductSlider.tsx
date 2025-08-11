'use client';

import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ProductSliderProps {
  images: string[];
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <div className='w-full h-64 md:h-96 rounded shadow bg-gray-100'>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className='h-full'
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div
              className='relative w-full h-64 md:h-96 cursor-pointer'
              onClick={() => setModalImg(src)}
            >
              <Image
                src={src}
                alt={`Imagem ${i + 1}`}
                fill
                className='object-cover rounded'
                priority={i === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {modalImg && (
        <div
          className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'
          onClick={() => setModalImg(null)}
        >
          <div
            className='relative w-full max-w-2xl h-[60vh] flex items-center justify-center'
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImg}
              alt='Imagem expandida'
              fill
              className='object-contain rounded-lg'
            />
            <button
              className='absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold shadow'
              onClick={() => setModalImg(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
