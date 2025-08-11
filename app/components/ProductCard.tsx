import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <div className='relative overflow-hidden rounded shadow group w-full h-72 flex items-center justify-center bg-gray-200'>
      <Image
        src={image}
        alt={title}
        className='object-cover transition-transform duration-300 group-hover:scale-110 rounded'
        fill
        sizes='(max-width: 768px) 100vw, 300px'
      />
      <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      <h3 className='absolute inset-0 flex items-center justify-center text-xl font-bold text-white text-center'>
        {title}
      </h3>
    </div>
  );
};

export default ProductCard;
