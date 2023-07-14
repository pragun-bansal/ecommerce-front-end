import React from 'react'
import CategoryCards from './CategoryCards'

const CardsGrid = () => {
  return (
    <div className='xl:align-middle lg:mx-[100px] mx-[5%]' >
        <h1 className='text-center text-[32px] font-bold mb-[30px]'>Products</h1>
        <div className='xl:w-[1100px] grid lg:grid-cols-3  grid-cols-2 align-middle justify-center gap-y-7 mx-auto'>
            <CategoryCards />
            <CategoryCards />
            <CategoryCards />
            <CategoryCards />
            <CategoryCards />
            <CategoryCards />
        </div>
    </div>
  )
}

export default CardsGrid