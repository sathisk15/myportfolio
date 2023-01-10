import React, { Fragment } from 'react';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import aboutImg from '../../images/aboutbg.jpg';
import useStyles from './aboutStyles.js';
import SocialIcons from '../SocialIcons';
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
            style={{ width: '100%' }}
          >
            <Grid item xs={12} md={6} className={classes.aboutLeftSection}>
              <img
                src={aboutImg}
                alt="aboutImgs"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.aboutRightSection}>
              <Grid item className={classes.headingAbout}>
                <Typography variant="h6">About me</Typography>
              </Grid>
              <Box className={classes.about}>
                <Typography variant="body2" className={classes.abtContent}>
                  <span>&emsp;&emsp;&emsp;&emsp;</span>I'am Sathiskumar, A
                  highly organized, professional and experienced Frontend
                  developer/engineer with 3+ years of extensive IT experience.
                  Additional knowledge of Full Stack Web development. Building
                  lean, highly-performant web frontend products using React and
                  JavaScript. Practicing modern web development with the help of
                  redux a centralized state management, JavaScript, HTML, CSS
                  and bootstrap. Skills on complex algorithms, problem solving,
                  analytical and conceptual thinking. Also, a combination of
                  smart working, team building and management. Looking forward
                  to take up new challenges and responsibilities to enhance my
                  career and fulfill organization goals
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
