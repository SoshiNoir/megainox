'use client';

import React from 'react';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 lg:py-20 bg-background text-foreground'>
      <div className='max-w-4xl mx-auto px-2 sm:px-4'>
        <div className='bg-ter-color rounded-xl shadow-lg p-0 sm:p-6 md:p-8'>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
