import ReactDOM from "react-dom/client";
import "./main.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home/Home";
import Errorelement from "./pages/Errorelement/Errorelement";
import Search from "./pages/Search/Search";
import Index from "./Index";
//index es como el app
import MuiThemeProvider from "./theme";
import Register from "./pages/Register/Register";
import { AuthProvider } from "./context/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Index />}>
      <Route path="*" element={<Errorelement />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MuiThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </MuiThemeProvider>
  </Provider>
);
