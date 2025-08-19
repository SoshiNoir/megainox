'use client';

import MoreSolutions from '@/app/components/MoreSolutions';
import ProductSlider from '@/app/components/ProductSlider';
import { products } from '@/app/data/product';
import { notFound } from 'next/navigation';

function getRandomProducts(currentSlug: string, count: number) {
  const filtered = products.filter((p) => p.slug !== currentSlug);
  return filtered
    .map((p) => [Math.random(), p] as [number, typeof p])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1])
    .slice(0, count)
    .map((p) => ({
      title: p.title,
      subtitle: p.description?.slice(0, 60) + '...',
      link: `/product/${p.slug}`,
    }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
    return null;
  }

  const randomSolutions = getRandomProducts(slug, 3);

  return (
    <div className='bg-[#333333] min-h-screen text-white'>
      <div className='pt-16'>
        {/* Wrapper com largura total no mobile */}
        <div className='px-0 md:px-4 py-10'>
          <div className='w-full max-w-6xl mx-auto bg-qua-color rounded-xl shadow-md hover:shadow-xl transition-all duration-300'>
            {/* Layout responsivo: carrossel em cima no mobile, texto ao lado no desktop */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
              {/* Carrossel */}
              <div className='w-full h-64 md:h-[400px]'>
                <ProductSlider images={product.gallery} />
              </div>

              {/* Texto */}
              <div className='flex flex-col justify-center px-4 py-6 md:px-6 md:py-8'>
                <h1 className='text-4xl font-bold mb-6 text-white'>
                  {product.title}
                </h1>
                <p className='text-white/80 text-base leading-relaxed'>
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Soluções relacionadas */}
        <MoreSolutions solutions={randomSolutions} />
      </div>
    </div>
  );
}
