import { Box, Container, Grid, Typography, Paper } from '@material-ui/core';
import React, { Fragment } from 'react';
import useStyles from './skillStyles.js';
// Skills png
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import bootstrap from './images/bootstrap.png';
import mongodb from './images/mongodb.png';
import nodejs from './images/nodejs.png';
import redux from './images/redux.png';
import express from './images/express.png';
// import network from './images/networking.png';
import mui from './images/materialUi.png';
import git from './images/git.png';
import github from './images/github.png';
// Skills Data
const Skills = () => {
  const classes = useStyles();
  const skillsArray = [
    {
      img: react,
      name: 'React',
      link: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      img: redux,
      name: 'Redux',
      link: 'https://redux.js.org/introduction/getting-started',
    },
    {
      img: js,
      name: 'Javascript',
      link: 'https://www.w3schools.com/js/default.asp',
    },
    { img: html, name: 'HTML', link: 'https://www.w3schools.com/html/' },
    { img: css, name: 'CSS', link: 'https://www.w3schools.com/css/' },
    {
      img: git,
      name: 'Git',
      link: 'https://git-scm.com/',
    },
    {
      img: github,
      name: 'GitHub',
      link: 'https://github.com/',
    },
    { img: mui, name: 'M Ui', link: 'https://material-ui.com/' },
    {
      img: bootstrap,
      name: 'Bootstrap',
      link: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
    },
    { img: nodejs, name: 'Nodejs', link: 'https://nodejs.org/en/docs/' },
    {
      img: mongodb,
      name: 'MongoDB',
      link: 'https://docs.mongodb.com/manual/tutorial/',
    },
  ].map((skill, i) => (
    <Grid item xs={4} sm={4} md={3} lg={2} key={i}>
      <Paper
        elevation={3}
        className={classes.skillImgContainer}
        onClick={() => window.open(skill.link)}
      >
        <img src={skill.img} alt="html" className={classes.skillImg} />
        <Typography variant="body1">{skill.name}</Typography>
      </Paper>
    </Grid>
  ));
  return (
    <Fragment>
      <Box className={classes.skillsSection} id="Skills">
        <Container fixed>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item className={classes.skillsHeading}>
              <Typography variant="h6">Skills</Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className={classes.skillsContent}
              spacing={4}
            >
              {skillsArray}

              <Grid item xs={4} sm={4} md={3} lg={2} key={'express'}>
                <Paper
                  elevation={3}
                  className={classes.skillImgContainer}
                  onClick={() => window.open('https://expressjs.com/')}
                >
                  <img
                    src={express}
                    alt="express"
                    className={classes.skillImg}
                    style={{ margin: '42%' }}
                  />
                </Paper>
              </Grid>
              {/* <Grid item xs={4} sm={4} md={3} lg={2} key={'MTA'}>
                <Paper
                  elevation={3}
                  className={classes.skillImgContainer}
                  onClick={() =>
                    window.open(
                      'https://support.microsoft.com/en-us/topic/earn-a-microsoft-technology-associate-mta-certification-357215d0-31ce-0620-feba-1bb60165b770'
                    )
                  }
                >
                  <img
                    src={network}
                    alt="networking"
                    className={classes.network}
                    style={{ margin: '20%' }}
                  />
                  <Typography variant="body1">Network</Typography>
                </Paper>
              </Grid> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Skills;
