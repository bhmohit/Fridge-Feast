import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Create from "./pages/Create.jsx"
import Learn from "./pages/Learn.jsx"
import Donate from "./pages/Donate.jsx"
import Alert from "@mui/material/Alert"

const root = ReactDOM.createRoot(document.getElementById("root"));
const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/create",
        element: <Create/>,
      },
      {
        path: "/learn",
        element: <Learn/>,
      },
      {
        path: "/donate",
        element: <Donate/>,
      },
    ],
    errorElement: (
      <Alert severity="error">
        Error, please try creating a GitHub Issue to describe the error
      </Alert>
    ),
  },
]);
root.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>);