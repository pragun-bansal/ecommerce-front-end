import React from 'react'

const RatingGraph = ({product}) => {

    const ratingWith1 = product.reviews.reduce((count, review) => {
        if (review.rating === 1) {
          return count + 1;
        }
        return count;
      }, 0);

      const percent1 =(
        Number(ratingWith1) /
        Number(product.reviews.length)
      ).toFixed(2) * 100
      const ratingWith2 = product.reviews.reduce((count, review) => {
        if (review.rating === 2) {
          return count + 1;
        }
        return count;
      }, 0);

      const percent2 =(
        Number(ratingWith2) /
        Number(product.reviews.length)
      ).toFixed(2) * 100
      const ratingWith3 = product.reviews.reduce((count, review) => {
        if (review.rating === 3) {
          return count + 1;
        }
        return count;
      }, 0);

      const percent3 =(
        Number(ratingWith3) /
        Number(product.reviews.length)
      ).toFixed(2) * 100
      const ratingWith4 = product.reviews.reduce((count, review) => {
        if (review.rating === 4) {
          return count + 1;
        }
        return count;
      }, 0);

      const percent4 =(
        Number(ratingWith4) /
        Number(product.reviews.length)
      ).toFixed(2) * 100
      const ratingWith5 = product.reviews.reduce((count, review) => {
        if (review.rating === 5) {
          return count + 1;
        }
        return count;
      }, 0);

      const percent5 =(
        Number(ratingWith5) /
        Number(product.reviews.length)
      ).toFixed(2) * 100




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
                    <div class="h-5 bg-[#EE6983] rounded " style={{
                      width: `  ${
                        percent5
                      }%`,
                    }}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{percent5}%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">4 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded " style={{
                      width: `  ${
                        percent4
                      }%`,
                    }}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{percent4}%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">3 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded " style={{
                      width: `  ${
                        percent3
                      }%`,
                    }}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{percent3}%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">2 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded " style={{
                      width: `  ${
                        percent2
                      }%`,
                    }}></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{percent2}%</span>
            </div>
            <div class="flex items-center mt-4">
                <a href="#" class="text-sm font-medium text-black  hover:underline">1 star</a>
                <div class=" w-3/4  h-5 mx-4 bg-gray-200 rounded ">
                    <div class="h-5 bg-[#EE6983] rounded" style={{
                      width: `  ${
                        percent1
                      }%`
                    }} ></div>
                </div>
                <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{percent1}%</span>
            </div>



        </div>
    )
}

export default RatingGraph