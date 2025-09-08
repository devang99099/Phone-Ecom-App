import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">E-Commerce</h3>
          <p className="text-sm text-gray-600">
            Your one-stop shop for the latest and most affordable smartphones.
            Discover, compare, and buy from our wide collection.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-black hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className="hover:text-black hover:underline"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-black hover:underline">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-black hover:underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-black hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black hover:underline">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black hover:underline">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black hover:underline">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-600 mb-2">
            Email: support@ecommerce.com
          </p>
          <p className="text-sm text-gray-600 mb-2">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-600">
            Location: Surat, Gujrat, India
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-4 bg-white text-center text-sm text-gray-500">
        © {new Date().getFullYear()} E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
