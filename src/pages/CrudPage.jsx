import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, update, remove } from "../store/crudSlice";

export default function CrudPage() {
  const products = useSelector((state) => state.crud.data);
  const dispatch = useDispatch();

  const [form, setForm] = useState({ id: null, name: "", price: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    if (!form.name || !form.price) return;

    if (form.id) {
      dispatch(update(form));
    } else {
      dispatch(
        add({
          id: Date.now(),
          name: form.name,
          price: +form.price,
        })
      );
    }

    setForm({ id: null, name: "", price: "" });
  };

  const editHandler = (item) => {
    setForm(item);
  };

  const deleteHandler = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          CRUD — Mahsulotlar
        </h1>

        <form
          onSubmit={submitHandler}
          className="bg-white shadow-md p-5 rounded-lg mb-8 border"
        >
          <h2 className="text-xl font-semibold mb-4">
            {form.id ? "Mahsulotni yangilash" : "Yangi mahsulot qo‘shish"}
          </h2>

          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Nom..."
              className="border p-2 rounded w-full"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="number"
              placeholder="Narx..."
              className="border p-2 rounded w-40"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: +e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition font-semibold"
          >
            {form.id ? "Saqlash" : "Qo‘shish"}
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 border shadow rounded-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-blue-600 font-bold text-xl mt-1">
                  {item.price} $
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => editHandler(item)}
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 font-medium"
                >
                  Tahrirlash
                </button>

                <button
                  onClick={() => deleteHandler(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 font-medium"
                >
                  O‘chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
