import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/navbar.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Flyers from './components/Flyers.jsx'
import Flyer from './components/Flyer.jsx'
import AdminPage from './components/adminPage.jsx'
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
