import React, { Fragment } from 'react';

// Material-UI lab
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
// Material-Ui core
import { Box, Container, Grid, Typography } from '@material-ui/core';
import useStyles from './ExpEduTimelineStyle';
const expEduData = [
  {
    heading: 'Tata Consultancy Service',
    subHeading: 'Frontend web developer',
    period: 'May 2021 - Present',
    description: `Building lean, highly-performant web frontend products using React and JavaScript. Practicing modern web development with the help of redux a centralized state management, JavaScript, HTML, CSS and bootstrap. 
      Integrating REST Api’s with frontend and additional knowledge on backend Nodejs, server-side routing.
      Optimizing and Fixing bugs in the existing web applications
      Adding new features and business models with fast and agile dev processes as per the client’s requirements.
      Providing continues updates for enhancement, maintaining & ensuring the web pages run smoothly and easy to use.
      Being actively involved whenever production issues.
      `,
    companyLink: 'https://www.tcs.com/',
    icon: <WorkIcon />,
  },
  {
    heading: 'Tata Consultancy Service',
    subHeading: 'System Engineer',
    period: 'Sep 2019 - Apr 2021',
    description: `Risk management for Front Office traders and analyzing the data and ensure micro services are up and running fine. Also deal with data quality and application infra issues. 
    Agile process management, creating Jira and tracking it with developers for a bugfix and improvements.
    Running tests on UAT servers, deploy changes in to production servers and ensure post implementation check s are as expected.
    Leading the team during critical and major releases.
    Being part of activities like DR/QMW where all the production server will be maintained during weekends.`,
    companyLink: 'https://www.tcs.com/',
    icon: <WorkIcon />,
  },
  // {
  //   heading: 'Subham Freight Carriers India Pvt Ltd',
  //   subHeading: 'Book keeper (Part Time)',
  //   period: 'Apr 2018 - Mar 2019',
  //   description:
  //     'Employed to keep records of registered Transportation Copies and also generating reports based on Billing.',
  //   companyLink: 'https://subham.co.in/',
  //   icon: <WorkIcon />,
  // },
  {
    heading: 'Bachelor of science in computer science (B.Sc., CS)',
    subHeading: 'Bishop Heber College, Bharathidasan University.',
    period: 'Apr 2016 – Mar 2019',
    // description: "Scored 75%",
    collegeLink: 'https://bhc.edu.in/',
    icon: <SchoolIcon />,
  },
  {
    heading: 'Higher Secondary Certification (HSC)',
    subHeading: 'Bishop Heber Higher Secondary School',
    period: 'Apr 2015 – Mar 2016',
    // description: "Scored 75%",
    icon: <SchoolIcon />,
  },
  {
    heading: 'Secondary School Leaving Certificate (SSLC)',
    subHeading: 'Bishop Heber Higher Secondary School',
    period: 'Apr 2015 – Mar 2016',
    // description: "Scored 90%",
    icon: <SchoolIcon />,
  },
];
const ExpEduTimeline = () => {
  const classes = useStyles();
  const mobileView = (
    <Timeline>
      {expEduData.map((data, index) => (
        <div className={classes.MobileViewTimeline} key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary">{data.icon}</TimelineDot>
            {index !== expEduData.length - 1 ? <TimelineConnector /> : ''}
          </TimelineSeparator>

          <TimelineContent style={{ padding: '3px' }}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" style={{ cursor: 'pointer' }}>
                {data.heading}
              </Typography>
              <p style={{ cursor: 'pointer' }}>{data.subHeading}</p>
              <p>{data.period}</p>
              <p>{data.description}</p>
            </Paper>
          </TimelineContent>
        </div>
      ))}
    </Timeline>
  );
  return (
    <Fragment>
      <Box className={classes.expEduTimelineSection} id="Experience">
        <Container fixed id="Education">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item className={classes.expEduTimelineHeading}>
              <Typography variant="h6">Experience & Education</Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              xs={12}
              className={classes.expEduTimelineContent}
            >
              <div>
                <Timeline className={classes.desktopView} align="alternate">
                  {expEduData.map((data, index) => (
                    <TimelineItem key={index}>
                      <TimelineOppositeContent>
                        <Typography
                          variant="body1"
                          className={classes.timelineDate}
                          color="textSecondary"
                        >
                          {data.period}
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary">{data.icon}</TimelineDot>
                        {index !== expEduData.length - 1 ? (
                          <TimelineConnector />
                        ) : (
                          ''
                        )}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                          <p style={{ fontWeight: 'bold' }}>{data.heading}</p>
                          <p>{data.subHeading}</p>
                          <p>{data.description}</p>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
              <div className={classes.mobileView}>{mobileView}</div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default ExpEduTimeline;
