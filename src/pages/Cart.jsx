import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "../Redux/cartSlice.js";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center justify-between border p-4 rounded-md shadow max-sm:flex-col max-sm:items-start max-sm:text-start max-sm:gap-4"
            >
              <div className="flex items-center gap-4  w-60">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20  rounded"
                />
                <div className="space-y-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>${item.price} </p>
                </div>
              </div>

              <div className="flex items-center gap-4 max-sm:ml-2.5">
                <button
                  onClick={() => dispatch(decrementQty(item.id))}
                  className="px-2.5 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQty(item.id))}
                  className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  disabled={item.quantity >= item.stock}
                >
                  +
                </button>
              </div>

              <div className="text-right space-y-1.5 w-[73px]">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className=" bg-red-500 p-2 rounded text-white cursor-pointer hover:bg-red-700 text-sm mt-1 transition-all duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 text-right">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
