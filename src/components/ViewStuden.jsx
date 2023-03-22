import { useEffect, useState } from "react";
import { traerDatos } from "../services/firebase";
import Student from "./Student";
import { Typography, Box, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

export default function ViewStundents() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      traerDatos().then((data) => {
        setIsLoading(false);
        setData(data);
      });
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <Box
        mt={30}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress color="primary" size={80} />
      </Box>
    );
  }

  if (data.length === 0) {
    return (
      <Box
        mt={30}
        sx={{
          textAlign: "center",
        }}
      >
        <Typography>¡No hay datos de momento!</Typography>
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
