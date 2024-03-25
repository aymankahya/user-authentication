import { useState } from "react";
import { useNavigate } from "react-router";

export const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const signup = async (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      username: { value: string };
      password: { value: string };
    };
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/signup`, {
        method: "POST",
        body: JSON.stringify({
          username: formElements.username.value,
          password: formElements.password.value,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const jsonRes = await response.json();

      navigate(`/login?status=${encodeURIComponent(jsonRes.msg)}`);

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return { loading, signup };
};
