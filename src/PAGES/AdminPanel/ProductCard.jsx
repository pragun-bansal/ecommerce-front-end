// front-end/src/PAGES/AdminPanel/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleEditProduct = () => {
        navigate(`/admin/edit-product/${product._id}`);
    };

    return (

        <div className="border p-4 rounded-md shadow-md relative">

            <img src={product.all_images[0]} alt={product.name} className="h-[30vw] w-full object-cover rounded-md mb-2" />
            <h3 className=" text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.tagline}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
            <button onClick={handleEditProduct} className="absolute top-2 right-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 17l-4 4m0 0l-4-4m4 4V3m0 18l4-4m0 0l4 4m-4-4V3"
                    />
                </svg>
            </button>

        </div>
    );
};

export default ProductCard;