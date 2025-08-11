export default function ContactForm() {
  return (
    <section className='max-w-4xl mx-auto px-4 py-10'>
      <h2 className='text-2xl font-semibold mb-6'>Entre em Contato</h2>
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <input type='text' placeholder='Nome' className='border p-2 rounded' />
        <input
          type='text'
          placeholder='Telefone'
          className='border p-2 rounded'
        />
        <input
          type='email'
          placeholder='E-mail'
          className='border p-2 rounded md:col-span-2'
        />
        <input
          type='text'
          placeholder='Empresa'
          className='border p-2 rounded md:col-span-2'
        />
        <textarea
          placeholder='Mensagem'
          rows={4}
          className='border p-2 rounded md:col-span-2'
        />
        <button className='bg-blue-600 text-white py-2 rounded md:col-span-2 hover:bg-blue-700 transition'>
          ENVIAR MENSAGEM
        </button>
      </form>
    </section>
  );
}
