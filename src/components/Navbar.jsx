import React, { useState, useEffect } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/company/i.png";
import Logo from "../assets/company/Ai_logo_black.png";
import "../style/Navbar.css";

const Navbar = ({ showApplyButton }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("transparent");
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 170) {
        setNavbarBackground(
       "linear-gradient(131deg, #02176C 0%, #0076B6 100%)"
        );
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "#fff",
        textAlign: "center",
        padding: "16px",
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon style={{ position: "relative", left: "300%", color: "#fff", fontSize: "45px" }} />
      </IconButton>
      <Typography color={"goldenrod"} variant="h6" component="div" sx={{ my: 2 }}>
        <NavLink activeClassName="active" to={"/"}>
          <img src={Logo} alt="logo" height={"70"} width="200" />
        </NavLink>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">


        <li>
          <ScrollLink
            to="services"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="text-primary"
          >
            SERVICES
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="career"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="text-primary"
          >
            CAREER
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="text-primary"
          >
            CONTACT US
          </ScrollLink>
        </li>
        <li>
        {showApplyButton && (
          <ScrollLink
            to="current-job"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            className="text-white button_side"
          >
            Apply For Job
          </ScrollLink>
        )}
        </li>   
           </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar
          component="nav"
          sx={{
            background: navbarBackground,
            boxShadow: "none",
            height: "9%",
          }}
        >
          <Toolbar>
            <IconButton
              className="menicon"
              edge="start"
              sx={{
                display: { md: "block", lg: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon className="menuicon" style={{ color: "#fff", fontSize: "150%" }} />
            </IconButton>
            <Typography
              color="goldenrod"
              variant="h6"
              sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            >
              <NavLink activeClassName="navlink" to={"/"} onClick={goToBtn}>
                <img src={logo} alt="logo" height={60} width="700" style={{marginTop:"6rem"}} />
                <div className="liner"></div>
              </NavLink>
              <ul className="navigation-menu active" >

                <li>
                  <ScrollLink
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className="text-decoration-none align-items-start link text-white"
                  >
                    SERVICES
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="career"
                    spy={true}
                    smooth={true}
                    offset={-230}
                    duration={500}
                    className="text-decoration-none link text-start text-white"
                  >
                    CAREER
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                    className="text-decoration-none link text-start text-white"
                  >
                    CONTACT US
                  </ScrollLink>
                </li>
              </ul>
            </Typography>
            {showApplyButton && (
            <ScrollLink
              to="current-job"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="text-decoration-none nav-button"
            >
              Apply For Job
            </ScrollLink>
            )}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={closeDrawer}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

