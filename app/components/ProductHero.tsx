import Image from 'next/image';

interface ProductHeroProps {
  title: string;
  image: string;
}

export default function ProductHero({ title, image }: ProductHeroProps) {
  return (
    <section className='relative w-full h-[400px] md:h-[500px]'>
      <Image src={image} alt={title} fill className='object-cover' priority />
      <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
        <h1 className='text-white text-4xl md:text-6xl font-bold'>{title}</h1>
      </div>
    </section>
  );
}
