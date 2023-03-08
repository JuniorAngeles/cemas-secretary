import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  styled,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import BungalowIcon from "@mui/icons-material/Bungalow";
import { Link } from "react-router-dom";
import Student from "./Student";
import { useState, useMemo, useEffect } from "react";
import { Busqueda } from "./Busqueda";
import { traerDatos } from "../services/firebase";

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

export default function Header() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [query, setQuery] = useState("");
  // console.log(query);

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

  // useEffect(() => {
  //   traerDatos().then(setUsers);
  //   if (users) {
  //     const result = Busqueda(users, query);
  //     setFilteredUsers(result);
  //   }
  // }, [query]);

  // useMemo(() => {
  //
  // }, );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Secretary Cemas
            </Typography>

            <Box component={Link} to="/Register_student">
              <AddIcon />
            </Box>

            <Box mr={3} ml={3} component={Link} to="/">
              <BungalowIcon />
            </Box>

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
      </Box>

      <Box mt={5}>
        {filteredUsers.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </Box>
    </>
  );
}
