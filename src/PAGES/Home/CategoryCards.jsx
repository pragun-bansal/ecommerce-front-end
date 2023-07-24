import React from 'react'

const CategoryCards = ({name,url}) => {
  return (
    <div class="z-[2] hover:opacity-[60%] w-[95%] xl:h-[330px] xl:w-[330px] bg-cover  p-[5%] mx-auto my-auto " style={{backgroundImage:`url(${url})`}}>
        <div className='py-[38%] w-[100%] border-solid border-[8px] m-[0px] border-white text-center content-center align-middle justify-center p-0'>
        <span className='relative m-[0] indent-0 top-[40%] sm:text-[40px] text-center align-middle text-white drop-shadow-lg font-serif'>{name}</span>
        </div>
    </div>
  )
}

export default CategoryCards