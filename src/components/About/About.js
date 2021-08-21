import React, { Fragment } from "react";
import { Grid, Container, Box, Typography } from "@material-ui/core";
import aboutImg from "../../images/aboutbg.jpg";
import useStyles from "./aboutStyles.js";
import SocialIcons from "../SocialIcons";
const About = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.aboutSection} id="About">
        <Container fixed>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ width: "100%" }}
          >
            <Grid item xs={12} md={6} className={classes.aboutLeftSection}>
              <img
                src={aboutImg}
                alt="aboutImgs"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.aboutRightSection}>
              <Grid item className={classes.headingAbout}>
                <Typography variant="h6">About me</Typography>
              </Grid>
              <Box className={classes.about}>
                <Typography variant="body2" className={classes.abtContent}>
                  <span>&emsp;&emsp;&emsp;&emsp;</span>I'am Sathiskumar, with a
                  bachelor degree in computer science. Currently, I'm working in
                  TCS with 2 years of experience. I'm genuine, punctual and
                  competitive among the businesses. Also, I have good listening
                  and communication skills. I work well in a team but also on my
                  own. I'm extremely interested to face new challenges and come
                  up with solutions. I'm always open to learn something new
                  which can help me to achieve my career goals as well as
                  organization's goals. I have a passion and also with good
                  knowledge in developing Web Applications using ReactJs,
                  Nodejs, Expressjs and MongoDB. Scroll down for projects that I
                  have worked.
                </Typography>
                <SocialIcons />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default About;
