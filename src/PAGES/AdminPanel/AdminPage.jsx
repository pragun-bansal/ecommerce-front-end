// front-end/src/PAGES/AdminPanel/AdminPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import {useSelector} from "react-redux";
import Loader from "../../Components/Loader/Loader";

const AdminPage = () => {
    const allProducts= useSelector((state) => state.AllProducts)
    const navigate = useNavigate();
    console.log(allProducts)
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/products`);
    //             setProducts(response.data);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //         }
    //     };
    //
    //     fetchProducts();
    // }, []);

    const handleAddProduct = () => {
        navigate('/admin/edit-product');
    };

    const groupedProducts = allProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    console.log(groupedProducts)
    if(!allProducts){
        console.log("nahi h")
        return(
            <Loader />
        )
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
            <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Add New Product
            </button>
            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {groupedProducts[category].map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;