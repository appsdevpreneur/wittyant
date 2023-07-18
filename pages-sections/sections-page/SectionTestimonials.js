import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import FormatQuote from "@mui/icons-material/FormatQuote";
import Star from "@mui/icons-material/Star";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import CardAvatar from "/components/Card/CardAvatar.js";
import Muted from "/components/Typography/Muted.js";
import Warning from "/components/Typography/Warning.js";

import testimonialsStyle from "/styles/jss/witty-ant/pages/sectionsSections/testimonialsStyle.js";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
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
    <div className="cd-section" {...rest}>
      {/* Testimonials 3 START */}
      <div className={classes.testimonials}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>What Clients Say</h2>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile1-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Rajesh Reddy</h4>
                  <Muted>
                    <h6>CEO @ Vishudha Tagline Traders</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I speak yell scream directly at the old guard on behalf
                    of the future. I gotta say at that time I’d like to meet
                    Kanye I speak yell scream directly at the old guard on
                    behalf of the future.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card testimonial plain>
                <CardAvatar testimonial plain>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img src="/img/faces/card-profile1-square.jpg" alt="..." />
                  </a>
                </CardAvatar>
                <CardBody plain>
                  <h4 className={classes.title}>Rajesh Reddy</h4>
                  <Muted>
                    <h6>CEO @ Vishudha Tagline Traders</h6>
                  </Muted>
                  <h5 className={classes.cardDescription}>
                    {'"'}I speak yell scream directly at the old guard on behalf
                    of the future. I gotta say at that time I’d like to meet
                    Kanye I speak yell scream directly at the old guard on
                    behalf of the future.{'"'}
                  </h5>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Testimonials 3 END */}
    </div>
  );
}
