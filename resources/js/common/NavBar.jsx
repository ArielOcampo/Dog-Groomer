import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MenuIcon from "@mui/icons-material/Menu";

import { LogoPerro, Titulo } from "@/assets/";

const pages = ["Inicio", "Galeria", "Contacto"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
      <Grid container justifyContent="center">
        <Grid xs={10}>
          <AppBar
            position="static"
            color="primary"
            style={{
              borderRadius: "0 0 30px 30px",
              backgroundColor: "#fff",
              color: "black",
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
                  <img
                    src={LogoPerro}
                    alt="Logo perro"
                    style={{ width: 100, padding: "10px 5px" }}
                  />
                  <img src={Titulo} alt="Carlos Torres" />
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}

                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <img
                    src={LogoPerro}
                    style={{ width: 80, padding: "10px 0px" }}
                  />
                </Box>

                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "end",
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "#787878", display: "block" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Grid>
      </Grid>
    </Box>
  );
}
export default NavBar;
