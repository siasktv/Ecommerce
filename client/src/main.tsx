import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home/Home";
import Errorelement from "./pages/Errorelement/Errorelement";
import Search from "./pages/Search/Search";
import Index from "./Index";
//index es como el app
import MuiThemeProvider from "./theme";
import Register from "./pages/Register/Register";

const router = createBrowserRouter([
  {
    element: <Index />,
    errorElement: <Errorelement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <Search /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RouterProvider router={router} />
    </MuiThemeProvider>
  </Provider>
);
