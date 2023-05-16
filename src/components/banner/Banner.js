import { Button, Container } from "@mui/material";
import "./banner.css";
import resumelogo from "../../assets/resume.svg";
const Banner = () => {
  return (
    <Container>
      <div className="home--banner">
        <div className="banner-context">
          <div className="banner"> </div>
          <h1 className="banner--title">
            <span className="banner__highliter "> GetResume.io</span> {<br />}
            Professional Resume & Cover Letter Tool
          </h1>
          <button className="home--tryoutbtn"> TRY NOW</button>
        </div>
        <div>
          <img src={resumelogo} className="home__banner--logo" />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
