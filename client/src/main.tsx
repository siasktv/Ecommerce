import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Errorelement from "./pages/Errorelement/Errorelement";
import Search from "./pages/Search/Search";
import Index from "./Index";

const router = createBrowserRouter([
  {
    element: <Index />,
    errorElement: <Errorelement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
