import React from 'react'

function CardServices({image,textImage}) {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-12 '>
      <img className="h-[150px] w-[230px] 2xl:w-[400px] 2xl:h-[300px]" src={image} alt="" />
      <span className='mt-2 py-4 hover:text-white font-semibold 2xl:text-2xl'>{textImage}</span>
    </div>
  )
}

export default CardServices