import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  styled,
  alpha,
  Avatar,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import BungalowIcon from "@mui/icons-material/Bungalow";
import Student from "./Student";
import { useState, useEffect } from "react";
import { Busqueda } from "./Busqueda";
import { traerDatos } from "../services/firebase";
import { logout } from "../services/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header({ isAuthenticated }) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const locationPath = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function para cerrar cesion
  const isMobile = useMediaQuery("(max-width:800px)");
  // console.log(query);

  // Cerrar cesion
  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem("uid");
        localStorage.removeItem("email");
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => navigate("/"));
  };

  useEffect(() => {
    traerDatos().then(setUsers);
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredUsers([]);
      return;
    }
    const result = Busqueda(users, query);
    setFilteredUsers(Array.from(new Set(result)));
  }, [query, users]);

  const handleNavigateRegister = () => {
    navigate("/Register_student");
  };
  const handleNavigateStudent = () => {
    navigate("/Students");
  };
  // Si el usuario no está autenticado y la ruta actual es la página de inicio de sesión, no mostramos el encabezado
  if (
    (!isAuthenticated && locationPath.pathname === "/login") ||
    locationPath.pathname === "/Cemas.com"
  ) {
    return null;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        {isMobile ? (
          <AppBar position="fixed">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>

                <StyledInputBase
                  placeholder="Buscame..."
                  inputProps={{ "aria-label": "search" }}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </Search>
              {isMobile ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: "auto",
                    marginLeft: 2,
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://scontent.fsti4-1.fna.fbcdn.net/v/t39.30808-1/306665553_516440313816231_9108585722110807102_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=w6w4g5sV5gEAX9ZpJfJ&_nc_ht=scontent.fsti4-1.fna&oh=00_AfAZJ5Nl1an_g8xov-Wt0oy2RnUfQyglvdTMh_RNfsTrGg&oe=64499E82"
                  />
                </Box>
              ) : null}
            </Toolbar>
          </AppBar>
        ) : (
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              ></IconButton>
              <Avatar
                alt="cemas"
                src="https://scontent.fsti4-1.fna.fbcdn.net/v/t39.30808-1/306665553_516440313816231_9108585722110807102_n.jpg?stp=cp0_dst-jpg_e15_p120x120_q65&_nc_cat=109&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=w6w4g5sV5gEAX9ZpJfJ&_nc_ht=scontent.fsti4-1.fna&oh=00_AfAZJ5Nl1an_g8xov-Wt0oy2RnUfQyglvdTMh_RNfsTrGg&oe=64499E82"
                sx={{
                  width: "40px",
                  height: "40px",
                  marginRight: 2,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Secretary Cemas
              </Typography>

              <AddIcon
                onClick={handleNavigateRegister}
                sx={{
                  marginRight: 5,
                }}
              />

              <BungalowIcon
                onClick={handleNavigateStudent}
                sx={{
                  marginRight: 5,
                }}
              />

              <LogoutIcon
                onClick={handleLogout}
                sx={{
                  marginRight: 5,
                }}
              />

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>

                <StyledInputBase
                  placeholder="Buscame..."
                  inputProps={{ "aria-label": "search" }}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </Search>
            </Toolbar>
          </AppBar>
        )}
      </Box>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem>
            <IconButton>
              <LogoutIcon onClick={handleLogout} />
              <Typography>Logout</Typography>
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton>
              <AddIcon onClick={handleNavigateRegister} />

              <Typography>Agregar</Typography>
            </IconButton>
          </ListItem>

          <ListItem>
            <IconButton>
              <BungalowIcon onClick={handleNavigateStudent} />
              <Typography>Inicio</Typography>
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
      <Box mt={5}>
        {filteredUsers.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </Box>
    </>
  );
}
