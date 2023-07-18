/* eslint-disable */
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Build from "@mui/icons-material/Build";
import Subject from "@mui/icons-material/Subject";
import FormatPaint from "@mui/icons-material/FormatPaint";
import Code from "@mui/icons-material/Code";
import Dashboard from "@mui/icons-material/Dashboard";
import Timeline from "@mui/icons-material/Timeline";
import Group from "@mui/icons-material/Group";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Button from "/components/CustomButtons/Button.js";
import Muted from "/components/Typography/Muted.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import Badge from "/components/Badge/Badge.js";

import projectsStyle from "/styles/jss/witty-ant/pages/sectionsSections/projectsStyle.js";

const useStyles = makeStyles(projectsStyle);

export default function SectionProjects({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Project 4 START */}
      <div className={classes.projects + " " + classes.projects4}>
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
              <h2 className={classes.title}>
                Some of Our Awesome E-Commerce Products
              </h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about
                your projects. Keep you user engaged by providing meaningful
                information.
              </h5>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{
                  backgroundImage: "url('/img/tt_client.png')"
                }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">Client: Vishudha Tagline Traders</Badge>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Tagline E-Commerce Client</h3>
                    <p className={classes.cardDescription}>
                    E-Commerce Client App to facilitate procuring Vishudha Groceries uin Domestic and Bulk.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <InfoArea
                className={classes.info4}
                title="Graphic Design"
                description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
                icon={FormatPaint}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in React, MUI"
                description="We've developed the App with React, MUI."
                icon={Code}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="Admin Dashboard"
                description="There is also a Fully Customizable Admin Dashboard for this product."
                icon={Dashboard}
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Marketing"
                description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                icon={Timeline}
                iconColor="rose"
              />
              <InfoArea
                className={classes.info4}
                title="Fully Coded in React, MUI"
                description="We've developed the App with React, MUI"
                icon={Code}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Built Audience"
                description="There is also a Fully Customizable Admin Dashboard for this product."
                icon={Group}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{
                  backgroundImage: "url('/img/tt_admin.png')"
                }}
              >
                <CardBody background className={classes.cardBody4}>
                  <Badge color="rose">CLIENT: Vishudha Tagline Traders</Badge>
                  <a href="#pablo" onClick={(e) => e.preventDefault}>
                    <h3 className={classes.cardTitle}>Tagline E-Commerce MIS</h3>
                    <p className={classes.cardDescription}>
                      Admin module to facilitate all the backend operations of Tagline Traders.
                    </p>
                  </a>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 4 END */}
    </div>
  );
}
