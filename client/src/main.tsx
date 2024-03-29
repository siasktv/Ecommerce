import ReactDOM from 'react-dom/client'
import './main.css'
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
// import Home from './pages/Home/Home'

import Search from './pages/Search/Search'

//index es como el app
import MuiThemeProvider from './theme'
import { ToastContainer } from 'react-toastify'
import Register from './pages/Auth/Register'
import LoginPage from './pages/Auth/Login'
import Dashboard from './components/Admin/Dashboard'
import Products from './components/Admin/Products'
import Summary from './components/Admin/Summary'
import Index from './Index'
import Product from './components/Admin/details/ProductDetail'
import Orders from './components/Admin/Orders'
import Order from './components/Admin/details/OrderDetail'
import Users from './components/Admin/Users'
import UserProfile from './components/Admin/details/UserProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      { path: '/', element: <Search /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '/admin',
    element: <Dashboard />,
    children: [
      { path: 'products', element: <Products /> },
      { path: 'summary', element: <Summary /> },
      { path: 'users', element: <Users /> },
      { path: 'orders', element: <Orders /> },
      { path: 'orders/:id', element: <Order /> },
      { path: 'products/:id', element: <Product /> },
      { path: 'users/:id', element: <UserProfile /> },
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
