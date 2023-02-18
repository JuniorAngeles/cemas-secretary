import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function Student({ student }) {
  return (
    <Box
      sx={{
        with: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          x1: 500,
        },
        height: {
          xs: 900,
          sm: 700,
          md: 800,
          lg: 900,
          x1: 1000,
        },
      }}
    >
      <Box
        ml={10}
        mr={10}
        sx={{
          with: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            x1: 500,
          },

          border: 1,
        }}
      >
        <Typography
          sx={{
            with: {
              xs: 100,
              sm: 200,
              md: 300,
              lg: 400,
              x1: 500,
            },

            fontSize: "35px",
            color: "black",
            fontFamily: "cursive",
            textAlign: "justify",
            alignContent: "center",
          }}
        >
          <strong>Nombre:</strong> {student.nombre} <br />{" "}
          <strong>Apellido:</strong> {student.apellido} <br />{" "}
          <strong>Cedula:</strong> {student.cedula} <br />{" "}
          <strong>N.Madre:</strong> {student.nMadre} <br />{" "}
          <strong>N.Padre:</strong> {student.nPadre}
          <br /> <strong>C.Padre:</strong> {student.idPadre}
          <br /> <strong>C.Madre:</strong> {student.idMadre}
        </Typography>
      </Box>
    </Box>
  );
}
{
  /* <h1>{student.nombre}</h1>
<h1>{student.apellido}</h1>
<h1>{student.cedula}</h1>
<h1>{student.nMadre}</h1>
<h1>{student.nPadre}</h1>
<h1>{student.idPadre}</h1>
<h1>{student.idMadre}</h1>
<h1>**************************</h1> */
}
