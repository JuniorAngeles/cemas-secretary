import { grey } from "@mui/material/colors/";
import { Grid, Box, Stack, Button, Typography, Avatar } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useNavigate } from "react-router-dom";
import { deleteArchivo, editArchivo } from "../services/firebase";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import Formulario from "./EditStudent";

export default function Student({ student }) {
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  // function para eliminar Estudiantes
  const handleDelete = () => {
    if (
      window.confirm("Estas seguro de que quieres eliminar este estudiante?")
    ) {
      deleteArchivo(student.id)
        .then(
          swal({
            icon: "success",
            text: "En caso de que no se presenten los datos recarga la pagina",
          })
        )
        .then(navigate("/"));

      // location.reload();
      // console.log("Hola");
    }
  };

  const handleEditArchivo = () => {
    setShowForm(true);
  };

  // function que guarda los cambios realizados

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
            {student.nombre} {student.apellido}
          </Typography>

          <Typography sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
            {!student.cedula ? "no existe" : ""} {student.cedula}
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
            {student.nombre} hijo de {student.nMadre} y {student.nPadre}{" "}
            estudiante del centro educativo manuel acevedo serrano fe y alegria
          </Typography>

          <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
            {student.nMadre} {!student.nMadre ? "no registrado" : ""} Documento
            de identidad: {!student.idMadre ? "no registrado" : ""}{" "}
            {student.idMadre}
          </Typography>
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
            {!student.nPadre ? "no registrado" : ""} {student.nPadre} Documento
            de identidad: {!student.idPadre ? "no registrado" : ""}{" "}
            {student.idPadre}
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            gap="1rem"
            sx={{
              marginTop: "2rem",
            }}
          >
            {!showForm && (
              <Button
                variant="contained"
                target="_blank"
                sx={{ width: "120px", backgroundColor: "#5774FF" }}
                onClick={handleEditArchivo}
              >
                Editar
              </Button>
            )}
            {showForm && <Formulario student={student} />}

            {!showForm && (
              <Button
                variant="contained"
                target="_blank"
                sx={{ width: "120px", backgroundColor: "#5774FF" }}
                onClick={handleDelete}
              >
                Eliminar
              </Button>
            )}
          </Stack>
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
            src={student.img}
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
