import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./cpmponents/HomePage";
import LoginForm from "./cpmponents/LoginForm";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route index path="/" element={<App />} />
        <Route index path="/login" element={<LoginForm />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
