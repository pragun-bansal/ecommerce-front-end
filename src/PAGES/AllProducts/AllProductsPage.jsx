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
      <div className='ml-[50px]'>
        <Menu as="div" className="relative inline-block text-lef">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Sort By
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate(`/allproducts/${category}/incPrice`)} // Use the navigate function to navigate to the desired route
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Increasing Prices
                    </button>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate(`/allproducts/${category}/decPrice`)} // Use the navigate function to navigate to the desired route
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Decreasing Prices
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate(`/allproducts/${category}/userRating`)} // Use the navigate function to navigate to the desired route
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      User Ratings
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate(`/allproducts/${category}/newArrivals`)} // Use the navigate function to navigate to the desired route
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Newest Arrivals
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <ProductsGrid />
      {/* <RatingGraph /> */}
    </div>
  )
}

export default ProductsPage