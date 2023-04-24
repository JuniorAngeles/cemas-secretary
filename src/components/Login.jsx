import { loginWithGoogle } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Stack, Grid, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

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
          <Stack
            sx={{
              height: "auto",
              width: "600px",
              alignItems: "center",
            }}
          >
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
      </animated.div>
    </Grid>
  );
}
