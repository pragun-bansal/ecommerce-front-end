import React, { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../AllProducts/ProductsCard';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProductsGrid = () => {
  const allProducts = useSelector((state) => state.AllProducts);
  const { category, sortBy } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [priceRange, setPriceRange] = useState([0, 10000]); // Initial range
  const maxPrice = Math.max(...allProducts.map(product => product.price), 0); // Get max price

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products per page

  useEffect(() => {
    const results = allProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );
    setFilteredProducts(results);
  }, [searchTerm, priceRange, allProducts]);

  const ratingDecreasingProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  const priceDecreasingProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  const priceIncreasingProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  const newArrivalProducts = [...filteredProducts].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  const getSortedProducts = () => {
    switch (sortBy) {
      case 'incPrice':
        return priceIncreasingProducts;
      case 'decPrice':
        return priceDecreasingProducts;
      case 'newArrivals':
        return newArrivalProducts;
      case 'userRating':
        return ratingDecreasingProducts;
      default:
        return filteredProducts;
    }
  };

  const navigate = useNavigate();

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = getSortedProducts().slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
      <div className='mx-[2%]'>
        <div className='mb-4'>
          <input
              type='text'
              placeholder='Search by name'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='p-2 border border-gray-300 rounded-md w-full'
          />
        </div>
        <div className='mb-4 flex items-center space-x-4'>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                  className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
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
              <Menu.Items
                  className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                        <button
                            onClick={() => navigate(`/allproducts/${category}/incPrice`)}
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
                            onClick={() => navigate(`/allproducts/${category}/decPrice`)}
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
                            onClick={() => navigate(`/allproducts/${category}/userRating`)}
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
                            onClick={() => navigate(`/allproducts/${category}/newArrivals`)}
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
          <div className='w-[30vw]'>
            <label className='block text-sm font-medium text-gray-700'>Price Range</label>
            <Slider
                range
                min={0}
                max={maxPrice} // Set max value dynamically
                defaultValue={[0, maxPrice]}
                onChange={(value) => setPriceRange(value)}
                 // Adjust width as needed
            />
            <div className='flex justify-between text-sm'>
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-2 align-middle justify-center gap-y-7 mx-auto'>
          {currentProducts.map((product) => {
            if (product.category.includes(category) || category === 'all') {
              return <ProductCard key={product.id} product={product} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className='flex justify-center mt-4'>
          <nav>
            <ul className='inline-flex items-center -space-x-px'>
              {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
                  <li key={number + 1}>
                    <button
                        onClick={() => paginate(number + 1)}
                        className={`px-3 py-2 leading-tight ${currentPage === number + 1 ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                    >
                      {number + 1}
                    </button>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
  );
};

export default ProductsGrid;