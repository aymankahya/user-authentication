import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useSearchParams } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [params] = useSearchParams();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { loading, login } = useLogin();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(e);
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {params.get("status") === "user already exists" ? (
          <Alert severity="error" sx={{ minWidth: "400px" }}>
            User already exists ! Log in with your credentials here
          </Alert>
        ) : params.get("status") === "user created success" ? (
          <Alert severity="success" sx={{ minWidth: "400px" }}>
            User created successfully ! Connect using your credentials here
          </Alert>
        ) : params.get("e") === "Incorrect password" ? (
          <Alert severity="error" sx={{ minWidth: "400px" }}>
            The password you entered is incorrect !
          </Alert>
        ) : params.get("e") === "Incorrect username" ? (
          <Alert severity="error" sx={{ minWidth: "400px" }}>
            The username you entered is incorrect !
          </Alert>
        ) : (
          ""
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxSizing: "border-box",
            padding: "2rem",
            minWidth: "350px",
            border: "1px solid",
            borderColor: "grey.400",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h1"
            fontSize={"2rem"}
            fontWeight={"bold"}
            sx={{ marginBottom: "1rem" }}
          >
            Log in
          </Typography>

          <form onSubmit={handleLogin}>
            <TextField
              name="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              fullWidth
              size="small"
              required
            />
            <TextField
              name="password"
              type={showPassword ? "text" : "password"}
              sx={{ marginTop: "1rem" }}
              label="Password"
              variant="outlined"
              fullWidth
              size="small"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              disabled={loading}
              variant="contained"
              type="submit"
              startIcon={<LoginIcon />}
              sx={{ marginTop: "1.5rem" }}
            >
              Sign in
            </Button>
          </form>
        </Box>
        <Typography variant="body2" sx={{ color: "black" }}>
          Don't have an account yet.
          <Link to={"/signup"}>Create an account here</Link>
        </Typography>
      </Box>
    </>
  );
}

export default Login;
