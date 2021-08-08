import { Box, Container } from "@material-ui/core";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const useStyles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    // background:
    //   "linear-gradient(90deg, rgba(255,102,179,1) 0%, rgba(194,148,233,1) 100%)",
    background: "#1A2E35",
    opacity: "0.9",
  },
  footerContent: {
    color: "#FFF",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
  },
  footerIcon: {
    margin: "0 10px",
    color: "#FFF",
    "&:hover": { cursor: "pointer", color: "#0A66C2" },
  },
  footerMe: {
    "&:hover": { cursor: "pointer", color: "#0A66C2", fontWeigth: "bold" },
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box className={classes.footer}>
        <Container>
          <div className={classes.footerContent}>
            <p style={{ margin: "2px auto" }}>
              Copyright © 2021 All rights reserved | This site developed by{" "}
              <span className={classes.footerMe}>Me</span>
            </p>
            <p style={{ margin: "2px auto", padding: "2px" }}>
              <LinkedInIcon
                onClick={() =>
                  window.open("https://www.linkedin.com/in/rsathisk15/")
                }
                className={classes.footerIcon}
              />
              <InstagramIcon
                onClick={() =>
                  window.open("https://www.instagram.com/sathisk15/")
                }
                className={classes.footerIcon}
              />
              <FacebookIcon
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/sathiskumar.sathiskumar.1048554"
                  )
                }
                className={classes.footerIcon}
              />
              <TwitterIcon
                onClick={() =>
                  window.open("https://twitter.com/SATHISK98457147?s=08")
                }
                className={classes.footerIcon}
              />
            </p>
          </div>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Footer;
