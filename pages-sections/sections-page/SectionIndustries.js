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
import { Typography } from "@mui/material";

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
                        <img src="/img/retail.jpeg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/retail.jpeg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Retail</h6>
                      </Info>
                      <h5 className={classes.cardTitle}>
                        The rise of e-commerce and omnichannel, changing customer behavior, hyperpersonalization, and increased supply chain complexity have reshaped the industry impacting retailer profits over the past 5 Years. WittyAnt with its business and technical knowhow helps you achieve the imperative scalability in the technical architecture and operating model to keep pace with the changing landscape.
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/automotive.jpeg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/automotive.jpeg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Automotive</h6>
                      </Info>
                      <h5 className={classes.cardTitle}>
                        Disruptive technologies, coupled with emerging markets and evolving consumer preferences towards ownership, are set to revolutionize how industry players adapt to shifting consumer behavior, form partnerships, and lead digital business transformation. WittyAnt helps in this strategic move to shape the organizations evolution with its IOT and Software Solutions.
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/cpg.jpeg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/cpg.jpeg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>CPG</h6>
                      </Info>
                      <h5 className={classes.cardTitle}>
                        The CPG industry is revolutionized by digital transformation impacting consumer communication, sales strategies, data utilization and supply chain and manufacturing operations , WittyAnt brings  expertise in the top notch digital initiatives to aid companies in achieving innovation , efficiency and operational improvements that propel their success.
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/ship-building.jpg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/ship-building.jpg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Shipping</h6>
                      </Info>
                      <h5 className={classes.cardTitle}>
                        The shipbuilding and ship repair industry is projected to lose approximately 33% of skilled workforce and 48% of management by 2028. There is huge potential to increase cost savings, decrease production timelines, and drive down inefficiencies in Lifecyle management of ships. WittyAnt brings in the expertise in emergent technologies including the Internet of Things, Big Data, Robotic automation of processes, and Artificial Intelligence (AI) 
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/manufacturing-ai.jpeg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/manufacturing-ai.jpeg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Manufacturing</h6>
                      </Info>
                      <h5 className={classes.cardTitle}>
                        WittyAnt synergies with Manufacturing industry brings in Advanced Analytics for planning and forecasting, digital tools to improve productivity and safety , Automated processes to improve efficiency , reduce error rates and increase efficiencies and advanced supply chain enterprise platforms on cloud.
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/pharma.jpeg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/pharma.jpeg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Pharma</h6>
                      </Info>
                      <h5 className={classes.cardTitle}>
                        Amidst the challenges posed by increasing intricacy, expenses, and regulatory demands, a growing number of pharmaceutical executives are turning their attention to Industry 4.0 manufacturing and implementation of cloud based enterprise applications. This promises to significantly curtail pharmaceutical manufacturing expenses, elevate product quality, and alleviate capacity limitations.  WittyAnt offers Industry 4.0 Support. We also offer Medical writing services where we offer a clear, concise, and well-organized approach to scientific writing, assisting companies with drug development and post-approval documentation.
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src="/img/banking.jpeg" alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage:
                            "url('/img/banking.jpeg')",
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h6 className={classes.cardCategory}>Banking and Financials </h6>
                      </Info>
                      <h5 className={classes.cardTitle}>
                        While adopting AI, most banks initially prioritize productivity gains by automating repetitive tasks and bolstering fraud detection and monitoring methods to mitigate regulatory risks. Furthermore, some banks have begun implementing AI solutions in their capital market operations. WittyAnt offers artificial intelligence products and data insights, harnessed through WittyAntAI.
                      </h5>
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
