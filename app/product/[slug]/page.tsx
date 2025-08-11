import { products } from '@/app/data/product';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <div>Product: {slug}</div>;
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  return {
    title: product?.title ?? 'Product Not Found',
    description: product?.description?.slice(0, 150),
  };
}
