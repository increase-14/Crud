import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/adminSlice";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  const handleAdminLogin = () => {
    dispatch(
      login({
        user: {
          name: "Azizbek",
          age: 15,
          adres: "Tashkent Chilonzor",
          role: "admin",
        },
      })
    );
    setShowModal(false);
    navigate("/profile");
  };

  const handleGuestLogin = () => navigate("/");

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="bg-blue-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>

          {isAuth ? (
            <div className="flex gap-6 items-center">
              <NavLink to="/" className="hover:text-yellow-300">
                Home
              </NavLink>
              <NavLink to="/crud" className="hover:text-yellow-300">
                CRUD
              </NavLink>
              <NavLink to="/td" className="hover:text-yellow-300">
                Todo
              </NavLink>
              <NavLink to="/todolist" className="hover:text-yellow-300">
                TodoList
              </NavLink>
              <NavLink to="/profile" className="hover:text-yellow-300">
                Profile
              </NavLink>

              <span className="px-4 py-1 bg-white/20 rounded text-sm">
                {user?.name}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                Admin Kirish
              </button>

              <button
                onClick={handleGuestLogin}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
              >
                Gostkirish
              </button>
            </div>
          )}
        </div>
      </nav>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold text-center mb-6">Admin</h2>

            <div className="text-center mb-6">
              <p className="font-semibold">Login: Azizbek</p>
              <p className="text-gray-500">Parol: 12345</p>
            </div>

            <button
              onClick={handleAdminLogin}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded mb-3"
            >
              Kirish
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="block mx-auto text-sm text-gray-600"
            >
              Bekor qilish
            </button>
          </div>
        </div>
      )}

      <main className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
