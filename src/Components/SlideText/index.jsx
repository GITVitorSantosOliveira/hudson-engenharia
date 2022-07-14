import React from 'react'
import { Link } from 'react-router-dom'
function SlideText() {
  return (

    <>
    
    {/* <div className="absolute w-full transform -translate-y-1/2 px-3
            flex justify-between items-center
          ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 cursor-pointer  text-white opacity-20 relative mb-[-2.5rem] " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 cursor-pointer text-white opacity-20 relative mb-[-2.5rem] " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>

    </div> */}

    <div className="relative flex flex-col px-5 items-center justify-center
            text-center
          ">
              <span className="mb-5 text-white font-weight-bold">SEUS PROJETOS COMEÇAM AQUI!!</span>
              <span className="text-white font-weight-bold">Com anos de experiência e excelência nos diversos trabalhos.</span>
              <span className="text-white font-weight-bold">Podemos fazer seus projetos virarem realidade.</span>
               <Link to="/" className="relative inline-flex items-center px-12 py-2.5 mt-2 overflow-hidden text-sm font-medium
                text-white border-2 border-yellow-400 rounded-full hover:text-white group">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-400 opacity-100 group-hover:h-full top-1/2
                  group-hover:top-0 duration-400 ease">
                  </span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300
                   transform translate-x-full group-hover:translate-x-0 ease">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                       strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                        </path>
                        </svg>
                  </span>
                  <span className="relative">CONHEÇA NOSSOS SERVIÇOS</span>
              </Link>
            </div>
    </>
  )
}

export default SlideText