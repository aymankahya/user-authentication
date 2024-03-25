import { PropsWithChildren, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { useGetUser } from "../hooks/useGetUser";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const { user, updateUser } = useGetUser();

  useEffect(() => {
    const checkAuthorization = async () => {
      const jwt = JSON.parse(localStorage.getItem("user") ?? "{}").token;

      if (!jwt) navigate("/login");

      const response = await fetch(`${import.meta.env.VITE_SERVER}/auth`, {
        method: "POST",
        headers: { Authorization: `${jwt}` },
      });

      if (response.status === 401) {
        localStorage.removeItem("user");
        updateUser(null);
      }
    };

    checkAuthorization();
  }, [updateUser, navigate]);

  return user ? children : <Navigate to={"/login"} />;
}
