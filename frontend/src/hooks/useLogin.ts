import { useState } from "react";
import { useNavigate } from "react-router";
import { useGetUser } from "./useGetUser";

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { updateUser } = useGetUser();
  const navigate = useNavigate();

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      username: { value: string };
      password: { value: string };
    };
    setLoading(true);
    try {
      const result = await fetch(`${import.meta.env.VITE_SERVER}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formElements.username.value,
          password: formElements.password.value,
        }),
      });

      const jsonRes = await result.json();

      if (!jsonRes.success) {
        setLoading(false);
        return navigate(`/login?e=${jsonRes.error}`);
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ user: jsonRes.user, token: jsonRes.token })
      );
      updateUser(jsonRes.user);

      navigate("/home");

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return { loading, login };
};
