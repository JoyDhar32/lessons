import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.jsx";
import Profiles from "./Pages/Profiles.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Pages/Profile.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <NotFound />},
  { path: "/profiles", element: <Profiles /> },
  {path: "/profiles/:profileId", element: <Profile />}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
