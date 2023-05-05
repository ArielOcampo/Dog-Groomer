import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";

import { Carousel, Gallery, NavBar, Reviews } from "../common";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid container justifyContent="center">
          <Grid xs={10}>
            <Box sx={{ pb: 3 }}>
              <NavBar />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ maxHeight: 800 }}>
          <Carousel />
        </Box>
        {/* <Grid container justifyContent="center"> */}
        {/* <Grid xs={12}> */}
        {/* <Typography sx={{ textAlign: "center", padding: 5, fontSize: 22 }}>
              Lo que nuestros clientes opinan:
            </Typography>

            <Typography
              sx={{ textAlign: "center", padding: "8px 0", fontSize: 22 }}
            >
              Algunos de nuestros trabajos:
            </Typography> */}
        <Box sx={{ p: 2 }}></Box>
        <Box sx={{ pb: 2 }}>
          <Gallery />
        </Box>
        {/* </Grid> */}
        {/* </Grid> */}
      </Box>
      <Reviews />
    </>
  );
};

export default Home;
