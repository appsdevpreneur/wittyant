import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import TrendingUp from "@mui/icons-material/TrendingUp";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Info from "/components/Typography/Info.js";
import Danger from "/components/Typography/Danger.js";
import Success from "/components/Typography/Success.js";
import Button from "/components/CustomButtons/Button.js";

import blogsStyle from "/styles/jss/witty-ant/pages/sectionsSections/blogsStyle.js";

const useStyles = makeStyles(blogsStyle);

export default function SectionIndustries({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>

      {/* Industries 2 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Industries</h2>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Automotive</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Banking and Financial Services</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Consumer Products</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Retail</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Energy and Utilities</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Manufacturing</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Telecom</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Construction</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Insurance</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Shipping</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Pharma</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/examples/card-blog4.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/examples/card-blog4.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Education & Research</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        The automotive industry comprises a wide range of companies and organizations involved in the design, development, manufacturing, marketing, selling, repairing, and modification of motor vehicles.
                        </a>
                      </h4>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 2 END */}
    </div>
  );
}
