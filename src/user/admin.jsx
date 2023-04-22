import { Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

export default function Admin() {
  return (
    <>
      <h1>Bienvenido Admin</h1>
      <Box
        mt={30}
        sx={{
          textAlign: "center",
        }}
      >
        <Link to="/Register_student">
          <Button variant="contained" sx={{ marginRight: 5 }}>
            Agregar Estudiante
          </Button>
        </Link>

        <Link to="/Students">
          <Button variant="contained">Ver Estidiantes Guardados</Button>
        </Link>
      </Box>
    </>
  );
}
