import { useState } from "react";

type User = {
  id: string;
  username: string;
};

export const useGetUser = () => {
  const userStored = JSON.parse(localStorage.getItem("user") ?? "{}").user;
  const [user, setUser] = useState<User | null>(userStored ?? null);

  const updateUser = (newUser: User | null) => setUser(newUser);

  return { user, updateUser };
};
