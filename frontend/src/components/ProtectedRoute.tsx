import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user, navigate]);

  return children;
}
