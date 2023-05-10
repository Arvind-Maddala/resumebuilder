import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { benifits } from "../../data/Data";

const Benifits = () => {
  return (
    <Container sx={{ justifyContent: "center", padding: "3rem" }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{ textAlign: "center", marginBottom: "3rem" }}
      >
        What are the benefits of our Resume Builder?
      </Typography>
      <Grid container spacing={2}>
        {benifits.map((benifit, idx) => {
          return (
            <Grid item xs={12} md={4} key={idx}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  //   padding: "1rem",
                }}
              >
                {" "}
                <benifit.icon
                  sx={{
                    mt: "1.25rem",
                    fontSize: "45px",
                    marginRight: "1rem",
                    color: "#3983fa",
                  }}
                />
                <Box component="div">
                  <h3 style={{ fontFamily: "Roboto" }}> {benifit.title}</h3>
                  <p style={{ maxWidth: "300px" }}>{benifit.context}</p>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Benifits;
