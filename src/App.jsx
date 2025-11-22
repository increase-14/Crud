import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CrudPage from "./pages/CrudPage";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

import ProfileLayout from "./components/ProfileLayout";
import Profile from "./pages/profile/Profile";
import Orders from "./pages/profile/Orders";
import Address from "./pages/profile/Address";

import PrivateRoute from "./components/PrivateRoute";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<TodoPage />} />

        <Route element={<PrivateRoute />}>
        <Route path="/td" element={<HomePage />} />
          <Route path="/crud" element={<CrudPage />} />
          <Route path="/todo" element={<TodoItem />} />
          <Route path="/todolist" element={<TodoList />} />
          
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="address" element={<Address />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
