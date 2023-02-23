import ReactDOM from 'react-dom/client'
import './main.css'
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Home from './pages/Home/Home'

import Search from './pages/Search/Search'

// import Index from './Index'
import { CheckoutSuccess } from './pages/Checkout/CheckoutSuccess'
//index es como el app
import MuiThemeProvider from './theme'
import { ToastContainer } from 'react-toastify'
import Register from './pages/Auth/Register'

const router = createBrowserRouter([
  {
    // element: <Index />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/checkout-success', element: <CheckoutSuccess /> },
      { path: '/register', element: <Register /> },
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
