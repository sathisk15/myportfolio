import { Box, Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import project1 from "./images/project1.JPG";
import project2 from "./images/project2.JPG";
import project3 from "./images/project3.JPG";
import project4 from "./images/project4.JPG";
import useStyles from "./projectStyles";
const Projects = () => {
  const classes = useStyles();
  const projectArray = [
    {
      img: project4,
      link: "http://localhost:3000/",
      title: "My Portfolio",
      description:
        "This is my portfolio project which was developed by React and used multiple libraries",
    },
    {
      img: project3,
      link: "https://devconnector-co.herokuapp.com/",
      title: "DevConnector",
      description:
        "This project was developed with the instructor while learning MERN stack.",
    },
    {
      img: project2,
      link: "https://resumemaker-co.herokuapp.com/",
      title: "Resume Maker",
      description:
        "This is developed by HTML, CSS, Javascript, Jquery as Frontend and Nodejs, Express and MongoDB as backend.",
    },
    {
      img: project1,
      link: "https://happpytour.000webhostapp.com/",
      title: "Tourism",
      description:
        "This is my first project which I did in college.I have developed HTML, CSS, Bootstrap as Frontend and PHP, Mysql as Backend",
    },
  ].map((project) => (
    <Grid item md={6} lg={4}>
      <Card className={classes.root} onClick={() => window.open(project.link)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={project.img}
            title={project.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  ));
  return (
    <Fragment>
      <Box className={classes.projectsSection} id="Projects">
        <Container fixed>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item className={classes.projectsHeading}>
              <Typography variant="h6">Projects</Typography>
            </Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              {projectArray}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Projects;
