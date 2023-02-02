import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";

import { Carousel, NavBar, Reviews } from "../common";

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
        <Grid container justifyContent="center">
          <Grid xs={10}>
            <Box>
              <Reviews />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
