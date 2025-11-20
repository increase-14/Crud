import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../store/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  const save = () => {
    const trimmed = text.trim();
    if (trimmed) {
      dispatch(editTodo({ id: todo.id, title: trimmed }));
    }
    setEditing(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-5 flex items-center gap-4 group">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="w-6 h-6 rounded border-2 border-gray-300 checked:bg-blue-600 checked:border-blue-600 focus:ring-2 focus:ring-blue-400 cursor-pointer transition"
      />

      {editing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          autoFocus
          className="flex-1 px-3 py-2 text-lg font-medium bg-gray-50 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:bg-white transition"
        />
      ) : (
        <span
          className={`flex-1 text-lg ${
            todo.checked
              ? "line-through text-gray-400"
              : "text-gray-800 font-medium"
          }`}
        >
          {todo.title}
        </span>
      )}

      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {editing ? (
          <>
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={save}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700"
            >
              Saqlash
            </button>
            <button
              onClick={() => {
                setText(todo.title);
                setEditing(false);
              }}
              className="px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-lg hover:bg-gray-600"
            >
              Bekor
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="px-4 py-2 bg-amber-500 text-white text-sm font-medium rounded-lg hover:bg-amber-600"
          >
            Tahrirlash
          </button>
        )}
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600"
        >
          O'chirish
        </button>
      </div>
    </div>
  );
}
