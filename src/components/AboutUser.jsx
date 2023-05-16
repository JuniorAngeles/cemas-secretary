import Header from "./HeaderUser";
import {
  Grid,
  Typography,
  Avatar,
  IconButton,
  Paper,
  Box,
  List,
  ListItem,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { infoArray, infoArrayAdministracion } from "../user/info";
import "../styles/card.css";
import cemas from "../assets/cemas.jpg";

export default function AboutUser() {
  return (
    <>
      <Header />
      <Grid
        sx={{
          backgroundImage: `url(${cemas})`, // Establece la imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid marginTop={5} margin={10}>
          <Paper
            elevation={10}
            sx={{
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            {infoArray.map((info) => (
              <Grid
                container
                flexDirection={{
                  xs: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                gap="3rem"
                alignItems="center"
                justifyContent="center"
                sx={info.id % 2 === 0 ? { flexDirection: "row-reverse" } : {}}
                marginBottom={10}
              >
                <Grid
                  item
                  width={{ xs: "100%", md: "50%", lg: "50%", lx: "50%" }}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "1rem",
                    textAlign: "justify",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      fontWeight: "bold",
                    }}
                  >
                    {info.Titulo}
                  </Typography>

                  <Typography sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}>
                    {info.Descripcion}
                  </Typography>

                  <List>
                    <ListItem>
                      <Typography
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                      >
                        {info.cert}
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography
                        sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                      >
                        {info.record}
                      </Typography>
                    </ListItem>
                  </List>
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
            <Typography
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: "#000000",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Administración
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {infoArrayAdministracion.map((info) => (
                <div class="card" key={info.id}>
                  <div class="face front">
                    <img src={info.photo} alt="" />
                    <h3>{info.nombre}</h3>
                  </div>
                  <div class="face back">
                    <h3>{info.nombre}</h3>
                    <p>{info.descripcion}</p>
                    <div class="link">
                      <a href="#">{info.cargo}</a>
                    </div>
                  </div>
                </div>
              ))}

              {/* {infoArrayAdministracion.map((info) => (
                <Grid key={info.id}>
                  <Paper
                    elevation={4}
                    sx={{
                      position: "relative",
                      width: "300px",
                      height: "300px",
                      alignItems: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <br />

                    <Box
                      sx={{
                        marginLeft: "3rem",
                      }}
                    >
                      <Avatar
                        src={info.photo}
                        alt={info.nombre}
                        sx={{
                          width: "200px",
                          height: "200px",
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",

                        padding: "10px",
                        color: "#000000",
                      }}
                    >
                      <Typography variant="subtitle1">
                        {info.nombre} {info.apellido}
                      </Typography>
                      <Typography variant="body2">{info.cargo}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))} */}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
