import React, { useState } from 'react'
import RatingGraph from '../../Components/RatingSystem/RatingGraph'
import ProductsCard from './AllProductsCard'
import ProductsGrid from './AllProductsGrid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../Components/Loader/Loader'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ProductsPage = () => {
  const { data: allProducts,status } = useSelector((state) => state.AllProducts)
  const { category, sortBy } = useParams();
  const navigate = useNavigate();

  if (status === 'loading') {
    return <Loader />;
  }
  return (
    <div>

      <ProductsGrid />
      {/* <RatingGraph /> */}
    </div>
  )
}

export default ProductsPage