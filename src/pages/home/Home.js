import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";
import { Button } from "@mui/material";
import Benifits from "../../components/benifits/Benifits";
import Banner from "../../components/banner/Banner";
import Ratings from "../../components/ratings/Ratings";
import FooterBanner from "../../components/footer-banner/FooterBanner";
import ChooseTemplate from "../../components/choosetemplate/ChooseTemplate";
import Footer from "../../components/footer/Footer";
const Home = ({ setMode, mode }) => {
  return (
    <div>
      <NavBar setMode={setMode} mode={mode} />
      <Banner />
      <Benifits />
      <ChooseTemplate />
      <Ratings />
      <FooterBanner />
      <Footer />
    </div>
  );
};

export default Home;
