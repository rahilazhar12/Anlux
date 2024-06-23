import React, { useEffect, useState } from 'react';

const SummaryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
    window.scrollTo(0,0)
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/get-allorders`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div>
      <section className="py-24 relative ">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto ">
         
          {orders.map(order => (
            <div key={order._id} className="main-box border border-gray-800 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full mb-6 ">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                <div className="data">
                  <p className="font-semibold text-base leading-7 text-black">
                    Order Id: <span className="text-indigo-600 font-medium">#{order._id}</span>
                  </p>
                  <p className="font-semibold text-base leading-7 text-black mt-4">
                    Order Payment: <span className="text-gray-400 font-medium">{new Date(order.createdAt).toLocaleDateString()}</span>
                  </p>
                </div>
              </div>
              <div className="user-info px-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-lg leading-8 text-black mb-4">User Information</h3>
                <p className="font-medium text-base leading-7 text-black">
                  Name: <span className="text-gray-500">{order.user.name}</span>
                </p>
                <p className="font-medium text-base leading-7 text-black">
                  Email: <span className="text-gray-500">{order.user.email}</span>
                </p>
                <p className="font-medium text-base leading-7 text-black">
                  Phone: <span className="text-gray-500">{order.user.phone}</span>
                </p>
                <div className="billing-address mt-4">
                  <h4 className="font-semibold text-lg leading-8 text-black">Billing Address</h4>
                  <p className="font-medium text-base leading-7 text-black">
                    Street: <span className="text-gray-500">{order.user.billingAddress.street}</span>
                  </p>
                  <p className="font-medium text-base leading-7 text-black">
                    State: <span className="text-gray-500">{order.user.billingAddress.state}</span>
                  </p>
                  <p className="font-medium text-base leading-7 text-black">
                    Zip: <span className="text-gray-500">{order.user.billingAddress.zip}</span>
                  </p>
                </div>
              </div>
              <div className="w-full px-3 min-[400px]:px-6">
                {order.cartItems.map(item => (
                  <div key={item._id} className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                    <div className="img-box max-lg:w-full">
                      <img src={`${import.meta.env.VITE_API_URL}/${item.image}`} alt={item.name} className="aspect-square w-full lg:max-w-[140px] md:max-w-[180px] sm:max-w-[200px]" />
                    </div>
                    <div className="flex flex-row items-center w-full ">
                      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        <div className="flex items-center">
                          <div>
                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">{item.name}</h2>
                            <div className="flex items-center ">
                              <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                Qty: <span className="text-gray-500">{item.quantity}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-5">
                          <div className="col-span-5 lg:col-span-1 flex items-center max-lg:mt-3">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">Price</p>
                              <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">Rs {item.price}</p>
                            </div>
                          </div>
                          <div className="col-span-5 lg:col-span-2 flex items-center max-lg:mt-3 ">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">Total Price</p>
                              <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">Rs {item.totalPrice}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
                <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
                  <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                   Cash on Delivery <span className="text-gray-500"></span>
                  </p>
                </div>
                <p className="font-semibold text-lg text-black py-6">
                  Total Price: <span className="text-indigo-600">Rs {order.totalAmount + 300}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SummaryPage;
