import React, { useState } from "react";
// import { Box, Rating, Typography } from "@mui/material/";

const RatingG = () => {
  const [value, setValue] = useState(2);

  return (
    <div
    // sx={{
    //   "& > legend": { mt: 2 },
    // }}
    >
      {/* <Typography component="legend">Read only</Typography> */}
      {/* <Rating value={value} readOnly /> */}
    </div>
  );
};
export default RatingG;
