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
            <p className="text-gray-800 font-bold">₹{product.price}</p>
            <button onClick={handleEditProduct} className="absolute top-2 right-2">
                {/*<svg*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    className="h-6 w-6 text-blue-500"*/}
                {/*    fill="none"*/}
                {/*    viewBox="0 0 24 24"*/}
                {/*    stroke="currentColor"*/}
                {/*>*/}
                {/*    <path*/}
                {/*        strokeLinecap="round"*/}
                {/*        strokeLinejoin="round"*/}
                {/*        strokeWidth="2"*/}
                {/*        d="M11 17l-4 4m0 0l-4-4m4 4V3m0 18l4-4m0 0l4 4m-4-4V3"*/}
                {/*    />*/}
                {/*</svg>*/}

                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 blue-500 text-blue-500 items-center justify-center" viewBox="0,0,300,150">
                    <g fill="#3b82f6" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                       stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                       font-family="none" font-weight="none" font-size="none" text-anchor="none">
                        <g transform="scale(4,4)">
                            <path
                                d="M39.086,17.914l7,7l-24.581,24.581l-9.201,4.412c-1.367,0.457 -2.668,-0.844 -2.211,-2.211l4.412,-9.201zM41.914,15.086l4.5,-4.5c0.781,-0.781 2.047,-0.781 2.828,0l4.172,4.172c0.781,0.781 0.781,2.047 0,2.828l-4.5,4.5z"></path>
                        </g>
                    </g>
                </svg>
            </button>

        </div>
    );
};

export default ProductCard;