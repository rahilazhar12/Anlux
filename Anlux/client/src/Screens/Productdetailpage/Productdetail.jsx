import React, { useEffect, useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../Redux/cartSlice';
import toast  from 'react-hot-toast';
import CartModal from '../../Components/CartModal/CartModal';


const ItemType = {
  IMAGE: 'image',
};

const Image = ({ src, index, moveImage, showMainImage }) => {
  const [, ref] = useDrag({
    type: ItemType.IMAGE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.IMAGE,
    hover(item) {
      if (item.index !== index) {
        moveImage(item.index, index);
        item.index = index;
      }
    },
    drop(item) {
      showMainImage(index, true); // Change the main image on drop
    },
  });

  return (
    <img
      ref={(node) => ref(drop(node))}
      src={src}
      alt={`Product ${index}`}
      className="w-1/5 h-auto cursor-pointer rounded-xl"
      onClick={() => showMainImage(index, false)} // Add onClick handler
    />
  );
};

const Productdetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const openCartModal = () => setIsCartModalOpen(true);
  const closeCartModal = () => setIsCartModalOpen(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const itemInCart = cartItems.find(item => item._id === id);
    setAddedToCart(!!itemInCart);
  }, [cartItems, id]);


  const addToCartHandler = () => {
    dispatch(addItemToCart({
      _id: product._id,
      name: product.name,
      newPrice: parseFloat(product.newPrice),
      image: product.mainImage
    }));
    setAddedToCart(true);
    toast.success(`${product.name} added to cart successfully!`);
    openCartModal();
  };


  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/getglassesonid/${id}`);
        const data = await response.json();
        setProduct(data);
        setImages([data.mainImage, ...data.additionalImages]);
        setMainImage(data.mainImage);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, []);

  const moveImage = (from, to) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(from, 1);
    updatedImages.splice(to, 0, movedImage);
    setImages(updatedImages);
  };

  const showMainImage = async (index, updateDB) => {
    const newMainImage = images[index];
    setMainImage(newMainImage);

    if (updateDB) {
      const newAdditionalImages = images.filter((_, idx) => idx !== index);
      setImages([newMainImage, ...newAdditionalImages]);

      // Update the database
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/orderchange/${product._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mainImage: newMainImage,
            additionalImages: newAdditionalImages,
          }),
        });
      } catch (error) {
        console.error('Error updating image order:', error);
      }
    }
  };

 

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <CartModal isOpen={isCartModalOpen} closeModal={closeCartModal} />
      
      <div className="flex justify-center items-start mt-8 p-5">
        <div className="max-w-5xl flex flex-col md:flex-row">
          {/* Product Images */}
          <div className="w-full md:w-1/2 p-5">
            {/* Big Image */}
            <img
              src={`${import.meta.env.VITE_API_URL}/${mainImage}`}
              alt="Big Product"
              className="w-full h-auto rounded-xl"
            />
            {/* Small Images */}
            <div className="flex my-4 space-x-2">
              {images.map((src, index) => (
                <Image key={index} src={`${import.meta.env.VITE_API_URL}/${src}`} index={index} moveImage={moveImage} showMainImage={showMainImage} />
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="w-full md:w-1/2 p-5">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="price my-5 flex space-x-4">
              <div className="old-price op text-xl font-bold">Rs.{product.newPrice}</div>
            </div>
            <p className="text-gray-500 my-4 text-sm">
              {product.description}
            </p>
            {addedToCart ? (
              <button onClick={openCartModal}  className="btn btn-outline hover:bg-green-500 hover:text-white" >
               View Cart
              </button>
            ) : (
              <button onClick={addToCartHandler} disabled={addedToCart} type="button" className="py-3.5 px-12 mb-2 text-lg font-medium text-white focus:outline-none bg-gray-900 rounded-full border border-gray-200 hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              ADD TO CART
            </button>
            )}
           
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Productdetail;
