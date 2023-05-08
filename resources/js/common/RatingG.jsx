import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material/";

const RatingG = () => {
  const [value, setValue] = useState(2);

  return (
    <Box
    // sx={{
    //   "& > legend": { mt: 2 },
    // }}
    >
      {/* <Typography component="legend">Read only</Typography> */}
      <Rating value={value} readOnly />
    </Box>
  );
};
export default RatingG;
