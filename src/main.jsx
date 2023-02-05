import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Crypto from "./pages/crypto";
import Trending from "./pages/trending";
import Saved from "./pages/saved";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "/",
//         element: <Crypto />,
//       },
//       {
//         path: "/trending",
//         element: <Trending />,
//       },
//       {
//         path: "/saved",
//         element: <Saved />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
