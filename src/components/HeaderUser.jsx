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
import { useState, useEffect } from "react";
import { Busqueda } from "./Busqueda";
import { traerDatos } from "../services/firebase";
import { logout } from "../services/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

  const isMobile = useMediaQuery("(max-width:800px)");
  // Function para cerrar cesion
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  // console.log(query);

  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem("uid");
        setUser(null);
        setTodos([]);
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

  // Si el usuario no está autenticado y la ruta actual es la página de inicio de sesión, no mostramos el encabezado
  if (!isAuthenticated && locationPath.pathname === "/login") {
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

              <LogoutIcon
                onClick={handleLogout}
                sx={{
                  marginRight: 5,
                }}
              />
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
        </List>
      </Drawer>
    </>
  );
}
