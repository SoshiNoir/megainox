import { products } from '@/app/data/product';

// export default function ProductPage({ params }: { params: { slug: string } }) {
//   return <div>Product: {params.slug}</div>;
// }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  return {
    title: product?.title ?? 'Product Not Found',
    description: product?.description?.slice(0, 150),
  };
}
