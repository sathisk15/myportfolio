import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import Components
import SocialIcons from "../SocialIcons";
// Sidebar Menu
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
// Avatar
import Avatar from "./sidebarAvatar.jpg";
// React Scroll
import { Link as LinkS } from "react-scroll";
const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100vh",
    // background: "rgb(255,102,179)",
    background:
      "linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)",
    color: "#FFFFFF",
  },
  fullList: {
    width: "auto",
  },
});

const Sidebar = ({ type }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ display: "flex" }}>
        <img
          src={Avatar}
          alt="Avatar"
          width="150px"
          style={{ borderRadius: "100%", margin: "15px auto 0 auto" }}
        />
      </div>
      <List>
        {[
          { menu: "Home", icon: <HomeIcon /> },
          { menu: "About", icon: <InfoIcon /> },
          { menu: "Skills", icon: <LocalActivityIcon /> },
          { menu: "Certification", icon: <VerifiedUserIcon /> },
          { menu: "Projects", icon: <ImportantDevicesIcon /> },
          { menu: "Education", icon: <SchoolIcon /> },
          { menu: "Experience", icon: <WorkIcon /> },
          { menu: "Contact", icon: <ContactPhoneIcon /> },
        ].map((menuItems, i) => (
          <LinkS
            key={i}
            to={menuItems.menu}
            spy={true}
            smooth={true}
            duration={500}
            style={{ textDecoration: "none", color: "white" }}
          >
            <ListItem button key={menuItems.menu}>
              <ListItemIcon>{menuItems.icon}</ListItemIcon>

              <ListItemText
                primary={menuItems.menu}
                onClick={toggleDrawer(anchor, false)}
              />
            </ListItem>
          </LinkS>
        ))}
      </List>
      <SocialIcons />
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="show more"
            // aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "#FFF" }}
          >
            {type === "arrow" ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Sidebar;
