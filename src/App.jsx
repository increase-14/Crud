import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CrudPage from "./pages/CrudPage";

const Navbar = () => {
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

const App = () => {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crud" element={<CrudPage />} />
        </Routes>
    </>
  );
};

export default App;
