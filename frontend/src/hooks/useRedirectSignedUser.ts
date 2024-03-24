import { useNavigate } from "react-router";
import { useAuth } from "./useAuth";
import { useEffect } from "react";

export const useRedirectSignedUser = () => {
  const user = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
};
