import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export default function AddTodo() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[0].value.trim();
    if (value) {
      dispatch(addTodo({ id: Date.now(), title: value, checked: false }));
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-10">
      <div className="flex gap-3 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Bugun nima qilamiz?"
          className="flex-1 px-6 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition shadow-sm"
          required
        />
        <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition shadow-lg">
          + Qo'shish
        </button>
      </div>
    </form>
  );
}
