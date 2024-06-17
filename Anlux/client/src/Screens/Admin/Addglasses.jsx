import React, { useState } from 'react';

const AddGlasses = () => {
  const [formData, setFormData] = useState({
    name: '',
    discountPercentage: '',
    images: null, // Now an array to hold multiple images
    description: '',
    oldPrice: '',
    newPrice: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    // Update formData with an array of selected files
    setFormData({ ...formData, images: selectedFiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('discountPercentage', formData.discountPercentage);
    // Append each selected image to the form data
    for (let i = 0; i < formData.images.length; i++) {
      form.append('images', formData.images[i]);
    }
    form.append('description', formData.description);
    form.append('oldPrice', formData.oldPrice);
    form.append('newPrice', formData.newPrice);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/glasses-post`, {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        const product = await response.json();
        console.log('Product added:', product);
        // Clear the form
        setFormData({
          name: '',
          discountPercentage: '',
          images: null,
          description: '',
          oldPrice: '',
          newPrice: ''
        });
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Glasses</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Discount Percentage</label>
                <input
                    type="number"
                    name="discountPercentage"
                    value={formData.discountPercentage}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Image</label>
                <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Old Price</label>
                <input
                    type="number"
                    name="oldPrice"
                    value={formData.oldPrice}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">New Price</label>
                <input
                    type="number"
                    name="newPrice"
                    value={formData.newPrice}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
                Add Product
            </button>
        </form>
    );
};

export default AddGlasses;
