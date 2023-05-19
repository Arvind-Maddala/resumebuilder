import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";
import { Button } from "@mui/material";
import Benifits from "../../components/benifits/Benifits";
import Banner from "../../components/banner/Banner";
import Ratings from "../../components/ratings/Ratings";
import FooterBanner from "../../components/footer-banner/FooterBanner";
import Footer from "../../components/footer/Footer";
const Home = ({ setMode, mode }) => {
  console.log(mode);
  return (
    <div>
      <NavBar setMode={setMode} mode={mode} />
      <Banner mode={mode} />
      <Benifits />
      <Ratings />
      <FooterBanner mode={mode} />
      <Footer />
    </div>
  );
};

export default Home;
