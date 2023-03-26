import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { saveArchivos, uploaFiles } from "../services/firebase";
import swal from "sweetalert";

export default function Register() {
  const [file, setFile] = useState(null);
  const [urlImg, seturlImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    setIsLoading(true);

    e.preventDefault();
    const result = await uploaFiles(file);
    seturlImg(result);

    const nombre = formData.get("name");
    const apellido = formData.get("lastName");
    const cedula = formData.get("id");
    const nMadre = formData.get("name_madre");
    const nPadre = formData.get("name_padre");
    const idPadre = formData.get("idPadre");
    const idMadre = formData.get("idMadre");
    const img = result;

    const newObj = {
      nombre,
      apellido,
      cedula,
      nMadre,
      nPadre,
      idPadre,
      idMadre,
      img,
    };

    await saveArchivos(newObj)
      .then(
        swal(
          "Registro Exitoso",
          "Gracias por registrarte, Espera nuestro llamado",
          "success"
        )
      )
      .then(() => {
        setIsLoading(false); // establecer el estado de carga en falso cuando se completa la operación
        navigate("/Students");
      });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Container maxWidth="sm" sx={{ bgcolor: "#fff", p: 3 }}>
        <Typography variant="h4" align="center" mb={3}>
          Registro de estudiante
        </Typography>
      </Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Nombre completo del estudiante"
          name="name"
          id="name"
          mb={2}
          required
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          label="Apellido"
          name="lastName"
          id="lastName"
          mb={2}
          required
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          label="Documento de identidad del estudiante (opcional)"
          name="id"
          id="id"
          mb={2}
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          label="Nombre completo de la madre"
          name="name_madre"
          id="name_madre"
          mb={2}
          required
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          label="Nombre completo del padre"
          name="name_padre"
          id="name_padre"
          mb={2}
          required
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          label="Documento de identidad del padre"
          name="idPadre"
          id="idPadre"
          mb={2}
          required
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          label="Documento de identidad de la madre"
          name="idMadre"
          id="idMadre"
          mb={2}
          required
          sx={{ my: 1 }}
        />
        <TextField
          fullWidth
          type="file"
          name="file"
          id="file"
          mb={2}
          required
          onChange={(e) => setFile(e.target.files[0])}
          sx={{ my: 1 }}
          InputLabelProps={{
            shrink: true,
            sx: { mr: 0, my: 0 },
          }}
          label="imagen del estudiante"
        />
        {isLoading ? (
          <Typography variant="body1" align="center" mt={2}>
            Cargando...
          </Typography>
        ) : null}
        <Stack>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
