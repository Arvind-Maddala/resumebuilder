import React from "react";
import "./ratings.css";
import { Button, Container, Paper, Rating, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import RatingItem from "../rating/Rating";
import { ratingData } from "../../data/Data";

const Ratings = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontFamily: "Sofia Sans",
        }}
      >
        What people say about us
      </Typography>
      <Carousel>
        {ratingData.map((item, i) => (
          <RatingItem key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Ratings;
