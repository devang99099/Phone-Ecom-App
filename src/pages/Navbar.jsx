import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Products", path: "/product" },
    { name: "Cart", path: "/cart" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md text-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <NavLink to="/" className="text-2xl font-bold">
          E-commerce
        </NavLink>

        
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-blue-600 transition ${
                  isActive ? "text-blue-600 underline" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden  text-center bg-white px-6 pb-4 flex flex-col gap-4 border-t border-gray-200">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-blue-600 transition first-line:mt-2 ${
                  isActive ? "text-blue-600 underline" : ""
                }${index === 0 ? "mt-4" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
