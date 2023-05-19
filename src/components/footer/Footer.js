import { Box, Container, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between">
        <Box className="footer__list--container ">
          <h4> Resume</h4>
          <ul>
            <li>Resume Builder</li>
            <li>Resume Templates</li>
            <li>Resume Examples</li>
            <li>Resume Format</li>
            <li>How to write a resume</li>
            <li>Resume Checked</li>
            <li>Resume Help</li>
            <li>Best Resume templates</li>
          </ul>
        </Box>
        <Box className="footer__list--container ">
          <h4> CV </h4>
          <ul>
            <li>CV Builder</li>
            <li>CV Templates</li>
            <li>CV Examples</li>
            <li>CV Format</li>
            <li>How to write a CV</li>

            <li>CV Help</li>
          </ul>
        </Box>
        <Box className="footer__list--container ">
          <h4> Cover Letter </h4>
          <ul>
            <li>Cover Letter Builder</li>
            <li>Cover Letter Templates</li>
            <li>Cover Letter Examples</li>
            <li>Cover Letter Format</li>
            <li>How to write a Cover Letter</li>

            <li>Cover Letter Help</li>
          </ul>
        </Box>
        <Box className="footer__list--container ">
          <h4> Support</h4>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Frequently asked questions</li>
            <li>Accessibility</li>
            <li>Affiliates</li>
            <li>Provacy policy </li>
            <li>Terms of service</li>
            <li>Cookies & Tracking Policy</li>
          </ul>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <div className="footer__sociallinks">
          <ul>
            <li>
              <FacebookIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <LinkedInIcon />
            </li>
          </ul>
        </div>
        <div>
          <p>
            {" "}
            Made with ❤️ by{" "}
            <a
              href="https://aravind-maddala.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Aravind{" "}
            </a>
          </p>
        </div>
      </Stack>
    </Container>
  );
};

export default Footer;
