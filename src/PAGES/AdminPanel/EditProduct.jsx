import React, { useState } from 'react';
import axios from 'axios';
import { Categories } from '../Categories'; // Adjust the path as necessary

const EditProduct = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [images, setImages] = useState([]);
    const [sizes, setSizes] = useState([{ size: '', price: '' }]);
    const [colors, setColors] = useState([{ color: '', price: '' }]);

    const handleImageChange = (e) => {
        setImages([...images, ...Array.from(e.target.files)]);
    };

    const handleSizeChange = (index, field, value) => {
        const newSizes = [...sizes];
        newSizes[index][field] = value;
        setSizes(newSizes);
    };

    const handleColorChange = (index, field, value) => {
        const newColors = [...colors];
        newColors[index][field] = value;
        setColors(newColors);
    };

    const addSizeField = () => {
        setSizes([...sizes, { size: '', price: '' }]);
    };

    const addColorField = () => {
        setColors([...colors, { color: '', price: '' }]);
    };

    const handleDeleteImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    const swapImages = (index1, index2) => {
        const newImages = [...images];
        [newImages[index1], newImages[index2]] = [newImages[index2], newImages[index1]];
        setImages(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('tagline', tagline);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock', stock);
        images.forEach((image, index) => {
            formData.append(`images[${index}]`, image);
        });
        formData.append('sizes', JSON.stringify(sizes));
        formData.append('colors', JSON.stringify(colors));

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/products/addProduct`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                console.log('Product created successfully');
            } else {
                console.error('Failed to create product');
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    >
                        <option value="">Select a category</option>
                        {Categories.map((category, index) => (
                            <option key={index} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Tagline</label>
                    <input
                        type="text"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
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
                        required
                    />
                    <div className="mt-4">
                        {images.length > 0 && (
                            <div className="carousel">
                                {images.map((image, index) => (
                                    <div key={index} className="relative inline-block mr-2">
                                        <img
                                            src={URL.createObjectURL(image)}
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
                                                onClick={() => swapImages(index, index - 1)}
                                                className="absolute bottom-0 left-0 bg-blue-500 text-white rounded-full p-1"
                                            >
                                                &larr;
                                            </button>
                                        )}
                                        {index < images.length - 1 && (
                                            <button
                                                type="button"
                                                onClick={() => swapImages(index, index + 1)}
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
                    {sizes.map((size, index) => (
                        <div key={index} className="flex space-x-2 mt-1">
                            <input
                                type="text"
                                value={size.size}
                                onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
                                placeholder="Size"
                                className="block w-1/2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                            <input
                                type="number"
                                value={size.price}
                                onChange={(e) => handleSizeChange(index, 'price', e.target.value)}
                                placeholder="Price"
                                className="block w-1/2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addSizeField} className="mt-2 text-blue-500">
                        Add Size
                    </button>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Colors</label>
                    {colors.map((color, index) => (
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
                        </div>
                    ))}
                    <button type="button" onClick={addColorField} className="mt-2 text-blue-500">
                        Add Color
                    </button>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default EditProduct;