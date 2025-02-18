import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Flyers from './components/Flyers.jsx'
import Flyer from './components/Flyer.jsx'
import AdminPage from './components/adminPage.jsx'
import Map from './components/Map.jsx'
import ProductPage from './components/productPage.jsx'
import AdminLogin from './components/adminLogin.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/flyers",
    element: <Flyers/>,
  },
  {
    path: "/flyer/:id",
    element: <Flyer/>,
  },
  {
    path: "/adminPage",
    element: <AdminPage/>,
  },
  {
    path: "/locations",
    element: <Map/>,
  },
  {
    path: "/product/:id",
    element: <ProductPage/>
  },
  {
    path: "/admin-login-stokomak",
    element: <AdminLogin/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
