import Header from "../components/HeaderUser";
import { Grid, Typography, Paper } from "@mui/material";
import swal from "sweetalert";
import { infoArray } from "./info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/font.css";
import cemas from "../assets/cemas.jpg";

export default function User() {
  const name = localStorage.getItem("displayName");
  swal("Bienvenido", `${name}`);
  return (
    <>
      <Header />
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
          elevation={10}
          sx={{
            background: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              color: "black",
              fontWeight: "bold",
              marginTop: "5%",
              textAlign: "center",
              marginLeft: "2.5rem",
              marginRight: "2.5rem",
            }}
          >
            Centro Educativo Manuel Acevedo Serrano
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            "Fe y Alegría"
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
