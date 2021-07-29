import React, { useState } from "react";
// React Scroll NPM Package
import { Link as LinkS } from "react-scroll";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, Container } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
// import Logo from "../../images/skLogo.ico";
// Custom css
import useStyles from "./navbarStyles";
// Sidebar
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const handleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleMenuItemClick = (event) => {
    setOpen(false);
  };

  return (
    <div className={classes.grow} id="Home">
      <AppBar position="static" className={`${classes.navBar}`}>
        <Container>
          <Toolbar>
            {/* <img src={Logo} alt="Logo" width="50px" /> */}
            <Typography className={classes.title} variant="h6" noWrap>
              My Portfolio
            </Typography>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button variant="contained" className={classes.navButtons}>
                Home
              </Button>
              <LinkS to="About" spy={true} smooth={true} duration={500}>
                <Button variant="contained" className={classes.navButtons}>
                  About
                </Button>
              </LinkS>
              <LinkS to="Contact" spy={true} smooth={true} duration={500}>
                <Button variant="contained" className={classes.navButtons}>
                  Contact
                </Button>
              </LinkS>

              <Button
                variant="contained"
                className={classes.navButtons}
                ref={anchorRef}
                onClick={handleDropdown}
                style={{ paddingRight: "15px" }}
              >
                Portfolio
                <ArrowDropDownIcon />
              </Button>
              {/*  */}
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                transition
                placement="bottom-start"
                style={{ margin: "5px 0" }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          {[
                            "Skills",
                            "Certification",
                            "Projects",
                            "Experience",
                            "Education",
                          ].map((option) => (
                            <LinkS
                              to={option}
                              spy={true}
                              smooth={true}
                              duration={500}
                            >
                              <MenuItem
                                key={option}
                                onClick={(event) => handleMenuItemClick(event)}
                              >
                                {option}
                              </MenuItem>
                            </LinkS>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              {/*  */}
            </div>

            <div className={classes.sectionMobile}>
              <Sidebar />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
