import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Shaxsiy ma'lumotlar</h2>
      <div className="space-y-3 text-lg">
        <p>
          <strong>Ism:</strong> {user?.name}
        </p>
        <p>
          <strong>Yosh:</strong> {user?.age}
        </p>
        <p>
          <strong>Manzil:</strong> {user?.adres || "Kiritilmagan"}
        </p>
      </div>
    </div>
  );
};

export default Profile;
