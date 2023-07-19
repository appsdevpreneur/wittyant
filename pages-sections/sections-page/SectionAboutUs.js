import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Share from "@mui/icons-material/Share";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
// core components
import Header from "/components/Header/Header.js";
import Button from "/components/CustomButtons/Button.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";

import headersStyle from "/styles/jss/witty-ant/pages/sectionsSections/headersStyle.js";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      <div className={classes.sectionBlank} id="blanksection" />
      {/* HEADER 1 START */}
      <div>
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: "url('/img/bg111.jpg')" }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Witty Ant</h1>
                <h4>
                  An Aspiring young organization Led by Leaders with technology consulting experience of 2000 + Man months between them.
                  Vision – To contributes to the overall wellbeing of the communities it operates it business in and a reach beyond,   customers, and its employees while also being committed to building a sustainable world
                  To be a contributor to the futuristic amalgamation of cultures and boundaries   with humans across the globe, inspiring and improving lives.

                </h4>
                <br />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h4 className={classes.title}>Our Mission</h4>
                <h4>
                Elevating Business to achieve the business outcomes and communities to improve better standard of living  with innovation, transformation and cutting edge solutions  and services  while remaining uncompromising on DNA of honesty , transparency , integrity and partnership
                </h4>
                <br />
              </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h4 className={classes.title}>Our Values</h4>
                <h4>
                {`After years of experience in the technology industry many of the current leaders interconnected by common threads came together to set up Zaradros – initial essence of human belonging, affection and love.   We decided to bring in our experience to drive business outcomes and partner with organizations with cutting edge technologies to position themselves to be market differentiators to customers they serve.
                  ${'\n'}Our Network of tech experts , product owners are spread across geographies  to at best provide a near shore experience where required and with  significant talent capabilities spread across India.
                  We seek to be the partner of trust and execution in an ever changing world defined by  automation , artificial intelligence  and other  digitial transformation avenues.
                  We also  are passionate about helping customers with set up of Global Business Services given our extensive work experience in setting up Global Captives prior to our entrepreunal journey.
                  `}</h4>
                <br />
              </GridItem>
              </GridContainer>
                  {/* <li>
                  <ul>One - Ness</ul>
                  <ul>Trust</ul>
                  <ul>Humour</ul>
                  <ul>Integrity</ul>
                  <ul>Excellence</ul>
                  <ul>Strive</ul>
                  </li> */}
          </div>
        </div>
      </div>
    </div>
  );
}
