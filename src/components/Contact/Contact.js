import { Box, Card, Container, Grid, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import contact from "../../images/contact.jpg";
import useStyles from "./contactStyles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SocialIcons from "../SocialIcons";
const Contact = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.contactSection} id="Contact">
        <Container fixed>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} md={6}>
                <div className={classes.contactImageContainer}>
                  <img
                    src={contact}
                    alt="contact"
                    width="80%"
                    style={{ margin: "0 10%" }}
                  />
                </div>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
                md={6}
              >
                <Card style={{ width: "auto" }}>
                  <Grid item container>
                    <Typography variant="h6" className={classes.contactHeading}>
                      Contact
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <div className={classes.contact}>
                      <p>
                        <AccountCircleIcon style={{ margin: "2px 15px" }} />
                        Sathiskumar R
                      </p>
                      <p>
                        <PhoneIphoneIcon style={{ margin: "2px 15px" }} />
                        +91 7010833302
                      </p>
                      <p>
                        <EmailIcon style={{ margin: "2px 15px" }} />
                        rsathisk15@gmail.com
                      </p>
                      <p>
                        <LocationOnIcon style={{ margin: "2px 15px" }} />
                        Bangalore
                      </p>
                      <SocialIcons />
                    </div>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Contact;
