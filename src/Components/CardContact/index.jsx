import React from 'react'

function CardContact({icon,title,content}) {
  return (
    <>
      <div className="w-[150px] h-[150px] bg-white rounded mr-10 2xl:w-[200px] 2xl:h-[250px]
      ">
        <div className='flex flex-col items-center content-center py-3'>
        {icon}
        <span className="text-center font-bold mt-2">{title}</span>
        <a href={content} className=' break-all sm:text-[11px] sm:text-center 2xl:text-lg px-5 mt-2'>{content}</a>
        </div>
      </div>
    </>
  )
}

export default CardContact