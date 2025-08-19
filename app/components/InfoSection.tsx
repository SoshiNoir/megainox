'use client';

import React from 'react';
import { FaBolt, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const infos = [
  {
    icon: <FaShieldAlt size={40} className='text-main-color' />,
    title: 'Qualidade',
    description:
      'Na Mega Inox, qualidade não é apenas um padrão — é um compromisso. Trabalhamos com aço inox certificado, processos de fabricação precisos e acabamento impecável em cada projeto. Cada produto passa por rigorosos critérios de inspeção, garantindo durabilidade, resistência e segurança para sua empresa.',
  },
  {
    icon: <FaBolt size={40} className='text-main-color' />,
    title: 'Eficiência',
    description:
      'Eficiência significa entregar exatamente o que o cliente precisa. Nosso processo é artesanal, feito com atenção aos detalhes e mãos experientes que garantem precisão em cada etapa. Mesmo sem grandes recursos tecnológicos, a dedicação da nossa equipe assegura soluções sob medida, prazos cumpridos e resultados que superam expectativas.',
  },
  {
    icon: <FaHandshake size={40} className='text-main-color' />,
    title: 'Confiança',
    description:
      'Mais de 25 anos de atuação fazem da Mega Inox uma parceira sólida e confiável. Construímos relacionamentos duradouros baseados na transparência, no respeito e na entrega de resultados consistentes. Cada cliente sabe que pode contar conosco em todas as etapas, do projeto à pós-venda.',
  },
];

const InfoSection = () => {
  return (
    <section className='py-16 bg-background text-foreground'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl font-extrabold text-center mb-12 text-main-color tracking-tight'>
          Por que escolher a Mega Inox?
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {infos.map((info, index) => (
            <div
              key={index}
              className='bg-ter-color rounded-xl shadow-lg p-8 text-left hover:shadow-xl transition-shadow duration-300'
            >
              <div className='mb-4 flex justify-start'>{info.icon}</div>
              <h3 className='text-2xl font-bold text-main-color mb-4'>
                {info.title}
              </h3>
              <p className='text-foreground/80 leading-relaxed'>
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
