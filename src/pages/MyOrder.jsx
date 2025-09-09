import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch the saved orders from localStorage
    const orderData = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(orderData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500">You have no orders yet!</div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow"
            >
              <div className="mb-6">
                {/* Order Items */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Order Items
                </h2>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-md shadow-md"
                      />
                      <div>
                        <h4 className="text-lg font-medium text-gray-800">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                        <p className="text-lg text-green-600 font-semibold">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-6" />

              {/* User Details */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  User Details
                </h3>
                <div className="space-y-2">
                  <p className="text-lg text-gray-700">
                    <span className="font-medium">Name:</span>{" "}
                    {order.userDetails.fullName}
                  </p>
                </div>
              </div>

              <hr className="my-6" />

              {/* Order Date and Total */}
              <div className="flex justify-between items-center mt-6">
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Order Date:</span>{" "}
                  {order.orderDate}
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  Total: ₹{order.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="text-center  mt-8">
        <NavLink to="/">
          <button className=" bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Go to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default MyOrders;
