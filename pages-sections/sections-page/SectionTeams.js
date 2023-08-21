import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
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
              <h2 className={classes.title}>Our Leadership</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain>
                <CardBody>
                  <h4 className={classes.cardTitle}>Nanma Nambiar Nikalji </h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>CEO</h6>
                  </Muted>
                  <Muted>
                    <h5 >
                  She is an MBBS from Grant Medical College and an MD in Dermatology from GSMC and King Edward Memorial Hospital Mumbai.
She has clinical experience in Skin and Medicine areas for over last 23 years. She brings in diverse perspectives in our AI Strategy for Clinical applications and will be central to the digital transformation offerings we offer to our clients.
                </h5>
                </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain>
                {/* <CardAvatar profile plain> */}
                  {/* <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
                    {/* <img
                      src="/img/faces/marc.jpg"
                      alt="..."
                      className={classes.img}
                    /> */}
                  {/* </a> */}
                {/* </CardAvatar> */}
                <CardBody>
                  <h4 className={classes.cardTitle}>BV Ankith</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>CTO</h6>
                  </Muted>
                  <Muted>
                    <h5 >Ankith is WittyAnt’s Tech Leader in areas of Artificial Intelligence, Data Science and IOT, He has experience in  AI Implementations in Niche Medical Applications, Industrial Automation . He is a  Master in Science – MS Computational Science and Engineering from the Technical University of Munich majoring in Machine learning , Deep learning ,Information retrieval and Scientific Computing.</h5>
                  </Muted>
                 
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 1 END */}
    </div>
  );
}
