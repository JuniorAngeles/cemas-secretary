import Header from "../components/HeaderUser";
import { Grid, Typography } from "@mui/material";
import swal from "sweetalert";
import { infoArray } from "./info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../styles/font.css";
import cemas from "../assets/cemas.jpg";

export default function User() {
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
        <Typography
          sx={{
            fontSize: "3rem",
            color: "blue",
            fontWeight: "bold",
            marginTop: "5%",
          }}
        >
          Centro Educativo Manuel Acevedo Serrano
        </Typography>
        <Typography
          sx={{
            fontSize: "2rem",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          "Fe y Alegría"
        </Typography>
      </Grid>
    </>
  );
}
