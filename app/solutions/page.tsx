'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products } from '../data/product';

const AnimatedCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0.7 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: false, amount: 0.8 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function SolutionsPage() {
  return (
    <div className='min-h-screen bg-background text-foreground pt-16'>
      <section className='lg:px-min-container lg:py-20 text-center'>
        <h1 className='text-4xl font-extrabold mb-8 text-main-color tracking-tight'>
          Soluções
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product) => (
            <AnimatedCard key={product.slug}>
              <Link href={`/product/${product.slug}`} className='block h-full'>
                <ProductCard
                  images={[product.gallery[0]]}
                  title={product.title}
                  description={product.description}
                />
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}
