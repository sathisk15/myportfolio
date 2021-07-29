import { Box, Container, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@material-ui/core/styles";
import cert0 from "./images/cert0.JPG";
import cert1 from "./images/cert1.JPG";
import cert3 from "./images/cert3.JPG";
import award0 from "./images/award0.JPG";
import award1 from "./images/award1.JPG";

import useStyles from "./certificationStyles";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: cert0,
    link: "https://www.udemy.com/course/mern-stack-front-to-back/",
    label: "Mern Certification",
  },
  {
    imgPath: cert1,
    link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    label: "We developer bootcamp",
  },
  {
    imgPath: cert3,
    link: "https://support.microsoft.com/en-us/topic/earn-a-microsoft-technology-associate-mta-certification-357215d0-31ce-0620-feba-1bb60165b770",

    label: "MTA Certification",
  },
  {
    imgPath: award0,
    link: "#",
    label: "Learning Achievement Award",
  },
  {
    imgPath: award1,
    link: "#",
    label: "Fresco Play Miles Award",
  },
];

const Certifications = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Fragment>
      <Box className={classes.certificationSection} id="Certification">
        <Container fixed>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item className={classes.certificationHeading}>
              <Typography variant="h6">Certifications & Awards</Typography>
            </Grid>
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={11} md={7} className={classes.imageContainer}>
                <div
                  className={classes.root}
                  style={{
                    "&:hover": { cursor: "pointer" },
                  }}
                >
                  <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {tutorialSteps.map((step, index) => (
                      <div
                        key={step.label}
                        style={{
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        {Math.abs(activeStep - index) <= 2 ? (
                          <img
                            className={classes.img}
                            src={step.imgPath}
                            alt={step.label}
                            style={{
                              "&:hover": { cursor: "pointer" },
                              padding: "20px",
                            }}
                            onClick={() => {
                              if (step.link !== "#") {
                                window.open(step.link);
                              }
                            }}
                          />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Certifications;
