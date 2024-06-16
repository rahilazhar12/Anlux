import React from 'react';

const products = [
  { id: 1, name: 'AMABLE SPG', price: 'Rs 2,500', imageUrl: 'https://cdn1.visiofactory.com/80005-thickbox/gucci-gg0544s-001-57-18-black-large-gradient.jpg' },
  { id: 2, name: 'EXQUISITE BLUE CUT EYEGLASSES', price: 'Rs 1,499', imageUrl: 'https://cdn1.visiofactory.com/99610-thickbox/gucci-gg1188s-002-58-17-black.jpg' },
  { id: 3, name: 'DELIGHT PSG', price: 'Rs 2,000', imageUrl: 'https://cdn1.visiofactory.com/116585-thickbox/gucci-gg-logo-gg1600s-001-56-18-gold.jpg' },
  { id: 4, name: 'NIFTY FSG', price: 'Rs 2,000', imageUrl: 'https://fineur.pk/cdn/shop/files/16296888700ffd070acf996a5bb4b4f58285b9b576_thumbnail_750x_41c2d145-4397-4141-862a-00d93c66cc61.webp?v=1690043416' },
  { id: 5, name: 'DELICATO FSG', price: 'Rs 2,000', imageUrl: 'https://fineur.pk/cdn/shop/files/16296888700ffd070acf996a5bb4b4f58285b9b576_thumbnail_750x_41c2d145-4397-4141-862a-00d93c66cc61.webp?v=1690043416' },
  { id: 6, name: 'DEEP MP-60144', price: 'Rs 1,200', imageUrl: 'https://fineur.pk/cdn/shop/files/16296888700ffd070acf996a5bb4b4f58285b9b576_thumbnail_750x_41c2d145-4397-4141-862a-00d93c66cc61.webp?v=1690043416' },
  { id: 7, name: 'RETOR FSG', price: 'Rs 2,000', imageUrl: 'https://fineur.pk/cdn/shop/files/16296888700ffd070acf996a5bb4b4f58285b9b576_thumbnail_750x_41c2d145-4397-4141-862a-00d93c66cc61.webp?v=1690043416' },
  { id: 8, name: 'KINGSTON PSG', price: 'Rs 2,500', imageUrl: 'https://fineur.pk/cdn/shop/files/16296888700ffd070acf996a5bb4b4f58285b9b576_thumbnail_750x_41c2d145-4397-4141-862a-00d93c66cc61.webp?v=1690043416' },
];

const TopSellingProducts = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">TOP SELLING PRODUCTS</h2>
        <p className="mt-4 text-lg text-gray-500">
          The most excellent online eyeglasses and eyeglass frames are offered at Easy Sight, your one-stop online store.
          We offer a wide range of high-quality items because we know how important it is for you to access stylish and
          affordable eyewear. We provide options for everyone, whether you need prescription or non-prescription
          sunglasses. Finding the ideal set of eyeglasses frames that fit your style, personality, and budget is simple
          with the help of our easy-to-use website. We have everything you want, glasses from timelessly elegant designs
          to the newest techniques.
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
              <p className="mt-2 text-lg font-medium text-gray-700">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
