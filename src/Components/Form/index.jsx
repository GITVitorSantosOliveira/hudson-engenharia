import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

function Form() {
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [message,setMessage] = useState();


  const onSendEmail = (e) => {
    e.preventDefault();

    emailjs.send(import.meta.env.VITE_SERVICE_EMAIL_ID_API,import.meta.env.VITE_TEMPLATE_EMAIL_ID,{
      from_name: username,
      message: message,
      from_email: email,  
    },import.meta.env.VITE_PUBLIC_EMAIL_KEY)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <>
    <div className="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8 ">
  <div className="max-w-md w-full space-y-6">
    <div>
      <h2 className=" text-center text-3xl font-extrabold text-white">Entre em contato por email:</h2>
    </div>
    <form className="mt-8 space-y-6 2xl:space-y-16" onSubmit={onSendEmail}>
        <div className="rounded-[15px]">
          <label htmlFor="username" className="sr-only">Nome Completo</label>
          <input onChange={(e) => setUsername(e.target.value)} id="username" name="username" type="text"  required className="appearance-none rounded-none relative block w-full px-3 py-2 2xl:py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 2xl:text-lg" placeholder="Nome Completo"/>
        </div>

        <div className="rounded-[15px]">
          <label htmlFor="email-address" className="sr-only">Entre com um email válido</label>
          <input onChange={(e) => setEmail(e.target.value)} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 2xl:py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm 2xl:text-lg" placeholder="Entre com um email válido"/>
        </div>

        <div>
              <div className="mt-1">
                <textarea onChange={(e) => setMessage(e.target.value)} id="about" name="about" rows="3" className=" pl-4 pt-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm 2xl:text-lg border border-gray-300 rounded-md" placeholder="Escreva sua mensagem"></textarea>
              </div>
        </div>


      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm 2xl:text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  focus:ring-indigo-500">
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Form