/* eslint-disable */
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Icon from "@mui/material/Icon";
// @mui/icons-material

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TuneIcon from '@mui/icons-material/Tune';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Dashboard from "@mui/icons-material/Dashboard";
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
              We understood Who’s target buyer?what they need and What are their pain points? and we came up with a solution.
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
                title="E-Commerce Application"
                description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
                icon={ShoppingCartCheckoutIcon}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Saves Time"
                description="I would save lot of time of the customer by just relaxing and ordering the Groceries needed to any where "
                icon={QueryBuilderIcon}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="Free Shipping"
                description="Deliver Goods on Time and handle the goods with Care"
                icon={LocalShippingIcon}
                iconColor="success"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Admin Panel"
                description="Admin Panel for accessing all the modules in Vishudha Ecommerce Business"
                icon={AdminPanelSettingsIcon}
                iconColor="warning"
              />
              <InfoArea
                className={classes.info4}
                title="Analytics Integrated"
                description="Fully Integrated with Analytics to track the Sales"
                icon={AnalyticsIcon}
                iconColor="success"
              />
              <InfoArea
                className={classes.info4}
                title="Intuitive Dashboard "
                description="Intuitive Dashboard based on the Roles"
                icon={Dashboard}
                iconColor="info"
              />
               <InfoArea
                className={classes.info4}
                title="Configure "
                description="Can Configure all the Categories, Sub categories, Products, Prices, Discounts and Taxes details"
                icon={TuneIcon}
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
