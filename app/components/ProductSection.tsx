'use client';

import Link from 'next/link';
import React from 'react';
import { products as allProducts } from '../data/product';
import ProductCard from './ProductCard';

const products = allProducts.slice(0, 3); // pega os 3 primeiros

const ProductsSection = () => {
  return (
    <section className='py-16 bg-ter-color text-foreground'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl font-extrabold text-center mb-12 text-main-color tracking-tight'>
          Nossos Produtos
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className='block h-full'
            >
              <ProductCard
                images={[product.gallery[0]]}
                title={product.title}
                description={product.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
