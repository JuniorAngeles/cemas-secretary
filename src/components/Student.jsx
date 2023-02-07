import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Student({ student }) {
  return (
    <Box>
      <Typography>{student.nombre}</Typography>
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
