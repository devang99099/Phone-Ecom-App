import React from "react";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-black mt-10 pt-5">
      <div className="border-t border-gray-700 mt-5"></div>

      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>
          Copyright &copy; 2024, All Right Reserved{" "}
          <NavLink to="/" className="text-blue-500 font-medium">
            E-commerce
          </NavLink>
        </p>
        <ul className="flex gap-4 flex-wrap">
          <li>
            <NavLink to="/" className="hover:text-black">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-black">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-black">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/country" className="hover:text-black">
              Country
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
