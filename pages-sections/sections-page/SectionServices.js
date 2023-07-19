import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Code from "@mui/icons-material/Code";
import FormatPaint from "@mui/icons-material/FormatPaint";
import Dashboard from "@mui/icons-material/Dashboard";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import AccessTime from "@mui/icons-material/AccessTime";
import AttachMoney from "@mui/icons-material/AttachMoney";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import featuresStyle from "/styles/jss/witty-ant/pages/sectionsSections/featuresStyle.js";
import { Typography } from "@mui/material";

const useStyles = makeStyles(featuresStyle);

export default function SectionServices({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
      <div className={classes.features6}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} style={{padding:"0px"}}>
            <h1 className={classes.title}>Services</h1>
              </GridItem>
              </GridContainer>
              </div>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Enterprise Application- Packaged Software and Open Source"
                iconColor="info"
                description=""
                 style={{padding:'10px 0 10px'}}
              >
              </InfoArea>
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Application  Development</h5></li>
                  <li><h5>Application  Support , Maintenance</h5></li>
                  <li><h5>We provide SAP consulting, implementation, and maintenance services leveraging our 100+ SAP experts. We bring deep business understanding across SAP modules to enable the transformation, keeping the business user at the center.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                title="Data Analytics , Business Intelligence "
                description=""
                iconColor="success"
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Commit to new vectors of growth as well as supporting long-term digital transformation with WittyAnt AI services. Tapping into our extensive tech expertise, you can create, maintain, and scale up your Artificial Intelligence (AI) and Machine Learning (ML) solutions while augmenting human capacity and increasing business value.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Ecommerce and retail"
                description=""
                iconColor="danger"
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Web Development  (Application UI/ UX)</h5></li>
                  <li><h5>Financial Transaction Processing – EDI</h5></li>
                  <li><h5>Supply Chain Applications – Application Development and Integration.</h5></li>
                  <li><h5>Mobile Applications Development.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Medical Device Services – Medical Writing"
                iconColor="danger"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Regulatory agencies have adopted more elaborate review measures that require substantial amounts of documentation</h5></li>
                  <li><h5>We help creating well-structured scientific documents that include clinical research documents, content for healthcare websites, health magazines, journals and news. Our services include regulatory medical writing and Educational medical writing.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Medical Device Services – Medical Writing"
                iconColor="danger"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Regulatory agencies have adopted more elaborate review measures that require substantial amounts of documentation</h5></li>
                  <li><h5>We help creating well-structured scientific documents that include clinical research documents, content for healthcare websites, health magazines, journals and news. Our services include regulatory medical writing and Educational medical writing.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Consulting services in Business Process re engineering"
                iconColor="danger"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Software  Testing </h5></li>
                  <li><h5>Staff Augmentation – resources for - Java Full Stack Development </h5></li>
                  <li><h5>QA Support (Automation and Manual testing) & Consulting experience on Building Testing COE</h5></li>
                  <li><h5>Enterprise Applications – SAP , Oracle Apps , JD Edwards , People soft , SalesForce </h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Cloud Services"
                iconColor="danger"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Cloud Consulting, Cloud Migration , Cloud Engineering
The cloud brings security, momentum, and cost-efficiency. WittyAnt’s cloud adoption and engineering services help enterprises reduce development costs, quicken time-to-market, and boost operational agility and security. Adopt the future of business efficiency now </h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Finance process outsourcing"
                iconColor="danger"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                <li ><h5>Business priorities are evolving and finance functions must transform to meet the expectations of new age customers</h5></li>
                <li ><h5>Powered by optimized operating models, digital technology led solutions and a diverse range of professional skills and experiences, we at Finance Solution deliver efficiencies, generate value and create unparalleled customer experiences all across the spectrum</h5></li>
                  <li ><h5>Accounts Payable/ Receivable accounting</h5></li>
                  <li ><h5>Finance Process Outsourcing</h5></li>
                  <li ><h5>General Accounting / Payroll accounting</h5></li>
                  <li ><h5>Fixed Assets  Accounting </h5></li>
                  <li ><h5>Regulatory reporting/ compliance</h5></li>
                  <li ><h5>Treasury and risk management</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="GBS Set up"
                iconColor="danger"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                <li ><h5>Our Leadership team and advisors have been part of the GCC set up story over a decade and experience in setting up shared services supporting areas including but not limited to technology , analytics , finance and HR , Legal , procurement , engineering operations.</h5></li>
                <li ><h5>We understand what it takes to be a successful global centre, our  team is highly experienced team   in areas such as artificial intelligence (AI), cloud computing, engineering, data analytics, and cybersecurity, tuning towards the next where partners can benefit from</h5></li>
                  <li ><h5>We partner with you to set up facilities , employees and infrastructure that handle operations (back-office functions, corporate business-support functions, and contact centers) and IT support (app development and maintenance, remote IT infrastructure, and help desks) to sustain productivity growth</h5></li>
                  <li ><h5>We help you hire the best of talent, set up world class infrastructure , provide consulting services - including legal and regulatory, finance and tax, talent and acquisition strategies, and infrastructure, real estate and IT infrastructure</h5></li>
                </ul>
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 1 END */}
      </div>
    </div>
  );
}
