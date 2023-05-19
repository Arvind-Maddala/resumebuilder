import { Box, Button, Container } from "@mui/material";
import "./banner.css";
import resumelogo from "../../assets/resume.svg";
const Banner = ({ mode }) => {
  console.log(mode);
  return (
    <Box
      sx={{
        backgroundColor: mode === "light" ? "customBackground.main" : "#212121",
      }}
    >
      <Container>
        <div className="home--banner">
          <div className="banner-context">
            <div className="banner"> </div>
            <h1 className="banner--title">
              <span className="banner__highliter "> GetResume.io</span> {<br />}
              Get Professional{" "}
              <span className="banner__texthighlighter"> Resume </span>& Cover
              Letter Tool for any job for{" "}
              <span className="banner__texthighlighter">free</span>
            </h1>
            <Button
              className="home--tryoutbtn"
              sx={{
                backgroundColor: "#e44747",
                color: "text.primary",
                p: "0.8rem 3rem",
                fontSize: "1.25rem",
                "&:hover": { backgroundColor: "#e44747" },
              }}
            >
              {" "}
              TRY NOW
            </Button>
          </div>
          <div>
            <img src={resumelogo} className="home__banner--logo" />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Banner;
