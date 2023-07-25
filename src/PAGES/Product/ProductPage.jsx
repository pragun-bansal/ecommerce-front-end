import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { useParams } from 'react-router-dom';
import RatingGraph from '../../Components/RatingSystem/RatingGraph';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReview';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); // Use useState to handle the product state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/product/productById`, { productId });
        setProduct(response.data.data); // Update the product state with the fetched data
      } catch (error) {
        console.log(error);
        setProduct(null); // Set product to null if an error occurs
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]); // Use the productId as a dependency for useEffect

  return (
    <div>
      {product ? (
        <div>
          <ProductDescription product={product} />
          <div className='xl:flex'>
            <RatingGraph />
            <ProductReviews />
          </div>
        </div>
      ) : (
        "product not found"
      )}
    </div>
  );
};

export default ProductPage;
