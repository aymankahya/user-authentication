import { PropsWithChildren } from "react";
import { Navigate } from "react-router";
import { useGetUser } from "../hooks/useGetUser";

function AlreadySignedIn({ children }: PropsWithChildren) {
  // Get User from localStorage
  const { user } = useGetUser();

  return !user ? children : <Navigate to={"/home"} />;
}

export default AlreadySignedIn;
