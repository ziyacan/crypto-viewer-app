import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "react-loading-skeleton/dist/skeleton.css";

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
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
