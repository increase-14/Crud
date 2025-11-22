import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(
      login({
        isAuth: true,
        user: {
          id: 1,
          name: "Azizbek",
          age: 15,
          adres: "Tashkent Chilonzor",
        },
      })
    );
  }
  return (
    <nav className="bg-blue-100 shadow-md px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-lg">My App</h1>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold border-b-2 border-blue-800 pb-1"
                : "text-gray-700 hover:text-blue-700"
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/crud"
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold border-b-2 border-blue-800 pb-1"
                : "text-gray-700 hover:text-blue-700"
            }
          >
            CRUD
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
