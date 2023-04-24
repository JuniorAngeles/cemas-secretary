import Header from "../components/HeaderUser";
import {
  Grid,
  Box,
  Stack,
  Button,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import swal from "sweetalert";
import { infoArray } from "./info";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function User() {
  swal("Te damos la Bienvenida al CEMAS", "conocenos");

  return (
    <>
      <Header />
      <Grid marginTop={5}>
        {infoArray.map((info) => (
          <Grid
            container
            flexDirection={{ xs: "column", md: "row", lg: "row", xl: "row" }}
            gap="3rem"
            alignItems="center"
            justifyContent="center"
            sx={info.id % 2 === 0 ? { flexDirection: "row-reverse" } : {}}
            marginBottom={13}
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
                {info.Titulo}
              </Typography>

              <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                {info.Descripcion}
              </Typography>
            </Grid>
            <Grid
              item
              width={{ xs: "70vw", md: "30vw" }}
              sx={{
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {info.img !== "" ? (
                <Avatar
                  src={info.img}
                  alt={info.Titulo}
                  sx={{ width: "100%", height: "auto", borderRadius: 0 }}
                />
              ) : (
                <IconButton>
                  <ArrowForwardIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
