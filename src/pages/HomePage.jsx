import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Todo List
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;