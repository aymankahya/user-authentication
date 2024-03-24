import { Button, Typography } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

function Home() {
  const user = useAuth();

  return (
    <>
      <Typography
        variant="h1"
        fontSize={"2rem"}
        sx={{ margin: "1rem", fontWeight: "bold" }}
      >
        Hello <em>{user?.user.username}</em>
      </Typography>
      <form action="http://localhost:3000/logout" method="POST">
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
