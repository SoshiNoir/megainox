'use client';

import MoreSolutions from '@/app/components/MoreSolutions';
import ProductSlider from '@/app/components/ProductSlider';
import { products } from '@/app/data/product';
import { notFound } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

function getRandomProducts(currentSlug: string, count: number) {
  // Deterministic selection for server render: pick the first `count` products
  // excluding the current one. The client may reshuffle for randomness.
  const filtered = products.filter((p) => p.slug !== currentSlug);
  return filtered.slice(0, count).map((p) => ({
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
                {/* WhatsApp button is shown on the product detail page only */}
                <a
                  href='https://wa.me/5511999999999'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Fale conosco via WhatsApp'
                  className='mx-4 mb-4 mt-4 md:mt-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-center flex items-center justify-center gap-2 transition-colors duration-300'
                >
                  <FaWhatsapp size={20} aria-hidden='true' />
                  <span>Fale conosco</span>
                </a>
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
