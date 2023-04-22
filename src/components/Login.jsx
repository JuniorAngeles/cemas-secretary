import { loginWithGoogle, loginWithGihub } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Stack, Typography, Grid, Paper } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSpring, animated } from "@react-spring/web";

export function Login() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Animation In stack for login
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // login with google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((user) => {
        const { uid, displayName, photoURL, email } = user;
        setUser({ uid, displayName, photoURL, email });
        localStorage.setItem("uid", uid); // Guardar el uid en el localStorage
        localStorage.setItem("email", email);
        if (email === "cemasfeyalegria373@gmail.com") {
          navigate("/AdminCemas"); // Si el uid está en el localStorage, redirigir al usuario a la ruta "/Students"
        } else {
          navigate("/Cemas.com");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login with GitHub
  const handleGitHubLogin = () => {
    loginWithGihub()
      .then((user) => {
        const { uid, displayName, photoURL } = user;
        setUser({ uid, displayName, photoURL });
        localStorage.setItem("uid", uid); // Guardar el uid en el localStorage
        navigate("/Cemas.com");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid
      mt={20}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <animated.div style={fadeIn}>
        <Stack>
          <Paper elevation={10}>
            <Stack
              sx={{
                height: "auto",
                width: "600px",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4s"
                style={{
                  fontWeight: "bold",
                  fontSize: "4rem",
                  marginBottom: 30,
                }}
              >
                Login
              </Typography>

              <Button
                onClick={handleGoogleLogin}
                startIcon={<GoogleIcon />}
                variant="contained"
                disableElevation
                color="secondary"
                sx={{
                  backgroundColor: "#ff0000",
                  fontWeight: "bold",
                  height: "60px",
                  width: "300px",
                  margin: 2,
                  transition: "all 0.5s ease",
                }}
              >
                Login with Google
              </Button>
              <Button
                onClick={handleGitHubLogin}
                startIcon={<GitHubIcon />}
                variant="contained"
                disableElevation
                color="secondary"
                sx={{
                  backgroundColor: "#000000",
                  fontWeight: "bold",
                  width: "300px",
                  height: "60px",
                  margin: 2,
                  transition: "all 0.5s ease",
                }}
              >
                Login with GitHub
              </Button>
            </Stack>
          </Paper>
        </Stack>
      </animated.div>
    </Grid>
  );
}
