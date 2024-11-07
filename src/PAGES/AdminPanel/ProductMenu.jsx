import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import * as XLSX from 'xlsx';
import ProductCard from './ProductCard';
import Loader from "../../Components/Loader/Loader";

const ProductMenu = () => {
    const allProducts = useSelector((state) => state.AllProducts);
    const navigate = useNavigate();
    const user = useSelector((state) => state.User);
    const [openCategories, setOpenCategories] = useState({});

    const handleAddProduct = () => {
        navigate('/admin/edit-product');
    };

    const handleDownloadExcel = () => {
        const flattenedProducts = allProducts.map(product => ({
            ...product,
            colors: product.colors.map(color => `${color.color} (${color.price})`).join(', '),
            sizes: product.sizes.map(size => `${size.size} (${size.price})`).join(', '),
            all_images: product.all_images.join(', '),
            category: product.category.join(', ')
        }));

        const worksheet = XLSX.utils.json_to_sheet(flattenedProducts);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
        XLSX.writeFile(workbook, "products.xlsx");
    };

    const groupedProducts = allProducts.reduce((acc, product) => {
        product.category.forEach(cat => {
            if (!acc[cat]) {
                acc[cat] = [];
            }
            acc[cat].push(product);
        });
        return acc;
    }, {});

    const toggleCategory = (category) => {
        setOpenCategories(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    if (!user.admin) {
        navigate("/");
    }

    if (!allProducts) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products Menu</h1>
            <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Add New Product
            </button>
            <button onClick={handleDownloadExcel} className="bg-green-500 text-white px-4 py-2 rounded mb-4 ml-4">
                Download Products as Excel
            </button>
            {Object.keys(groupedProducts).map((category) => (
                <div key={category} className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 cursor-pointer" onClick={() => toggleCategory(category)}>
                        {category} {openCategories[category] ? '▲' : '▼'}
                    </h2>
                    {openCategories[category] && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {groupedProducts[category].map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductMenu;