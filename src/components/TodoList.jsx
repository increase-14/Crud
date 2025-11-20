import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {todos.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-3xl text-gray-400 font-light">
            Hozircha vazifalar yo'q
          </p>
          <p className="text-gray-500 mt-2">Yangi vazifa qo'shing</p>
        </div>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
