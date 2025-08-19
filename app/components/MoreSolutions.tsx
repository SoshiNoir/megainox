import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/product';

interface Solution {
  title: string;
  subtitle: string;
  link: string;
}

interface MoreSolutionsProps {
  solutions: Solution[];
}

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((a) => [Math.random(), a] as [number, T])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

export default function MoreSolutions({ solutions }: MoreSolutionsProps) {
  const shuffled = shuffleArray(solutions);

  return (
    <section className='bg-[#333333] py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-2xl font-semibold text-white mb-6 text-center'>
          Veja Mais Soluções
        </h2>
        <div className='grid md:grid-cols-3 gap-6'>
          {shuffled.map((sol, i) => {
            const slug = sol.link.split('/').pop();
            const product = products.find((p) => p.slug === slug);
            const image = product?.gallery?.[0];
            return (
              <Link key={i} href={sol.link} className='block h-full'>
                <div className='bg-[#444444] p-4 rounded-lg border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col items-center group cursor-pointer h-full transition-transform duration-300 hover:scale-105'>
                  {image && (
                    <div className='relative w-full h-72 md:h-64 mb-3 overflow-hidden rounded'>
                      <Image
                        src={image}
                        alt={sol.title}
                        fill
                        className='object-cover rounded transition-transform duration-300 group-hover:scale-110'
                      />
                    </div>
                  )}
                  <h3 className='font-bold text-white text-lg text-center'>
                    {sol.title}
                  </h3>
                  <p className='text-gray-300 mb-3 text-center'>
                    {sol.subtitle}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
