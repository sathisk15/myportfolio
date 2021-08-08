import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SocialIcons from "../SocialIcons";
import heroImg from "../../images/herobg.jpg";

import Typist from "react-typist";
import Typist2 from "react-text-typist";
// Custom Styles
import useStyles from "./heroStyles";
// React-Reveal
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
// Resume
import Resume from "../../resume/Sathis.pdf";

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        style={{ height: "85%" }}
        className={classes.heroSection}
      >
        <Grid container item xs={11} sm={6} md={5} justifyContent="center">
          <Grid
            item
            // justifyContent="center"
            // alignItems="center"
            className={classes.heroLeftSection}
          >
            <Typist
              cursor={{
                show: true,
                blink: true,
                element: "",
                hideWhenDone: false,
                hideWhenDoneDelay: 1000,
              }}
            >
              <Typist.Delay ms={3000} />

              <Typography className={classes.heroText} variant="h4">
                Hey there........
              </Typography>
              <Typist.Delay ms={100} />
              <Typography className={classes.heroText} variant="h4">
                I am
              </Typography>
              <Typist.Delay ms={100} />
              <Typography className={classes.heroText} variant="h3">
                Sathiskumar R
              </Typography>
              <Typist.Delay ms={50} />
              <Typography className={classes.heroText} variant="h5">
                MERN stack developer
              </Typography>
            </Typist>
            <Typography variant="h6">
              <Typist2
                startDelay={"8000"}
                className={classes.heroText}
                sentences={[
                  "React Js",
                  "Redux",
                  "Javascript",
                  "Node Js",
                  "Express Js",
                  "MongoDB",
                  "Html",
                  "Css",
                ]}
                loop
              />
            </Typography>
            <Fade bottom delay={9500}>
              <div style={{ display: "flex" }}>
                <div style={{ margin: "10px auto" }}>
                  <Button
                    variant="contained"
                    className={classes.hireMe}
                    href="https://www.linkedin.com/in/rsathisk15/"
                    target="_blank"
                  >
                    Hire Me!
                  </Button>

                  <Button
                    variant="contained"
                    className={classes.getCv}
                    href={Resume}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Get CV!
                  </Button>
                </div>
              </div>
              <Bounce delay={10000}>
                <SocialIcons />
              </Bounce>
            </Fade>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.heroRightSection}
          item
          xs={12}
          sm={6}
          md={7}
          justifyContent="center"
        >
          <Grid item style={{ display: "flex" }}>
            <Zoom delay={9000}>
              <img
                src={heroImg}
                alt="HeroImg"
                style={{ margin: "auto" }}
                width="80%"
              />
            </Zoom>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
