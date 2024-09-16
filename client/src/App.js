import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Dashboard/Main";
import Login from "./components/Login/Login";
import "./App.css";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Main />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
