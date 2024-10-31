'use client'
import { useState } from 'react';
import DashboardLayout from '../page';

const Addbags = () => {
  const [formData, setFormData] = useState({
    name: '',
    discountPercentage: '',
    mainImage: null,
    additionalImages: [],
    description: '',
    oldPrice: '',
    newPrice: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMainImageChange = (e) => {
    setFormData({ ...formData, mainImage: e.target.files[0] });
  };

  const handleAdditionalImagesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFormData({ ...formData, additionalImages: selectedFiles });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append('name', formData.name);
    form.append('discountPercentage', formData.discountPercentage);
    if (formData.mainImage) {
      form.append('mainImage', formData.mainImage);
    }
    formData.additionalImages.forEach(image => {
      form.append('additionalImages', image);
    });
    form.append('description', formData.description);
    form.append('oldPrice', formData.oldPrice);
    form.append('newPrice', formData.newPrice);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bags-post`, {
        method: 'POST',
        body: form
      });

      if (response.ok) {
        const product = await response.json();
        console.log('Product added:', product);
        setSuccessMessage('Product added successfully!');
        setTimeout(() => setSuccessMessage(''), 3000); // Hide message after 3 seconds
        setFormData({
          name: '',
          discountPercentage: '',
          mainImage: null,
          additionalImages: [],
          description: '',
          oldPrice: '',
          newPrice: ''
        });
        document.getElementById('main-image-upload').value = null; // Clear file input
        document.getElementById('additional-images-upload').value = null; // Clear file input
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Bags</h2>
      {successMessage && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
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
        <label htmlFor="main-image-upload" className="block text-gray-700">Main Image</label>
        <input
          id="main-image-upload"
          type="file"
          name="mainImage"
          accept="image/*"
          onChange={handleMainImageChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
        {formData.mainImage && (
          <div className="mt-2">
            <p>{formData.mainImage.name}</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="additional-images-upload" className="block text-gray-700">Additional Images</label>
        <input
          id="additional-images-upload"
          type="file"
          name="additionalImages"
          accept="image/*"
          onChange={handleAdditionalImagesChange}
          multiple
          className="w-full px-3 py-2 border rounded-lg"
        />
        {formData.additionalImages.length > 0 && (
          <div className="mt-2">
            {formData.additionalImages.map((image, index) => (
              <p key={index}>{image.name}</p>
            ))}
          </div>
        )}
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
        disabled={loading}
      >
        {loading ? 'Adding Product...' : 'Add Product'}
      </button>
    </form>
    </DashboardLayout>
  );
};

export default Addbags;
