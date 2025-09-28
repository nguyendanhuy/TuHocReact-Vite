import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './Pages/login.jsx';
import RegisterPage from './Pages/register.jsx';
import UserPage from './Pages/user.jsx';
import ProductPage from './Pages/product.jsx';
import './Styles/Global.css'
import TodoApp from './components/Todo/TodoApp.jsx';
import ErrorPage from './Pages/error.jsx';
import { AuthWrapper } from './context/auth.context.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/User",
        element: <UserPage />
      },
      {
        path: "/Product",
        element: <ProductPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>,
)
