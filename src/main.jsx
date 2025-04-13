import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import QuemSomos  from './quemSomos.jsx'
import Login from './login.jsx'
import Petsitter from './petsitter.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quemSomos",
    element: <QuemSomos />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/petsitter",
    element: <Petsitter/>,
  },
  {
    path: "/tutor",
    element: <Login />,
  },

 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
