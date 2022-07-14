import React from 'react'
import { Link } from 'react-router-dom'

function CardHome({image,textImage}) {
  return (
    <div className='flex flex-col align-center justify-center text-center'>
      <img className="h-[150px] w-[230px] 2xl:w-[400px] 2xl:h-[300px] " src={image} alt="" />
      <span className='mt-2 font-semibold 2xl:text-2xl'>{textImage}</span>
     

        <div className="flex space-x-2 justify-center mt-2">
            <Link  to="/services" className="inline-block px-6 py-2.5 bg-yellow-400 text-white font-medium sm:text-xs 2xl:text-lg  leading-tight
            uppercase rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none
              focus:ring-0 active:bg-yellow-600 active:shadow-lg transition duration-150 ease-in-out">Saber Mais</Link>
        </div>  
    </div>
  )
}

export default CardHome