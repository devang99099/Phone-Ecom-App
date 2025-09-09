import React from "react";
import { useLocation } from "react-router-dom";

const MyOrder = () => {
  const { state } = useLocation(); // Receive the order data

  if (!state) {
    return <p>No order data available</p>;
  }

  const { cart, customer, orderDate } = state.orderData;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>
      <h2 className="text-2xl font-semibold">Order Details</h2>
      <div className="mt-4">
        <p>
          <strong>Order Date:</strong> {new Date(orderDate).toLocaleString()}
        </p>
        <p>
          <strong>Customer Name:</strong> {customer.name}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>
        <p>
          <strong>Address:</strong> {customer.address}
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-6">Cart Items</h3>
      <ul className="space-y-4 mt-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between">
            <div>{item.title}</div>
            <div>
              {item.quantity} x ${item.price}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">
          Total: $
          {cart
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default MyOrder;
