import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/cartSlice";

const BuyNow = () => {
  const cart = useSelector((state) => state.cart);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email))
      newErrors.email = "Invalid email address";

    if (!form.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.zip.trim()) newErrors.zip = "ZIP Code is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleBuyNow = () => {
    if (!validate()) return;

    // Prepare the order data
    const orderDetails = {
      orderDate: new Date().toLocaleDateString(),
      totalAmount: total,
      items: cart, // Items in the cart
      userDetails: form, // User's info
    };

    // Get existing orders from localStorage
    const existingOrders =
      JSON.parse(localStorage.getItem("orderHistory")) || [];

    // Add the new order to the list of orders
    existingOrders.push(orderDetails);

    // Save the updated orders back to localStorage
    localStorage.setItem("orderHistory", JSON.stringify(existingOrders));

    // Clear the cart
    dispatch(clearCart());

    // Show success message
    alert("Order placed successfully!");

    // Redirect to the My Orders page
    navigate("/myorder");
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Buy Now</h1>

      {/* Product Details */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-green-600 font-semibold">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <hr className="my-4" />
            <p className="text-right text-lg font-semibold">
              Total: ₹{total.toFixed(2)}
            </p>
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="fullName"
              onChange={handleChange}
              value={form.fullName}
              className={`border rounded p-2 w-full ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
          <div>
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              className={`border rounded p-2 w-full ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <input
              name="phone"
              onChange={handleChange}
              value={form.phone}
              className={`border rounded p-2 w-full ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <div>
          <textarea
            name="address"
            onChange={handleChange}
            value={form.address}
            rows="3"
            className={`w-full border rounded p-2 mb-2 ${
              errors.address ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Full Address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mb-2">{errors.address}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="city"
              onChange={handleChange}
              value={form.city}
              className={`border rounded p-2 w-full ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="City"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <input
              type="number"
              name="zip"
              onChange={handleChange}
              value={form.zip}
              className={`border rounded p-2 w-full ${
                errors.zip ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="ZIP Code"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={form.paymentMethod === "cod"}
              onChange={handleChange}
              className="mr-2"
            />
            Cash on Delivery (COD)
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="card"
              checked={form.paymentMethod === "card"}
              onChange={handleChange}
              className="mr-2"
            />
            Debit/Credit Card (Not implemented)
          </label>
        </div>
      </div>

      <button
        onClick={handleBuyNow}
        className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BuyNow;
