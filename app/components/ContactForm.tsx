'use client';

import React from 'react';

const ContactForm = () => {
  return (
    <form className='space-y-6 text-foreground'>
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-foreground'
        >
          Nome
        </label>
        <input
          type='text'
          id='name'
          className='mt-2 block w-full bg-ter-color text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-color'
        />
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-foreground'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          className='mt-2 block w-full bg-ter-color text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-color'
        />
      </div>

      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-foreground'
        >
          Mensagem
        </label>
        <textarea
          id='message'
          rows={4}
          className='mt-2 block w-full bg-ter-color text-white border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main-color'
        />
      </div>

      <button
        type='submit'
        className='bg-main-color text-white px-6 py-2 rounded-md hover:bg-sec-color transition-colors'
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
