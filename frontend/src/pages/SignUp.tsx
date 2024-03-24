import {
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
import { Link } from "react-router-dom";
import { useRedirectSignedUser } from "../hooks/useRedirectSignedUser";

function SignUp() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  useRedirectSignedUser();
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxSizing: "border-box",
            padding: "2rem",
            minWidth: "350px",
            maxWidth: "400px",
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
            Sign up
          </Typography>

          <form method="POST" action="http://localhost:3000/signup">
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
              variant="contained"
              type="submit"
              startIcon={<LoginIcon />}
              sx={{ marginTop: "1.5rem" }}
            >
              Register
            </Button>
          </form>
        </Box>
        <Typography variant="body2" sx={{ color: "black" }}>
          Already have an account ! <Link to={"/login"}>Login here</Link>
        </Typography>
      </Box>
    </>
  );
}

export default SignUp;
