import { grey } from "@mui/material/colors/";
import { Grid, Box, Stack, Button, Typography, Avatar } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function Student({ student }) {
  // console.log(student.id);
  return (
    <>
      <Grid
        container
        flexDirection={{ xs: "column", md: "row", lg: "row", xl: "row" }}
        gap="3rem"
        alignItems="center"
        justifyContent="center"
        sx={student.id % 2 === 0 ? { flexDirection: "row-reverse" } : {}}
      >
        <Grid
          item
          width={{ xs: "100%", md: "50%", lg: "50%", lx: "50%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "#637DFF",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {student.nombre}
          </Typography>
          <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
            No.cedula: {""} {student.cedula}
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
            {student.nombre} hijo de {student.nMadre} y {student.nPadre}{" "}
            estudiante del centro educativo manuel acevedo serrano fe y alegria
          </Typography>
        </Grid>
        <Grid
          item
          width={{ xs: "70vw", md: "30vw" }}
          sx={{
            border: "3px solid grey",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              borderBottom: "2px solid grey",
              display: "flex",
              gap: "5px",
              padding: "10px",
            }}
          >
            <CircleIcon sx={{ fill: "#FF4A4A", fontSize: "1rem" }} />
            <CircleIcon sx={{ fill: "#FEB83D", fontSize: "1rem" }} />
            <CircleIcon sx={{ fill: "#01C542", fontSize: "1rem" }} />
            <Box
              sx={{
                backgroundColor: `${grey[800]}`,
                width: "600px",
                borderRadius: "5px",
              }}
            ></Box>
          </Box>
          <Avatar
            src={""}
            alt={student.nombre}
            sx={{ width: "100%", height: "auto", borderRadius: 0 }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          height: "65vh",
        }}
      ></Box>
    </>
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
