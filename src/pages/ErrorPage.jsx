import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" bg-gray-100 flex justify-center   px-4  min-h-screen  ">
      <div className="text-center w-full h-full mt-40 px-8 rounded-lg bg-white shadow-md max-w-[350px] py-15 ">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Page not found
          {{ error } && (
            <p className="mt-4 text-xl font-normal  text-gray-900">
              {error.data}
            </p>
          )}
        </h2>
        <div className="mt-5">
          <NavLink
            to="/"
            className="mt-3 inline-block px-6 py-3 text-[18px] text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition duration-200"
          >
            Go back home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
