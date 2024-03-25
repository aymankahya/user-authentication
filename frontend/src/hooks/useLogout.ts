import { useNavigate } from "react-router";

import { useGetUser } from "./useGetUser";

export const useLogout = () => {
  const navigate = useNavigate();
  const { updateUser } = useGetUser();

  const logout = () => {
    localStorage.removeItem("user");
    updateUser(null);
    navigate("/login");
  };

  return { logout };
};
