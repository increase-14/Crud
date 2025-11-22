import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProfileLayout = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Salom, {user?.name}!</h1>

        <div className="flex gap-8">
          <aside className="w-64 bg-white rounded-lg shadow p-6">
            <nav className="space-y-4">
              <NavLink
                to="/profile"
                end
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-600 hover:text-blue-600 pl-3"
                }
              >
                Profil
              </NavLink>
              <NavLink
                to="/profile/orders"
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-600 hover:text-blue-600 pl-3"
                }
              >
                Buyurtmalar
              </NavLink>
              <NavLink
                to="/profile/address"
                className={({ isActive }) =>
                  isActive
                    ? "block font-bold text-blue-600 border-l-4 border-blue-600 pl-3"
                    : "text-gray-600 hover:text-blue-600 pl-3"
                }
              >
                Manzil
              </NavLink>
            </nav>
          </aside>

          <div className="flex-1 bg-white rounded-lg shadow p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
