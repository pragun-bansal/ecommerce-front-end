import React from 'react'
import CategoryCards from './CategoryCards'
import { Categories } from '../Categories'
// const url  ='https://rukminim1.flixcart.com/image/850/1000/l0pm3680/bag/3/k/q/leather-hand-bags-small-square-bags-women-handbags-for-women-original-imagcfuhxfcrxzua.jpeg?q=20'
const CardsGrid = () => {
  return (
    <div className='xl:align-middle lg:mx-[100px] mx-[5%]' >
        <h1 className='text-center text-[32px] font-bold mb-[30px]'>Products</h1>
        <div className='xl:w-[1100px] grid lg:grid-cols-3  grid-cols-2 align-middle justify-center gap-y-7 mx-auto'>
            {
              Categories.map((item,index)=>{
                return(
                  <CategoryCards name={item.name} url={item.imageUrl}/>
                )
              })
            }
        </div>
    </div>
  )
}

export default CardsGrid