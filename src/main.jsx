import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Crypto from "./pages/crypto";
import Trending from "./pages/trending";
import Saved from "./pages/saved";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

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


const customTheme = extendTheme({
  components: {
    Table: {
      variants: {
        mytable: {
          tr: {
            _odd: {
              background: "rgba(53,70,92,0.1)",
            },
            _even: {
              background: "#35465c",
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <ChakraProvider  theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
