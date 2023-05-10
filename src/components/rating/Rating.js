import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./rating.css";
const RatingItem = ({ item }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="rating__container">
        <Rating name="read-only" value={item.value} readOnly />
        <div className="rating__verified">
          <CheckCircleIcon fontSize="small" /> <p>Verified</p>{" "}
        </div>
      </div>
      <Typography variant="h6" component="h5">
        {item.title}
      </Typography>
      <Typography component="p" sx={{ textAlign: "center" }}>
        {item.context}
      </Typography>
      <div className="rating__username-container">
        {" "}
        <p className="rating__username">{item.userName} </p>
        <p className="rating__username--time">{item.time}</p>
      </div>
    </Box>
  );
};

export default RatingItem;
