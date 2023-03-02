import ReactDOM from 'react-dom/client'
import './main.css'
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
// import Home from './pages/Home/Home'

import Search from './pages/Search/Search'

import { CheckoutSuccess } from './pages/Checkout/CheckoutSuccess'
//index es como el app
import MuiThemeProvider from './theme'
import { ToastContainer } from 'react-toastify'
import Register from './pages/Auth/Register'
import LoginPage from './pages/Auth/Login'
import Dashboard from './components/Admin/Dashboard'
import Products from './components/Admin/Products'
import Summary from './components/Admin/Summary'
import Index from './Index'
import ProductCreate from './components/Admin/ProductCreate'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      // { path: '/', element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/checkout-success', element: <CheckoutSuccess /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '/admin',
    element: <Dashboard />,
    children: [
      {
        path: 'products',
        element: <Products />,
        // children: [{ path: 'create', element: <ProductCreate /> }],
      },
      { path: 'summary', element: <Summary /> },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </MuiThemeProvider>
  </Provider>
)
