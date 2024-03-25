import { createBrowserRouter } from "react-router-dom";
import { redirectToLogin as rootLoader } from "./redirectToLogin";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import ProtectedRoute from "../components/ProtectedRoute";
import AlreadySignedIn from "../components/AlreadySignedIn";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <AlreadySignedIn>
        <Login />
      </AlreadySignedIn>
    ),
  },
  {
    path: "/signup",
    element: (
      <AlreadySignedIn>
        <SignUp />,
      </AlreadySignedIn>
    ),
  },
]);
