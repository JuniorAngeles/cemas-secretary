import { useEffect, useState } from "react";
import { traerDatos } from "../services/firebase";
import Student from "./Student";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ViewStundents() {
  const [data, setData] = useState([]);

  useEffect(() => {
    traerDatos().then(setData);
    // console.log(data);
  }, []);

  if (data.length == 0) {
    return (
      <Box
        mt={30}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography sx={{}}>!No hay datos de momento...</Typography>
        <Link to="/Register_student">
          <Button variant="contained">Agregar Estudiante</Button>
        </Link>
      </Box>
    );
  }
  return (
    <>
      <div>
        {data.map((student) => {
          return <Student key={student.id} student={student} />;
        })}
      </div>
    </>
  );
}
