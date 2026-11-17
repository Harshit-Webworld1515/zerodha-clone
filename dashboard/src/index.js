import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import { CookiesProvider } from "react-cookie";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(data.status))
      .catch(() => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <h2>Loading...</h2>;

  if (!isAuthenticated) {
    window.location.href = "http://localhost:5173/login";
    return <h2>Redirecting...</h2>;
  }

  return <Home />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);