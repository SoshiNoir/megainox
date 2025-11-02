'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const AboutSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='py-16 bg-ter-color text-white'>
      <div className='max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center'>
        <div>
          <h2 className='text-4xl font-extrabold mb-6 text-main-color tracking-tight'>
            Sobre a Mega Inox
          </h2>
          <p className='text-foreground/80 mb-4 leading-relaxed'>
            Com mais de 10 anos de experiência, a Mega Inox é referência em
            soluções sob medida em aço inox. Atendemos projetos residenciais,
            comerciais e industriais com excelência e compromisso.
          </p>
          <p className='text-foreground/80 leading-relaxed'>
            Nosso diferencial está na personalização, na qualidade dos materiais
            e no cuidado com cada detalhe. Seja para corrimões, portões, grades
            ou estruturas especiais, entregamos inovação com acabamento
            impecável.
          </p>
        </div>

        {/* Imagem clicável */}
        <div className='w-full cursor-pointer' onClick={() => setIsOpen(true)}>
          <Image
            src='/images/sobre.png'
            alt='Equipe da Mega Inox trabalhando'
            width={1600}
            height={900}
            sizes='100vw'
            className='w-full h-auto object-contain rounded-lg shadow-lg'
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
          onClick={() => setIsOpen(false)}
        >
          <div className='relative w-full max-w-4xl h-[80vh]'>
            <Image
              src='/images/sobre.png'
              alt='Equipe da Mega Inox trabalhando'
              layout='fill'
              objectFit='contain'
              className='rounded-lg'
            />
            <button
              className='absolute top-4 right-4 text-white text-2xl font-bold'
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
