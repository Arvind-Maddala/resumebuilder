import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";
import { Button } from "@mui/material";
import Benifits from "../../components/benifits/Benifits";
import Banner from "../../components/banner/Banner";
import Ratings from "../../components/ratings/Ratings";
import FooterBanner from "../../components/footer-banner/FooterBanner";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Benifits />
      <Ratings />
      <FooterBanner />
    </div>
  );
};

export default Home;
