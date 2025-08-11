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

export default function ProductPage({ params }: any) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
    return null;
  }

  const randomSolutions = getRandomProducts(slug, 3);

  return (
    <div className='bg-white min-h-screen'>
      <div className='pt-16'>
        <div className='max-w-5xl mx-auto px-4 py-10'>
          <div className='flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2'>
              <h1 className='text-4xl font-bold text-gray-900 mb-6'>
                {product.title}
              </h1>
              <p className='text-lg text-gray-700 leading-relaxed mb-8'>
                {product.description}
              </p>
            </div>
            <div className='md:w-1/2 flex items-center'>
              <ProductSlider images={product.gallery} />
            </div>
          </div>
        </div>
        <MoreSolutions solutions={randomSolutions} />
      </div>
    </div>
  );
}
