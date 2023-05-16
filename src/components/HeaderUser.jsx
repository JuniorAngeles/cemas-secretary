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
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Busqueda } from "./Busqueda";
import { traerDatos } from "../services/firebase";
import { logout } from "../services/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BungalowIcon from "@mui/icons-material/Bungalow";

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

  // adaptar a dispositivos móviles
  const isMobile = useMediaQuery("(max-width:800px)");
  // Function para cerrar cesion

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
  const photoURL = localStorage.getItem("photoURL");
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAABOFBMVEX///8cWZLiBRQATIsAUI7v8vTR2uT/8gAXV5H/7gC2xNRLcaIPVI8ASYr4+vviAACUqcIAUJYATZYARYnrAAAASpf9/vMvYpcpXpUMVJQAUpX9+Lvb4+oAQojkAA/H0t5siq5ggqmgsshSeKP99JR3krMAQIzGxUSBmbcAM4Hl6/AAN4E6aJkARpn9+9r/70b98nX99aXy5RX99rFaeYA5aIf9/OmTomH13t7+8FlHbYVBbpp1jXKhqWGzt1XVzzeMnGaClHDe1y5ngHlth3hPdIS7wkqus1zo3iK2u040YYv998YAG3YAK37FwE0AP5lLToScNFfJHDPRFSeNO1/AITurKkq1J0J8QWvsq63iNjv99ITzzM7iTU05U4nkholeR3jgGyPhWV3mdXjxvLyGV3adU2tvQ3FTdtFoAAAM0ElEQVRogc1aDXubOBIWQWBZFhibJICLIxClIYS0W2/SprHznTZJ93av24/tJZe0m2Tv9v//gxsBtsFN+rV3z3PTPhSweBneGY1mRkXo/0I0X+cguq/9V2FNLgIHqxPBWSC4+d9A1q3IMDAjRJkIIQwbRmTpfw05tRwVV2CrwrDqWN9PEQ/tMTLoiomqMAUbNmNsfBfb4fepz1sGKzAwnCRUOH4/damptQJriJXyDcyIvh3ej2xSqKxgS0sUJAKMsKn6SQtzH4VqnJSvZnbkfxt2UmrNohhnKER9zemraaStponb1yI9CU2fqtK2cpBqfQO0ruDSakaKXGY6oa2bep8Lf0XTqGEyM+OWxVUFt5xcCex+NTdWzkjxFPX5ip4YNqUMW3BuOnZkMmSbrp8wliAzYnIgscVXQZuRmnMdOPINCdWGFg/1hBtKhMQKCpzYb2ktEyOwhh/wxE0MqYsafgV26khKsIP1nNPMF76DQjNCmlB4YHCfW6YpBA18gxhcZCpHfiaVZ1n6JWw//0ocmKGDHAIfYHItplpChi4jKlNUAytZpAZgc6aEobkamqrVyqTyjHwB3VfzTxyi0LYF6EbUtBXFtl2d/gTOmdvCLNBctKppoZEhLr2e4M/6pC9nJHHEKtUt0UdhFuHQKSzGvF6nC9Lpefn0ga/KTCQsP0hszdKt/En2mXCQ5iMyL6WrqaaoMTITnCP3uu7WaHvnxfLyi53t0ZbS7eX4eKigyOhzs4UiN2Lyzp3opnRasJLe1ywXZUEiXCyR1zb2dgeNRrOURmOwu7ex1pMWcQWKLI2acT9FEp1ld4FHEioK7ZQyFCRIi8AApOPtHwDwo/v3Hi7KQYsP791/BC84GPV6MFxthcjl9IFPY82WrnCHR1rS9VhkBn1TOMi1IKwoPW9v0Gj+8NNifejivR+ajcFeV8IrLcs0fJSYFpbGUG+dTbohndXXgzxM5VOJLBwB9OPF24YvPm42Tg4X4NtwHMFTZmIbSSbRb3OZ3AdgQvs6slw9AYp6yjJA30UiQvebjV+IB1RE3NCslcBHVBLrfjpSojHXNgIUc0T7cNVdHzSf3ar1WJ48aw62OjKyQIjkvkhJTswnMdI3pBMiP+hnKGjFQHd3v9G89zloKT82G6Ou1NZCWmAyIwxYHkrrEuVBUPf9NGbmEC4WthuDh1/CRuhhs7G3AN8cKhRlBkW6LS/qY7gtPUU1OAUXLLEfLZral2Vx0Njr5g4+DDU9bVlAaL8e3VvSmpql9jkKZawFTh4tIn2l/6Df7z+QBzjzHDja8hbcefBAHvorFNBHkveIp7EvTAnOopriwDhzNKQlEFUgwvXWG00wpW7HSRSFiYjCMLCIlWD3qLcx8sho/fn2+tF+Z/8lMPGk2XjuQTgTxDS5ashVxqiqHsINxyKC61oM50QZNJ/AbV2lNEloQGNBIYJTbjsvFvYOOt3l49FxZ/fYGxzaVPI+wDIWyAApcjAWTLFTYBwLpHGqB1wSvtz8ERXgqwA+FIEQwm9J8NO17Rfw+/Hzk5e7p87y3gKAo8eNUzAqsTBF3JFrq2JMA5jkCYJg6lMfuUTxRo0fUAnOY4tGIqBUKIRz213u7p687B7/cri9tnt6eHL6QIKjZ41DmEx9X1cyntOAp0HALfIbnGg0hNOFQbOYO7qdWAptZQGmUexgkWCyc7S/vtU7PNo4Xd/fW9/YzzUH2k/WQF1f6EjkmQOZREddHWdnhoBJ0HnaeDz+ARYKDHknwTKKydje8TyiuMQjPQ/OiKfm4Oh+Y68DiFzgMimZRBgLT5YweJ54g8HMW3GrfIZZyMwFjf9tFeCLzRMZ36dZ6yQ4RrU8trc/VrwEJ9gSusgfw+OwYdHxBClP7jeOvFoOXM5STa2lxmsHzcUKOFEdha4IHbvqBJz7FudpDXyxubtQg2FFdZAH8una/rJ0lQKctLjQeWCl4OnqGFxQi1p+DRwchtQIsIvfBa7e7D1t/lQBx8J5AFCUO33KcnBTA6qFbyLNrILfa+z1qjilMwasenNhd8JKrnlkZZpi9QW3aaG5GWlaRHmgU51WwJ80l2u8wLIz9fIxK+7gGaqAKzblNDB5KExIwHJaQhOF1E94jNIKOHo08GpAw/xuzZ7seeN+FZwF3PL/Rvuhn4DHjsEjAaGZZn4V/J/NrRo4+9RZYOrfq4KrPv+ZUytJoxWuTsFNM9GRGVfBf5xxRlWaxK+Bd7abD2uaxyICfwGHoaaRg2tWmlqaLzinNVp+KixKxn/VtECA9A/+yImtdHam9sw5x6GViL7KYzF1xUISUfUWsOhx14NEqecpgNQrAgBXO6cHh8snGwcnG0TpLjdRDRzIM2RcxDIC5OC+kGKJLK6BLzZPF7aXRwfHWyenRwfHnXzBAPCd9bXdLW8EsecWcCkiLuZCDq5bAaxLOtL9Gjhq/tLdeHG8sTs6XnfWXyyoY/Bl1z3o7N8NDlkzK8GpYjAMda6Bc9ga+MLLF+u7y6Nfdv/+dKc7Bj89cncgUO9tOLeDv/r19Zs3795+APDYIG/fvXnz+tdXxAC3qdGy0325PDrcHQE5o91Cc131jo6fHx1319dHL0nndMagQPpv8+0lkPb8WygB3rbni4v3EIlrBm0cd92Ru/O8s3Po7Kyz3KDgih5E/h4EcnCXWVeEVf3N/FwpAPjb5KL9RsHxrCt6pAOrDRy9whW1WlCcnUSK8q4toZba7TYc3rSX5tpLcJC3XsPCdvckMvKY+9npr/wjV3XpatM8a19tos3z9h/mxVyOPv+WBeHnp/8XAtfrHKd9BpfnF3C4uITDWfE1V5DFfSFwfSbkGsqHguP2Jlx+lIdN+ZrNdmGDV4rxhZB792IBtv69BL80EZABtFyB/pvXJfifisHLsfca+7ctFncvcxCq/iy9o/0RXbXb1+i63b5EH9ul9/xjmovfsczNLNALB9NpNCSvSs1vYFz7Cm5dtsELppo7ZZcOFui1Ggwpf2jdlVogWNkKmKVNE5l/bF6gi80zDW2ahbu0P+CkHHlXalFNiuQr2WCiuqmQ9xJm6fpiE51tngHdN9ofYNScGHB0e5xw5klRRSZJkV7nZZrOSdVzXpbOr8FFlt6A5ufg7ObluXzl/O+T+H5/xpyVgrHm6ZVEFCT03uboQLfZbkN50F4CMs+l4vO/TtLNIhGtfv60TK/zovRGU4fRZNyCeX+DNtH5GbpEN9foIneX+XdVVzmsMV6to9OaM+ZB/cfJbxjQz29uli6v59rnl3M311c35+eX7fl3ZFKcPG6e1nO5avKf5+vVj3KLsqWwiEF+uzm7gMnT/nhxBmdg2I/m1XsymT9Qtnh1YqtlC+J1kypeUXAV4jP2r6Xrq/Zl+/L8+vr6/PLy+vLq32yCXRRcdVZqtWLd1cel4ph3p/f7HATcOVgjluS60W7/6SljdyhLxZritVIxL3Jrkhe541/NQFXeT1aJufnXH3qROcWWRW5N7JnGRcQ+Ra+sSUJlf86Vk3XpLTEm+UtZnt/NeE7sjMPMNhbSoQpeA8zMv/9Qaa6WjYUZxj9pASb4E/T1QePZxGmQYN6Hd/Ovf/emadeTZ428JTKDfUvbmJHZUV69maPFNnvF7HCi1/1mY5l4s0/d1syZCevFuJk2lB8ZrTEjkzbUJ4rf2rm0as6et0Yh6Xhaa6CVD5YNtE6uNjGqzmDc0Y6uegwkn/kV6fRub/3tjnoF2yzSw0ohe1cz2nQm6KrF9bz7C/De2sZT2bRs1JuW4xnP/EDLxuzc3bREqTp+YIiSBzTNyoKY9LrK1mj7dFm2W5+OtpSF8cqA1SwN/SgdF/ifa+b6BRpR0ixu6VYsHOZk5caIl/eJF7o9b7ISEzvRqLCgKC0yCMI+2+QuWtxkqIXYTY3Y97EYzs7dEljBWURFEtqay7U8rJLbHaWCnje0mRKKWFvRoIYTVswwmfE4QlTmWFacuppqRWlfLR76Yus/za1KcJiKWNdbaZby2IpaKpNvlR0qwMXDIRSifkxjmggehQX92VfspRUbIgpjdurYAY/BbbRIS+MQFsPQjVjGY6qHeqS3uL6qEc6LfZmv2hBB460coriQwDs6pRH/Oe3TILXVVCQqtUDdLNFSg2oksezCSl+5lQOiu+NZYTlQOdOYpSs81KEMMjGLNCcyLTW1BEMhLmbaN2xCoen2GXYz6mh2TFf9kKoMXiC5ddNVVQ+poZZ7bN+0fQbiD8uNP4JJqIqkr4Evk4hjknEepX48dMqv+/aNP1TdsmQK1IYBdRUSUdlcsFTVGO/tfNeWZQ4f9qfbuCzv6OHxWeHuuB98/15xarl3bhOTv7ZNnItuRaqBa8tUvsGt/uUN7kJMLkJH/V9szU/kf/SfCr5b/gOjmHw2ICaYLgAAAABJRU5ErkJggg=="
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

              <BungalowIcon
                sx={{
                  fontSize: "20px",
                  marginRight: 2,
                }}
                onClick={() => navigate("/Cemas.com")}
              />
              <IconButton
                sx={{
                  color: "white",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    marginRight: 2,
                  }}
                  onClick={() => navigate("/AboutUser")}
                >
                  ¿Quienes somos?
                </Typography>
              </IconButton>

              <LogoutIcon
                onClick={handleLogout}
                sx={{
                  marginRight: 5,
                }}
              />
              <Avatar
                alt="cemas"
                src={photoURL}
                sx={{
                  width: "40px",
                  height: "40px",
                  marginRight: 2,
                  marginLeft: 2,
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
