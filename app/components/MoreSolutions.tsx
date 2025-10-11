'use client';

import ProductCard from '@/app/components/ProductCard';
import { products } from '@/app/data/product';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Solution {
  title: string;
  subtitle?: string;
  link: string;
}

interface MoreSolutionsProps {
  solutions?: Solution[];
}

function shuffleArray<T>(array: T[] = []): T[] {
  return array
    .map((a) => [Math.random(), a] as [number, T])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

export default function MoreSolutions({ solutions = [] }: MoreSolutionsProps) {
  // Render deterministic list on the server; shuffle on the client to avoid
  // hydration mismatches caused by Math.random during SSR.
  const [shuffled, setShuffled] = useState<Solution[]>(solutions);

  useEffect(() => {
    setShuffled(shuffleArray(solutions));
  }, [solutions]);

  const validSolutions = shuffled
    .map((sol) => {
      const slug = sol.link?.replace(/^\/product\//, '').replace(/\/$/, '');
      const product = products.find((p) => p.slug === slug);
      if (!product) return null;

      return (
        <Link
          key={product.slug}
          href={sol.link}
          className='block w-full h-full transition-transform hover:scale-[1.02]'
        >
          <ProductCard
            images={product.gallery}
            title={product.title}
            description={product.description}
          />
        </Link>
      );
    })
    .filter(Boolean);

  return (
    <section className='bg-[#333333] py-12'>
      <div className='w-full px-0 md:px-4'>
        <h2 className='text-3xl font-bold text-white mb-8 text-center'>
          Veja Mais Soluções
        </h2>

        {validSolutions.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr'>
            {validSolutions}
          </div>
        ) : (
          <p className='text-center text-white/70'>
            Nenhuma solução relacionada foi encontrada.
          </p>
        )}
      </div>
    </section>
  );
}
