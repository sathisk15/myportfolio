import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  socialIcons: {
    fontSize: "23px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
    padding: "8px",
    margin: "10px",
    color: "white",
    cursor: "pointer",
    transition: "transform .4s",
    "&:hover": {
      color: "#FFF",
      transform: "scale(1.1)",
    },
  },
}));
const SocialIcons = () => {
  const classes = useStyles();
  const socialIcons = [
    {
      bgColor: "#0A66C2",
      link: "https://www.linkedin.com/in/rsathisk15/",
      icon: <LinkedInIcon />,
      label: "LinkedIn",
    },
    {
      bgColor:
        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
      link: "https://www.instagram.com/sathisk15/",
      icon: <InstagramIcon />,
      label: "Instagram",
    },
    {
      bgColor: "#1877F2",
      link: "https://www.facebook.com/sathiskumar.sathiskumar.1048554",
      icon: <FacebookIcon />,
      label: "Facebook",
    },
    {
      bgColor: "#1DA1F2",
      link: "https://twitter.com/SATHISK98457147?s=08",
      icon: <TwitterIcon />,
      label: "Twitter",
    },
  ].map((icon) => (
    <IconButton
      aria-label="LinkedIn"
      className={classes.socialIcons}
      style={{ background: icon.bgColor }}
      href={icon.link}
      target="_blank"
    >
      {icon.icon}
    </IconButton>
  ));
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "auto", display: "flex" }}>{socialIcons}</div>
    </div>
  );
};

export default SocialIcons;
