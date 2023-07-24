import React from 'react'

const RatingGraph = () => {
    return (
        <div className='lg:w-[50vw] ml-4 mt-16'>
            {/* <h1 className='justify-center text-center'>Customer Reviews</h1> */}

            <div class="flex items-center mb-2 ">
                <svg class="w-4 h-4 text-[#EE6983] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-[#EE6983] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-[#EE6983] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-[#EE6983] mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p class="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
            </div>
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">5 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded w-[70%]"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">4 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded  w-[17%]"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">3 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded w-[8%]"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">2 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded w-[4%]"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">1 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded w-[1%]"></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
            </div>



        </div>
    )
}

export default RatingGraph