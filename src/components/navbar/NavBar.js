import {
  AppBar,
  Box,
  Button,
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
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

const NavBar = () => {
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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
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
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
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
                sx={{ my: 2, color: "white", display: "block" }}
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
                        backgroundColor: "#F1F8FE",
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
                sx={{ my: 2, color: "white", display: "block" }}
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
                        backgroundColor: "#F1F8FE",
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
                sx={{ my: 2, color: "white", display: "block" }}
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
                        backgroundColor: "#F1F8FE",
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
                aria-owns={coverEl ? "cover-menu" : undefined}
                onMouseEnter={(event) => {
                  setCoverEl(event.currentTarget);
                }}
                onClick={(event) => {
                  setCoverEl(event.currentTarget);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
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
                        backgroundColor: "#F1F8FE",
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
                aria-owns={careerEl ? "career-menu" : undefined}
                onMouseEnter={(event) => {
                  setCareerEl(event.currentTarget);
                }}
                onClick={(event) => {
                  setCareerEl(event.currentTarget);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
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
                        backgroundColor: "#F1F8FE",
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
                aria-owns={aboutEl ? "about-menu" : undefined}
                onMouseEnter={(event) => setAboutEl(event.currentTarget)}
                onClick={(event) => setAboutEl(event.currentTarget)}
                sx={{ my: 2, color: "white", display: "block" }}
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
                        backgroundColor: "#F1F8FE",
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

            <Button sx={{ mx: 10, my: 2, color: "white", display: "block" }}>
              {" "}
              MY ACCOUNT{" "}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
