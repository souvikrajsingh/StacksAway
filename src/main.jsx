import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./about/About.jsx";

const router = createBrowserRouter([
  {
    // Home Page
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },

  {
    // About Page
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
