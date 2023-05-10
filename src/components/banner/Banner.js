import { Button } from "@mui/material";
import "./banner.css";
const Banner = () => {
  return (
    <div className="home--banner">
      <div className="banner"> </div>
      <h2 className="banner--title">
        Resume Builder {<br />}
        Professional Resume & Cover Letter Tools For Any Job
      </h2>
      <button className="home--tryoutbtn"> TRY NOW</button>
    </div>
  );
};

export default Banner;
