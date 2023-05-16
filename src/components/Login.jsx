import { loginWithGoogle } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Stack, Grid, Typography, Paper } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import cemas from "../assets/cemas.jpg";

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
        localStorage.setItem("photoURL", photoURL);
        localStorage.setItem("displayName", displayName);
        if (email === "cemasfeyalegria373@gmail.com") {
          navigate("/Students"); // Si el uid está en el localStorage, redirigir al usuario a la ruta "/Students"
        } else {
          navigate("/Cemas.com");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    const email = localStorage.getItem("email");
    if (uid && email === "cemasfeyalegria373@gmail.com") {
      navigate("/Students");
    }

    if (uid && email !== "cemasfeyalegria373@gmail.com") {
      navigate("/Cemas.com");
    }
  });

  return (
    <animated.div style={fadeIn}>
      <Grid
        sx={{
          backgroundImage: `url(${cemas})`, // Establece la imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={20}
          sx={{
            marginTop: 5,
            background: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "4rem",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Sign In
          </Typography>
          <Stack>
            <Stack
              sx={{
                height: "auto",
                width: "400px",
                alignItems: "center",
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              {" "}
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
              <Typography
                sx={{
                  fontSize: "10px",
                }}
              >
                Add Google Sign In Button to WebSite
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
    </animated.div>
  );
}
