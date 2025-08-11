interface ProductDescriptionProps {
  text: string;
}

export default function ProductDescription({ text }: ProductDescriptionProps) {
  return (
    <section className='max-w-5xl mx-auto px-4'>
      <p className='text-lg text-gray-700 leading-relaxed'>{text}</p>
    </section>
  );
}
