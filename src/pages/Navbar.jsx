import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <header className="p-4  text-black container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-2xl font-bold">
              <NavLink to="/">E-commerce</NavLink>
            </h4>
          </div>
          <div className="flex gap-4">
            <button className=" text-black px-4 py-2 hover:underline">
              <NavLink to="/product">Product</NavLink>
            </button>
            <button className=" text-black px-4 py-2 hover:underline">
              <NavLink to="/cart">Cart</NavLink>
            </button>
            <button className=" text-black px-4 py-2 hover:underline">
              <NavLink to="/about">About</NavLink>
            </button>
            <button className=" text-black px-4 py-2 hover:underline">
              <NavLink to="/contact">Contact</NavLink>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
