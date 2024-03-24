import { redirect } from "react-router";

export const redirectToLogin = async () => {
  return redirect("/login");
};
