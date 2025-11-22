import React from "react";

const TodoPage = () => {
  return (
    <div className="flex justify-center mt-28">
      <div className="max-w-3xl  p-12 rounded-3xl shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold text-indigo-700 ">
          Bosh sahifa
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed">
          Xush kelibsiz! Bu admin panel loyihasining bosh sahifasi. Admin bo‘lib
          kirgandan so‘ng CRUD, Todo, Profil va boshqa sahifalarga o‘tishingiz
          mumkin.
        </p>
      </div>
    </div>
  );
};

export default TodoPage;
