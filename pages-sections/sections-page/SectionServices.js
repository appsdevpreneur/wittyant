import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import TerminalIcon from '@mui/icons-material/Terminal';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SpeedIcon from '@mui/icons-material/Speed';
import PsychologyIcon from '@mui/icons-material/Psychology';

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
                icon={TerminalIcon}
                title="Enterprise Application- Packaged Software and Open Source"
                iconColor="info"
                description=""
                 style={{padding:'10px 0 10px'}}
              >
              </InfoArea>
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li><h5>We provide  ERP –SAP/ Oracle Apps/ Open Source ERP consulting, implementation, and maintenance services leveraging our 100+ ERP experts. We bring deep business understanding to enable the transformation, keeping the business user at the centre.</h5></li>
                  <li><h5>In light of Oracle and SAP's recent announcements about phasing out standard support for older versions of their enterprise resource planning (ERP) suites in the coming years, executives whose businesses rely on these systems are seizing the opportunity to reassess their ERP programs</h5></li>
                  <li><h5>Leverage Our  Skills on S4 HANA for general industries and expertise in areas of SAP S/4 for Fashion and Retail to get you the unfair advantage.</h5></li>
                  {/* <li ><h5>Application  Development</h5></li> */}
                  {/* <li><h5>Application  Support , Maintenance</h5></li> */}
                  <li><h5>We provide SAP consulting, implementation, and maintenance services leveraging our 100+ SAP experts. We bring deep business understanding across SAP modules to enable the transformation, keeping the business user at the centre.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={PsychologyIcon}
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
                icon={ShoppingCartCheckoutIcon}
                title="E-Commerce and Retail"
                description=""
                iconColor="info"
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li><h5>In light of unprecedented industry disruption, a retailer’s actions today could determine whether it spends the next 20 years as a leader or a laggard.</h5></li>
                  <li><h5>Consumers are increasingly taking an omnichannel path to purchase across all consumer categories , Maximize your readiness and value with WittyAnt’s Ecommerce Solutions.</h5></li>
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
                icon={MedicalInformationIcon}
                title="Medical Device Services – Medical Writing"
                iconColor="info"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Regulatory agencies have adopted more elaborate review measures that require substantial amounts of documentation</h5></li>
                  <li><h5>We help creating well-structured scientific documents that include clinical research documents, content for healthcare websites, health magazines, journals and news. Our services include regulatory medical writing and Educational medical writing.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            {/* <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={EngineeringIcon}
                title="Consulting services in Business Process re engineering"
                iconColor="success"
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
            </GridItem> */}
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={CloudDoneIcon}
                title="IOT & Cloud Services"
                iconColor="warning"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li ><h5>Cloud Consulting, Cloud Migration , Cloud Engineering
The cloud brings security, momentum, and cost-efficiency. WittyAnt’s cloud adoption and engineering services help enterprises reduce development costs, quicken time-to-market, and boost operational agility and security. Adopt the future of business efficiency now </h5></li>
                <li><h5>Internet of things -  Delivering apps to support smart initiatives from the various industries ranging from security to home automation to industrial IoT.</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={MonetizationOnIcon}
                title="Financial Process Outsourcing"
                iconColor="info"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                <li ><h5>Business priorities are evolving and finance functions must transform to meet the expectations of new age customers</h5></li>
                <li ><h5>Powered by optimized operating models- analyzing workflows, automation, ensuring scalability, digital technology led solutions and a diverse range of professional skills and experiences, we at WittyAnt Financial Group deliver efficiencies, generate value and create unparalleled customer experiences all across the spectrum</h5></li>
                  <li ><h5>Accounts Payable/ Receivable accounting</h5></li>
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
                icon={AccountTreeIcon}
                title="Shared Service Centre Consulting"
                iconColor="success"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                  <li><h5>Witty Ant GBS services helps you set up , build and scale internal business services location owned by you ensuring centralizes delivery of business services, whether back-office support services or customer-facing services. Our services encompass a wide range of support, including process prioritization for the smooth transition to the SSC, the development of a sound governance and operating model, crafting an effective talent strategy, and implementing communication and change management disciplines.</h5></li>
                <li ><h5>Our Leadership team and advisors have been part of the GCC set up story over a decade and experience in setting up shared services supporting areas including but not limited to technology , analytics , finance and HR , Legal , procurement , engineering operations.</h5></li>
                  <li ><h5>We partner with you to set up facilities , employees and infrastructure that handle operations (back-office functions, corporate business-support functions, and contact centres) and IT support (app development and maintenance, remote IT infrastructure, and help desks) to sustain productivity growth</h5></li>
                  <li ><h5>We help you hire the best of talent, set up world class infrastructure , provide consulting services - including legal and regulatory, finance and tax, talent and acquisition strategies, and infrastructure, real estate and IT infrastructure</h5></li>
                </ul>
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={SpeedIcon}
                title="Software Testing"
                iconColor="info"
                description=""
              />
              <Typography component="div" style={{textAlign:"left"}}>
                <ul>
                <li ><h5>Set up Testing COE – Consulting – Propel and Accelerate Your Testing Game With Our Testing Centre Of Excellence ,  WittyAnt offers the following services.</h5></li>
                  <li ><h5>Automation Testing- API testing, GUI Testing, Content Testing.</h5></li>
                  <li ><h5>Mobile Applications Testing</h5></li>
                  <li ><h5>Performance Testing</h5></li>
                  <li ><h5>Regression Testing</h5></li>
                  <li ><h5>End to End Testing </h5></li>
                  <li ><h5>UI/ UX Testing</h5></li>
                  <li ><h5>Exploratory Testing </h5></li>
                  <li ><h5>Security Testing / VAPT </h5></li>
                  <li ><h5>Web 3+ Testing</h5></li>
                  <li ><h5>BA in Testing </h5></li>
                  
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
