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
          <div key={i} className='w-full rounded shadow'>
            <Image
              src={src}
              alt={`Imagem ${i + 1}`}
              width={1200}
              height={800}
              sizes='(min-width: 768px) 33vw, 50vw'
              className='w-full h-auto object-contain rounded'
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
