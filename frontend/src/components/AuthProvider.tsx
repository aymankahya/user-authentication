import { PropsWithChildren, createContext, useEffect, useState } from "react";

type User = {
  user: { _id: string; username: string; password: string };
  loggedIn: boolean;
};

type AuthProviderProps = PropsWithChildren;

export const AuthContext = createContext<User | null>(null);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const retrieveUser = async () => {
      const response = await fetch("http://localhost:3000/", {
        credentials: "include",
      });
      const user = await response.json();
      if (user.loggedIn) {
        setUser(user);
      } else {
        setUser(null);
      }
    };

    retrieveUser();
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
