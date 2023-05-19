import React from "react";
import "./footerbanner.css";
import footerbanner from "../../assets/footerbanner.svg";
import { Box, Button, Container } from "@mui/material";
const FooterBanner = ({ mode }) => {
  return (
    <Box
      sx={{
        backgroundColor: mode === "light" ? "customBackground.main" : "#212121",
      }}
    >
      <Container>
        <Box
          className="footerBanner"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img src={footerbanner} className="footerBanner-image" />
          </div>
          <div>
            <div className="footerBanner__title">
              <h2> Try our professional resume builder now</h2>
            </div>
            <Button
              className="footerBanner__trynow"
              sx={{
                backgroundColor: "#e44747",
                color: "text.primary",
                p: "0.8rem 5rem",
                fontSize: "1.25rem",
                "&:hover": { backgroundColor: "#e44747" },
              }}
            >
              {" "}
              TRY NOW
            </Button>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterBanner;
