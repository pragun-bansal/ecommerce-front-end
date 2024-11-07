import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Categories } from '../Categories';

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        category: [],
        tagline: '',
        description: '',
        price: '',
        stock: '',
        all_images: [],
        sizes: [],
        colors: [],
    });

    useEffect(() => {
        if (productId) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product/${productId}`);
                    setProduct(response.data.data);
                } catch (error) {
                    console.error('Error fetching product:', error);
                }
            };

            fetchProduct();
        }
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        setProduct((prevProduct) => {
            const newCategories = checked
                ? [...prevProduct.category, value]
                : prevProduct.category.filter((category) => category !== value);
            console.log(newCategories)
            return { ...prevProduct, category: newCategories };

        });
        console.log(product.category)
    };

    const handleImageChange = (e) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            all_images: [...prevProduct.all_images, ...Array.from(e.target.files)],
        }));
    };

    const handleDeleteImage = (index) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            all_images: prevProduct.all_images.filter((_, i) => i !== index),
        }));
    };

    const swapall_images = (index1, index2) => {
        const newall_images = [...product.all_images];
        [newall_images[index1], newall_images[index2]] = [newall_images[index2], newall_images[index1]];
        setProduct((prevProduct) => ({ ...prevProduct, all_images: newall_images }));
    };

    const handleSizeChange = (index, field, value) => {
        const newSizes = [...product.sizes];
        newSizes[index][field] = value;
        setProduct((prevProduct) => ({ ...prevProduct, sizes: newSizes }));
    };

    const handleColorChange = (index, field, value) => {
        const newColors = [...product.colors];
        newColors[index][field] = value;
        setProduct((prevProduct) => ({ ...prevProduct, colors: newColors }));
    };

    const addSizeField = () => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            sizes: [...prevProduct.sizes, { size: '', price: '' }],
        }));
    };

    const addColorField = () => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            colors: [...prevProduct.colors, { color: '', price: '' }],
        }));
    };

    const deleteSizeField = (index) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            sizes: prevProduct.sizes.filter((_, i) => i !== index),
        }));
    };

    const deleteColorField = (index) => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            colors: prevProduct.colors.filter((_, i) => i !== index),
        }));
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        // Append product data
        formData.append('name', product.name);
        formData.append('category', JSON.stringify(product.category)); // Ensure categories are correctly stringified
        formData.append('tagline', product.tagline);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('stock', product.stock);
        formData.append('sizes', JSON.stringify(product.sizes));
        formData.append('colors', JSON.stringify(product.colors));

        if(productId){
            const existingImages = product.all_images
                .map((image, index) => isValidUrl(image) ? { image, index } : null)
                .filter(item => item !== null);

            formData.append('existingImages', JSON.stringify(existingImages));
        }
        // Append all_images
        product.all_images.forEach((image, index) => {
            formData.append('all_images', image);
        });

        try {
            if (productId) {
                await axios.put(`${process.env.REACT_APP_SERVER_URL}/product/editProduct/${productId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            } else {
                await axios.post(`${process.env.REACT_APP_SERVER_URL}/product/createProduct`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            navigate('/admin');
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{productId ? 'Edit Product' : 'Add New Product'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                        {Categories?.map((category) => (
                            <div key={category.name} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={category.name}
                                    checked={product.category.includes(category.name)}
                                    onChange={handleCategoryChange}
                                    className="mr-2"
                                />
                                <label>{category.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tagline</label>
                    <input
                        type="text"
                        name="tagline"
                        value={product.tagline}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Images</label>
                    <input
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                    />
                    <div className="mt-4">
                        {product.all_images.length > 0 && (
                            <div className="carousel">
                                {product.all_images.map((image, index) => (
                                    <div key={index} className="relative inline-block mr-2">
                                        <img
                                            src={isValidUrl(image) ? image : URL.createObjectURL(image)}
                                            alt={`Product ${index}`}
                                            className="h-32 w-32 object-cover rounded-md"
                                        />
                                        <span className="absolute top-0 left-0 bg-black text-white text-xs p-1 rounded">
                                            {index + 1}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteImage(index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                        >
                                            &times;
                                        </button>
                                        {index > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => swapall_images(index, index - 1)}
                                                className="absolute bottom-0 left-0 bg-blue-500 text-white rounded-full p-1"
                                            >
                                                &larr;
                                            </button>
                                        )}
                                        {index < product.all_images.length - 1 && (
                                            <button
                                                type="button"
                                                onClick={() => swapall_images(index, index + 1)}
                                                className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1"
                                            >
                                                &rarr;
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Sizes</label>
                    {product.sizes?.map((size, index) => (
                        <div key={index} className="flex space-x-2 mt-1">
                            <input
                                type="text"
                                value={size.size}
                                onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
                                placeholder="Size"
                                className="block w-1/2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <input
                                type="number"
                                value={size.price}
                                onChange={(e) => handleSizeChange(index, 'price', e.target.value)}
                                placeholder="Price"
                                className="block w-1/2 border border-gray-300 rounded-md shadow-sm"
                            />
                            <button
                                type="button"
                                onClick={() => deleteSizeField(index)}
                                className="text-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addSizeField} className="mt-2 text-blue-500">
                        Add Size
                    </button>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Colors</label>
                    {product.colors?.map((color, index) => (
                        <div key={index} className="flex space-x-2 mt-1">
                            <input
                                type="text"
                                value={color.color}
                                onChange={(e) => handleColorChange(index, 'color', e.target.value)}
                                placeholder="Color"
                                className="block w-1/2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                            <input
                                type="number"
                                value={color.price}
                                onChange={(e) => handleColorChange(index, 'price', e.target.value)}
                                placeholder="Price"
                                className="block w-1/2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => deleteColorField(index)}
                                className="text-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addColorField} className="mt-2 text-blue-500">
                        Add Color
                    </button>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {productId ? 'Update Product' : 'Create Product'}
                </button>
            </form>
        </div>
    );
};

export default EditProduct;