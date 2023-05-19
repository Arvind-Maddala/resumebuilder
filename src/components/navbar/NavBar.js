import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { pages } from "../../data/Data";
import "./navbar.css";
import toolsLogo from "../../assets/tools icon.png";
import careerlogo from "../../assets/careerblog.png";
import coverlogo from "../../assets/cover letter.png";

import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import InfoIcon from "@mui/icons-material/Info";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { Brightness4, DarkMode } from "@mui/icons-material";

const NavBar = ({ setMode, mode }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [resumeEL, setResumeEl] = useState(null);
  const [cvEl, setCVEl] = useState(null);
  const [coverEl, setCoverEl] = useState(null);
  const [careerEl, setCareerEl] = useState(null);
  const [aboutEl, setAboutEl] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTheme = () => {
    setMode((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <AppBar position="static" sx={{ height: "80px", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
              fontFamily: "Sofia Sans",
            }}
          >
            Getresume.io
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Sofia Sans",
            }}
          >
            Getresume.io
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <div>
              <Button
                aria-controls="menu"
                aria-haspopup="true"
                aria-owns={anchorEl ? "tools-menu" : undefined}
                onMouseEnter={handleOpen}
                onClick={handleOpen}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Sofia Sans",
                  fontSize: "1rem",
                }}
              >
                Tools
              </Button>
              <Menu
                id="tools-menu"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                MenuListProps={{ onMouseLeave: handleClose }}
                onClose={handleClose}
              >
                <div>
                  <MenuItem
                    onClick={handleClose}
                    className="menuItem"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="submenu">
                      <img className="submenu__logo" src={toolsLogo} />
                      <div className="submenu__context">
                        <span className="submenu__title">
                          {" "}
                          <span className="title__highlighter">
                            Resume
                          </span>{" "}
                          Builder
                        </span>
                        <p className="submenu__desc">
                          Create a resume in 5 minutes. Get the job you want.
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        whiteSpace: "normal",
                      }}
                    >
                      <ul className="submenu__list">
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <AssignmentTurnedInOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Resume checker
                            </span>
                            <span className="submenu__listcontext__desc">
                              Get your resume checked and scored in one click
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <NoteAltOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              CV Maker
                            </span>
                            <span className="submenu__listcontext__desc">
                              Create a CV in 5 minutes, get the job you want.
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <DraftsOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Cover Letter Builder
                            </span>
                            <span className="submenu__listcontext__desc">
                              Write a cover letter than convinces employer
                              you're the best
                            </span>
                          </div>
                        </li>
                      </ul>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </div>
            <div>
              <Button
                aria-controls="menu"
                aria-haspopup="true"
                aria-owns={resumeEL ? "resume-menu" : undefined}
                onMouseEnter={(event) => setResumeEl(event.currentTarget)}
                onClick={(event) => setResumeEl(event.currentTarget)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Sofia Sans",
                  fontSize: "1rem",
                }}
              >
                Resume
              </Button>
              <Menu
                id="resume-menu"
                open={Boolean(resumeEL)}
                anchorEl={resumeEL}
                MenuListProps={{ onMouseLeave: () => setResumeEl(null) }}
                onClose={() => setResumeEl(null)}
              >
                <div>
                  <MenuItem
                    onClick={() => setResumeEl(null)}
                    className="menuItem"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="submenu">
                      <img className="submenu__logo" src={toolsLogo} />
                      <div className="submenu__context">
                        <span className="submenu__title">
                          {" "}
                          <span className="title__highlighter">
                            Resume
                          </span>{" "}
                          Builder
                        </span>
                        <p className="submenu__desc">
                          Create a resume in 5 minutes. Get the job you want.
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        whiteSpace: "normal",
                      }}
                    >
                      <ul className="submenu__list">
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <AssignmentTurnedInOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Resume checker
                            </span>
                            <span className="submenu__listcontext__desc">
                              Get your resume checked and scored in one click
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <NoteAltOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              CV Maker
                            </span>
                            <span className="submenu__listcontext__desc">
                              Create a CV in 5 minutes, get the job you want.
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <DraftsOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Cover Letter Builder
                            </span>
                            <span className="submenu__listcontext__desc">
                              Write a cover letter than convinces employer
                              you're the best
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="submenu__listitem_btncontainer">
                            <button className="submenu__listitem_btn">
                              {" "}
                              CREATE A RESUME NOW{" "}
                            </button>
                          </div>
                        </li>
                      </ul>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </div>
            <div>
              <Button
                aria-controls="menu"
                aria-haspopup="true"
                aria-owns={cvEl ? "cv-menu" : undefined}
                onMouseEnter={(event) => {
                  setCVEl(event.currentTarget);
                }}
                onClick={(event) => {
                  setCVEl(event.currentTarget);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Sofia Sans",
                  fontSize: "1rem",
                }}
              >
                CV
              </Button>
              <Menu
                id="cv-menu"
                open={Boolean(cvEl)}
                anchorEl={cvEl}
                MenuListProps={{ onMouseLeave: () => setCVEl(null) }}
                onClose={() => setCVEl(null)}
              >
                <div>
                  <MenuItem
                    onClick={handleClose}
                    className="menuItem"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="submenu">
                      <img className="submenu__logo" src={coverlogo} />
                      <div className="submenu__context">
                        <span className="submenu__title">
                          {" "}
                          <span className="title__highlighter">CV</span> Builder
                        </span>
                        <p className="submenu__desc">
                          Create a CV in 5 minutes. Get the job you want.
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        whiteSpace: "normal",
                      }}
                    >
                      <ul className="submenu__list">
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <AssignmentTurnedInOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              CV checker
                            </span>
                            <span className="submenu__listcontext__desc">
                              Get your resume checked and scored in one click
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <NoteAltOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              CV Maker
                            </span>
                            <span className="submenu__listcontext__desc">
                              Create a CV in 5 minutes, get the job you want.
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <DraftsOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              CV Builder
                            </span>
                            <span className="submenu__listcontext__desc">
                              Write a cover letter than convinces employer
                              you're the best
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="submenu__listitem_btncontainer">
                            <button className="submenu__listitem_btn">
                              {" "}
                              CREATE A CV
                            </button>
                          </div>
                        </li>
                      </ul>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </div>
            <div>
              <Button
                aria-controls="menu"
                aria-haspopup="true"
                aria-owns={coverEl ? "cover-menu" : undefined}
                onMouseEnter={(event) => {
                  setCoverEl(event.currentTarget);
                }}
                onClick={(event) => {
                  setCoverEl(event.currentTarget);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Sofia Sans",
                  fontSize: "1rem",
                }}
              >
                Cover Letter
              </Button>
              <Menu
                id="cover-menu"
                open={Boolean(coverEl)}
                anchorEl={coverEl}
                MenuListProps={{ onMouseLeave: () => setCoverEl(null) }}
                onClose={() => setCoverEl(null)}
              >
                <div>
                  <MenuItem
                    onClick={handleClose}
                    className="menuItem"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="submenu">
                      <img className="submenu__logo" src={coverlogo} />
                      <div className="submenu__context">
                        <span className="submenu__title">
                          {" "}
                          <span className="title__highlighter">
                            Cover Letter
                          </span>{" "}
                          Builder
                        </span>
                        <p className="submenu__desc">
                          Create a cover letter in 5 minutes. Get the job you
                          want.
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        whiteSpace: "normal",
                      }}
                    >
                      <ul className="submenu__list">
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <MarkAsUnreadOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Cover Letter Templates
                            </span>
                            <span className="submenu__listcontext__desc">
                              Find the perfect cover letter template
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <MarkEmailReadOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Cover Letter Format
                            </span>
                            <span className="submenu__listcontext__desc">
                              Pick the format for your situation
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <DraftsOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Cover Letter Builder
                            </span>
                            <span className="submenu__listcontext__desc">
                              Write a cover letter than convinces employer
                              you're the best
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="submenu__listitem_btncontainer">
                            <button className="submenu__listitem_btn">
                              {" "}
                              CREATE A COVER LETTER NOW{" "}
                            </button>
                          </div>
                        </li>
                      </ul>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </div>
            <div>
              <Button
                aria-controls="menu"
                aria-haspopup="true"
                aria-owns={careerEl ? "career-menu" : undefined}
                onMouseEnter={(event) => {
                  setCareerEl(event.currentTarget);
                }}
                onClick={(event) => {
                  setCareerEl(event.currentTarget);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Sofia Sans",
                  fontSize: "1rem",
                }}
              >
                Career Blog
              </Button>
              <Menu
                id="career-menu"
                open={Boolean(careerEl)}
                anchorEl={careerEl}
                MenuListProps={{ onMouseLeave: () => setCareerEl(null) }}
                onClose={() => setCareerEl(null)}
              >
                <div>
                  <MenuItem
                    onClick={handleClose}
                    className="menuItem"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="submenu">
                      <img className="submenu__logo" src={careerlogo} />
                      <div className="submenu__context">
                        <span className="submenu__title">
                          {" "}
                          <span className="title__highlighter">
                            See All
                          </span>{" "}
                          Posts
                        </span>
                        <p className="submenu__desc">
                          Find out how you can get a new job or improve the one
                          you have
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        whiteSpace: "normal",
                      }}
                    >
                      <ul className="submenu__list">
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <CampaignOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Career Advice
                            </span>
                            <span className="submenu__listcontext__desc">
                              Improve your career with advance tips and
                              strategies
                            </span>
                          </div>
                        </li>
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <ContentPasteSearchOutlinedIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Cover Letter Help
                            </span>
                            <span className="submenu__listcontext__desc">
                              Boost your changes of having your resume read with
                              our help
                            </span>
                          </div>
                        </li>

                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <QuestionAnswerIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Frequently asked Questions
                            </span>
                            <span className="submenu__listcontext__desc">
                              Get answers to frequently answered questions about
                              resumes and more.
                            </span>
                          </div>
                        </li>
                      </ul>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </div>
            <div>
              <Button
                aria-controls="menu"
                aria-haspopup="true"
                aria-owns={aboutEl ? "about-menu" : undefined}
                onMouseEnter={(event) => setAboutEl(event.currentTarget)}
                onClick={(event) => setAboutEl(event.currentTarget)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Sofia Sans",
                  fontSize: "1rem",
                }}
              >
                About
              </Button>
              <Menu
                id="about-menu"
                open={Boolean(aboutEl)}
                anchorEl={aboutEl}
                MenuListProps={{ onMouseLeave: () => setAboutEl(null) }}
                onClose={() => setAboutEl(null)}
              >
                <div>
                  <MenuItem
                    onClick={handleClose}
                    className="menuItem"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="submenu">
                      <img className="submenu__logo" src={careerlogo} />
                      <div className="submenu__context">
                        <span className="submenu__title"> About</span>
                        <p className="submenu__desc">
                          Find out more about us from our career experts
                        </p>
                      </div>
                    </div>
                  </MenuItem>
                  <div>
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        whiteSpace: "normal",
                      }}
                    >
                      <ul className="submenu__list">
                        <li className="submenu__listitem">
                          <div className="submenu__listitemlogo">
                            <InfoIcon fontSize="medium" />
                          </div>
                          <div className="submenu__listcontext">
                            <span className="submenu__listcontext__title">
                              Press Page
                            </span>
                            <span className="submenu__listcontext__desc">
                              Read original data insights to boost your
                              reportings
                            </span>
                          </div>
                        </li>
                      </ul>
                    </MenuItem>
                  </div>
                </div>
              </Menu>
            </div>

            <Checkbox
              icon={<DarkMode />}
              checkedIcon={<Brightness4 />}
              sx={{ width: "75px" }}
              onChange={handleTheme}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
