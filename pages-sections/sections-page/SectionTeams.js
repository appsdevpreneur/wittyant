import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// import  from "@mui/icons-material/";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import Muted from "/components/Typography/Muted.js";

import teamsStyle from "/styles/jss/witty-ant/pages/sectionsSections/teamsStyle.js";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Team 1 START */}
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>Our Team</h2>
              <h5 className={classes.description}>
              Our team is the foundation of a high-performing business and a good team ethic can be held largely accountable for the success and smooth running of the organization. 
              So Thats what our teams does to ensure that they are collectively productive and drive the company forward
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      src="/img/faces/marc.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Sunil</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Full Stack Developer</h6>
                  </Muted>
                  <p className={classes.description}>
                    And I love you like Kanye loves Kanye. We need to restart
                    the human foundation.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="facebook"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="google"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-google" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain>
                <CardAvatar profile plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      src="/img/faces/marc.jpg"
                      alt="..."
                      className={classes.img}
                    />
                  </a>
                </CardAvatar>
                <CardBody>
                  <h4 className={classes.cardTitle}>Venkat Naga Gopi</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>UI / UX DESIGNER , MERN Stack Developer</h6>
                  </Muted>
                  <p className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation. And I love you like Kanye loves Kanye.
                  </p>
                </CardBody>
                <CardFooter profile className={classes.justifyContent}>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="twitter"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="dribbble"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <Button
                    href="#pablo"
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.btn}
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
  );
}
