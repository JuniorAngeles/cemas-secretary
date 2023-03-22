import { useState } from "react";
import { editArchivo } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Grid, Stack, Typography } from "@mui/material";

export default function Formulario({ student }) {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(student.nombre);
  const [apellido, setApellido] = useState(student.apellido);
  const [cedula, setCedula] = useState(student.cedula);
  const [nMadre, setNMadre] = useState(student.nMadre);
  const [nPadre, setNPadre] = useState(student.nPadre);
  const [idMadre, setIdMadre] = useState(student.idMadre);
  const [idPadre, setIdPadre] = useState(student.idPadre);

  //   Guardar cambios reaizados por el input
  const handleUpdateArchivo = () => {
    const updatedStudent = {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      nMadre: nMadre,
      nPadre: nPadre,
      idMadre: idMadre,
      idPadre: idPadre,
    };

    editArchivo(student.id, updatedStudent)
      .then(() => {
        swal({
          icon: "success",
          text: "Los datos del estudiante se actualizaron correctamente",
        });
      })
      .catch((error) => {
        swal({
          icon: "error",
          text: "Ocurrió un error al actualizar los datos del estudiante",
        });
        console.log(error);
      })
      .then(navigate("/"));
  };

  //  cancel edit
  // cancelar ediccion
  const handleCancelEdit = () => {
    navigate("/");
  };

  return (
    <form>
      <Grid
        container
        flexDirection={{ xs: "column", md: "row", lg: "row", xl: "row" }}
        gap="3rem"
        alignItems="center"
        justifyContent="center"
        sx={student.id % 2 === 0 ? { flexDirection: "row-reverse" } : {}}
      >
        <TextField
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          label="Nombre del Estudiante"
        />
        <TextField
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          label="Apellido del Estudiante"
        />
        <TextField
          type="text"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          label="Documento de Identidad del Estudiante"
        />
        <TextField
          type="text"
          value={nMadre}
          onChange={(e) => setNMadre(e.target.value)}
          label="Nombre de la madre del Estudiante"
        />
        <TextField
          type="text"
          value={nPadre}
          onChange={(e) => setNPadre(e.target.value)}
          label="Nombre del padre del Estudiante"
        />

        <TextField
          type="text"
          value={idMadre}
          onChange={(e) => setIdMadre(e.target.value)}
          label="Documento de indentidad de la madre "
        />
        <TextField
          type="text"
          value={idPadre}
          onChange={(e) => setIdPadre(e.target.value)}
          label="Documento de indentidad del padre "
        />
      </Grid>

      <Stack
        direction="row"
        flexWrap="wrap"
        gap="1rem"
        sx={{
          marginTop: "2rem",
        }}
      >
        <Button
          variant="contained"
          target="_blank"
          sx={{ width: "120px", backgroundColor: "#5774FF" }}
          onClick={handleUpdateArchivo}
        >
          Guardar
        </Button>
        <Button
          variant="contained"
          target="_blank"
          sx={{ width: "120px", backgroundColor: "#5774FF" }}
          onClick={handleCancelEdit}
        >
          Cancelar
        </Button>
      </Stack>
    </form>
  );
}
