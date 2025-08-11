import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <section className='max-w-6xl mx-auto px-4'>
      <h2 className='text-2xl font-semibold mb-4'>Galeria de Imagens</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {images.map((src, i) => (
          <div key={i} className='relative w-full h-48 rounded shadow'>
            <Image
              src={src}
              alt={`Imagem ${i + 1}`}
              fill
              className='object-cover rounded'
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
