import {
  Box,
  // CardActions,
  Container,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import project1 from './images/project1.JPG';
import project2 from './images/project2.JPG';
import project3 from './images/project3.JPG';
import project4 from './images/project4.png';
import project5 from './images/project5.png';
import project6 from './images/project6.png';
import useStyles from './projectStyles';
// import Dialog from '../Dialog';
const Projects = () => {
  const classes = useStyles();
  const projectArray = [
    {
      img: project4,
      link: 'https://myportfolio-sk.web.app/',
      source: 'https://github.com/sathisk15/myportfolio',
      title: 'My Portfolio',
      description: 'My Portfolio is the responsive site developed with Reactjs',
      detailDescription: {
        purpose:
          "Portfolio website is a unique way to showcase your work and let others know about yourself. It's like an evergreen platform for your projects, case studies, and information about you. In addition, it's one of the best ways to express your personality, experience, abilities, skills, etc.... Creating portfolio website allows you to share and showcase your work easily with the employers you'd like to work for. Also, they are a great way to demonstrate the competencies you would list on a resume or talk about in an interview and they allow you to show and not just tell. During a job search, the portfolio showcases your work to potential employers. It enables you to build a solid online presence for yourself, while showcasing examples of your skills and past accomplishments.",
        // An online portfolio will certainly increase your visibility and presence.
        frontEnd:
          'ReactJs, Material-Ui, CSS are the technologies that are used in this project',
        backEnd: '',
      },
    },
    {
      img: project6,
      link: 'https://proshoppingapp.azurewebsites.net/',
      source: 'https://github.com/sathisk15/ProShop',
      title: 'ProShop',
      description: 'ProShop',
      detailDescription: {
        purpose: 'ProShop',
        // An online portfolio will certainly increase your visibility and presence.
        frontEnd:
          'ReactJs, Material-Ui, CSS are the technologies that are used in this project',
        backEnd: '',
      },
    },
    {
      img: project5,
      link: 'https://movieapp-9e173.web.app/',
      source: 'https://github.com/sathisk15/MovieApp',
      title: 'Movie App',
      description: '',
      detailDescription: {
        purpose: '',
        // An online portfolio will certainly increase your visibility and presence.
        frontEnd:
          'ReactJs, Material-Ui, CSS are the technologies that are used in this project',
        backEnd: '',
      },
    },

    {
      img: project3,
      link: 'https://devconnector-co.herokuapp.com/',
      title: 'DevConnector',
      source: 'https://github.com/sathisk15/DevConnector',
      description:
        'DevConnector is developed with the instructor while learning MERN stack.',
      detailDescription: {
        purpose:
          'DevConnector which is social platform for developers it has some great benefits for developers, in their careers and in connecting with their communities. Build relationships. Social media is not just about brands connecting with developers also share expertise and it gives you an opportunity to talk about what you know and what you want to be known, Increase your visibility, Educate yourself, Connect anytime. Web developers need to shape the websites as well as the social media pages of the companies in such a way that they attract more interaction from the potential as well as the existing customers. This will help them understand what their customers are looking for and where they are going wrong.',
        frontEnd: 'ReactJs, CSS, HTML',
        backEnd: 'NodeJs, ExpressJs, mongodb',
      },
    },
    {
      img: project2,
      link: 'https://resumemaker-co.herokuapp.com/',
      title: 'Resume Maker',
      source: false,
      description:
        'ResumeMaker is developed with basic HTML, CSS, Javascript and MongoDB',
      detailDescription: {
        purpose:
          "People can create their resumes by simply choosing templates. Then, they can upload their information by enter it manually which is like a fill in the blanks. Also, don't need to worry about formatting the resume.It allows the writer to focus on the task of writing a first class resume. It's certainly a good option for most job seekers who aren't graphic designers or otherwise need to impress hiring managers with a custom resume. Ultimately, resume templates can help you create a more professional-looking document and apply to more jobs more quickly.",
        frontEnd: 'HTML, CSS, javascript, bootstrap',
        backEnd: 'node Js, Express Js, MongoDB',
      },
    },
    {
      img: project1,
      link: 'https://happpytour.000webhostapp.com/',
      source: false,
      title: 'Tourism',
      description:
        'This is my first project which I did in college. built by PHP and Mysql',
      detailDescription: {
        purpose:
          "It allows travel/hospitality businesses to accept online bookings and manage personal bookings in a better way. They allow customers to place their booking at a time that is most convenient for them. They can make their booking at any time of day or night, without having to worry if it's within business hours or not. Giving you and your customers more time to have fun. An online travel booking system is very important tool for travel agents or travel companies as well It offers a combined search to the travel portals/websites. This puts money into your pocket faster and helps make sure that on the day of the event you don't have to worry about payment.",
        frontEnd: 'HTML, CSS, Bootstrap templates, javascript',
        backEnd: 'PHP, Mongodb',
      },
    },
  ].map((project, i) => (
    <Grid item md={6} lg={4} key={i}>
      <Card className={classes.root}>
        <CardActionArea
          style={{
            padding: '5px',
            // background: "#F5F5F5",
          }}
        >
          <CardMedia
            className={classes.media}
            image={project.img}
            title={project.title}
            style={{
              borderRadius: '5px',
              border: '1px solid lightgrey',
              boxShadow: '1px 1px 1px lightgrey',
            }}
            onClick={() => window.open(project.link)}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              style={{ textAlign: 'center' }}
              component="h2"
            >
              {project.title}
            </Typography>
            {/* <Typography variant="body2" color="textSecondary" component="p">
              {project.description}
            </Typography> */}
          </CardContent>
          <div className={classes.btn}>
            <Button
              variant="contained"
              className={classes.visitPage}
              href={project.link}
              target="_blank"
            >
              Vist Page
            </Button>

            <Button
              variant="contained"
              className={classes.viewSource}
              href={project.source}
              target="_blank"
              disabled={!project.source}
            >
              Source Code
            </Button>
          </div>
        </CardActionArea>
        {/* <CardActions>
          <Dialog
            head={project.title}
            link={project.link}
            dis={project.detailDescription}
          />
        </CardActions> */}
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
