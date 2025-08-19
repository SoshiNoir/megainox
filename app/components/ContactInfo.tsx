'use client';

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20 bg-ter-color text-white'>
      <div className='max-w-6xl mx-auto px-2 sm:px-4'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-10 md:mb-12 tracking-tight text-main-color'>
          Contatos
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start'>
          {/* Informações */}
          <div className='space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed'>
            {/* E-mail */}
            <a
              href='mailto:megainox@megainox.ind.br'
              className='flex items-start gap-2 sm:gap-3 px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-white/10 transition-colors'
            >
              <FaEnvelope className='text-main-color mt-1 text-lg sm:text-xl' />
              <div>
                <strong className='text-main-color font-semibold'>
                  E-mail:
                </strong>{' '}
                <span className='text-white'>megainox@megainox.ind.br</span>
              </div>
            </a>

            {/* WhatsApp Comercial */}
            <a
              href='https://wa.me/5516992749042'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-start gap-2 sm:gap-3 px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-white/10 transition-colors'
            >
              <FaWhatsapp className='text-main-color mt-1 text-lg sm:text-xl' />
              <div>
                <strong className='text-main-color font-semibold'>
                  WhatsApp Comercial:
                </strong>{' '}
                <span className='text-white'>(16) 99274-9042</span>
              </div>
            </a>

            {/* WhatsApp Projetos */}
            <a
              href='https://wa.me/5516992340056'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-start gap-2 sm:gap-3 px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-white/10 transition-colors'
            >
              <FaWhatsapp className='text-main-color mt-1 text-lg sm:text-xl' />
              <div>
                <strong className='text-main-color font-semibold'>
                  WhatsApp Projetos:
                </strong>{' '}
                <span className='text-white'>(16) 99234-0056</span>
              </div>
            </a>

            {/* Endereço */}
            <a
              href='https://www.google.com/maps?q=Travessa+dos+Tupinambás,+80,+Batatais,+SP'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-start gap-2 sm:gap-3 px-2 py-1 sm:px-3 sm:py-2 rounded-md hover:bg-white/10 transition-colors'
            >
              <FaMapMarkerAlt className='text-main-color mt-1 text-lg sm:text-xl' />
              <div>
                <strong className='text-main-color font-semibold'>
                  Endereço:
                </strong>{' '}
                <span className='text-white'>
                  Travessa dos Tupinambás, 80 – Bairro Castelo – Batatais/SP
                  <br />
                  Cep 14316-002
                  <br />
                  <span className='text-white/80'>
                    Referência: ao lado da antiga Estação de Batatais
                  </span>
                </span>
              </div>
            </a>
          </div>

          {/* Mapa */}
          <div className='w-full h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.5565399277407!2d-47.6052521247473!3d-20.889917280724855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9fa9c411d9c19%3A0x98855ae03bd49180!2sTv.%20dos%20Tupinamb%C3%A1s%2C%2080%20-%20Vila%20Maria%2C%20Batatais%20-%20SP%2C%2014300-000!5e0!3m2!1spt-PT!2sbr!4v1755609087637!5m2!1spt-PT!2sbr'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
