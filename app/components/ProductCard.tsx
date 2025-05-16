import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title }) => {
  return (
    <div className='relative overflow-hidden rounded shadow group'>
      <Image
        src={image}
        alt={title}
        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
        width={300}
        height={300}
      />
      <div className='absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      <h3 className='absolute inset-0 flex items-center justify-center text-xl font-bold text-white'>
        {title}
      </h3>
    </div>
  );
};

export default ProductCard;
