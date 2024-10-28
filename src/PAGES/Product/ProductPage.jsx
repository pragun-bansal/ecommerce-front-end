// import axios from 'axios';
// import React, { useEffect, useState } from 'react'; // Import useEffect and useState
// import { useParams } from 'react-router-dom';
// import RatingGraph from '../../Components/RatingSystem/RatingGraph';
// import ProductDescription from './ProductDescription';
// import ProductReviews from './ProductReview';
// import SoapProductDescription from './SoapProductDescription';
//
// const ProductPage = () => {
//   const [writeReview, setWriteReview] = useState(false);
//   const [confirmDelete, setConfirmDelete] = useState(false);
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null); // Use useState to handle the product state
//   const [soap,setSoap]=useState()
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/product/productById`, { productId });
//         console.log(response.data.data)
//         setProduct(response.data.data); // Update the product state with the fetched data
//         setSoap(response.data.data.category.find((p) => p === "homemade soaps"));
//         console.log("soap",soap)
//       } catch (error) {
//         console.log(error);
//         setProduct(null); // Set product to null if an error occurs
//       }
//     };
//
//     if (productId) {
//       fetchProduct();
//     }
//   }, [productId]); // Use the productId as a dependency for useEffect
//
//
//   return (
//     <div>
//       {product ? (
//         <div >
//           {soap?<SoapProductDescription product={product}/>:<ProductDescription product={product} />}
//           <div className='xl:flex'>
//             <RatingGraph product={product}/>
//             <ProductReviews product={product} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} writeReview={writeReview} setWriteReview={setWriteReview}/>
//           </div>
//         </div>
//       ) : (
//         "product not found"
//       )}
//     </div>
//   );
// };
//
// export default ProductPage;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RatingGraph from '../../Components/RatingSystem/RatingGraph';
import ProductDescription from './ProductDescription';
import ProductReviews from './ProductReview';
import SoapProductDescription from './SoapProductDescription';
import Loader from '../../Components/Loader/Loader';

const ProductPage = () => {
  const [writeReview, setWriteReview] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [soap, setSoap] = useState();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/product/productById`, { productId });
        setProduct(response.data.data);
        setSoap(response.data.data.category.find((p) => p === "homemade soaps"));
      } catch (error) {
        console.log(error);
        setProduct(null);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (loading) {
    return <Loader />; // Render Loader while loading
  }

  return (
      <div>
        {product ? (
            <div>
              {soap ? <SoapProductDescription product={product} /> : <ProductDescription product={product} />}
              <div className='xl:flex'>
                <RatingGraph product={product} />
                <ProductReviews product={product} confirmDelete={confirmDelete} setConfirmDelete={setConfirmDelete} writeReview={writeReview} setWriteReview={setWriteReview} />
              </div>
            </div>
        ) : (
            "product not found"
        )}
      </div>
  );
};

export default ProductPage;