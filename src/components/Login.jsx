import { loginWithGoogle } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
export function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((user) => {
        const { uid, displayName, photoURL } = user;
        setUser({ uid, displayName, photoURL });
        localStorage.setItem("uid", uid); // Guardar el uid en el localStorage
        navigate("/Students");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const uid = localStorage.getItem("uid"); // Obtener el uid del localStorage
    if (uid) {
      navigate("/Students"); // Si el uid está en el localStorage, redirigir al usuario a la ruta "/Students"
    }
  }, [navigate]);

  return (
    <Box
      mt={30}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={handleGoogleLogin}
        startIcon={<GoogleIcon />}
        variant="contained"
        disableElevation
        color="error"
        sx={{ backgroundColor: "#ff0000", fontWeight: "bold", height: "60px" }}
      >
        Login with Google
      </Button>
    </Box>
  );
}
