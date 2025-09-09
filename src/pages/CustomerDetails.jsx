import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/cartSlice.js";
import { useNavigate } from "react-router-dom";

const CustomerDetails = ({ cartData }) => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !customer.name ||
      !customer.email ||
      !customer.address ||
      !customer.phone
    ) {
      alert("Please fill in all the details!");
      return;
    }

    // Send order data (cart + customer details) to MyOrder or API
    const orderData = {
      cart: cartData,
      customer,
      orderDate: new Date(),
    };

    // Log the order data (can be sent to an API)
    console.log("Order placed: ", orderData);

    // Clear cart from Redux and localStorage after successful order
    dispatch(clearCart());

    // Redirect to MyOrders page (you can customize this route)
    navigate("/myorders", { state: { orderData } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>

      <div className="flex flex-col gap-2">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label>Address:</label>
        <textarea
          name="address"
          value={customer.address}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        ></textarea>
      </div>

      <div className="flex flex-col gap-2">
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4"
      >
        Place Order
      </button>
    </form>
  );
};

export default CustomerDetails;
