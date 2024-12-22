import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RandomCocktail from "./pages/RandomCocktail.jsx";
import IngredientPage from "./pages/IngredientPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/ingredient",
        element: <IngredientPage />,
      },
      {
        path: "/suggestion",
        element: <RandomCocktail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
