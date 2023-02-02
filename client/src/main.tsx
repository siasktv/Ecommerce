import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Errorelement from "./pages/Errorelement/Errorelement";
import Search from "./pages/Search/Search";

const router = createBrowserRouter([
  {
    element: <Navbar />,
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
