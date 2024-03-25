import { Button, Typography } from "@mui/material";

import { useLogout } from "../hooks/useLogout";
import { useGetUser } from "../hooks/useGetUser";

function Home() {
  const { logout } = useLogout();
  const { user } = useGetUser();

  const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logout();
  };

  return (
    <>
      <Typography
        variant="h1"
        fontSize={"2rem"}
        sx={{ margin: "1rem", fontWeight: "bold" }}
      >
        Hello <em>{user?.username}</em>
      </Typography>
      <form onSubmit={handleLogout}>
        <Button
          type="submit"
          size="small"
          variant="contained"
          color="error"
          sx={{ position: "absolute", right: 0, top: 0, margin: "1rem" }}
        >
          Logout
        </Button>
      </form>
    </>
  );
}

export default Home;
