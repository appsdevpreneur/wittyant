import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import Chat from "@mui/icons-material/Chat";
import VerifiedUser from "@mui/icons-material/VerifiedUser";
import Fingerprint from "@mui/icons-material/Fingerprint";
import GroupWork from "@mui/icons-material/GroupWork";
import Airplay from "@mui/icons-material/Airplay";
import LocationOn from "@mui/icons-material/LocationOn";
import Extension from "@mui/icons-material/Extension";
import ChildFriendly from "@mui/icons-material/ChildFriendly";
import WatchLater from "@mui/icons-material/WatchLater";
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
import headersStyle from "/styles/jss/witty-ant/pages/sectionsSections/headersStyle.js";
// const useStyles = makeStyles(featuresStyle);
const useStyles = makeStyles(headersStyle);
export default function SectionTechnology({ ...rest }) {
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
      <div className={classes.sectionBlank} id="blanksection" />
      {/* HEADER 1 START */}
      <div>
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: "url('/img/vr_tech.jpeg')" }}
        >
      <div className={classes.container}>
        {/* Feature 1 START */}
        <div className={classes.features1}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h1 className={classes.title}>Our Core Technology</h1>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="Digital Transformation"
                description="Speedier, easier, and more humane world of work"
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                style={{color:"white"}}
                title="S4 HANA – Implementation/ Support "
                description="Accelerate your SAP S/4HANA implementation with SAP EnterpriseDivide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Success Factor implementation"
                description="Your people impact every aspect of your business. The insights and technology you need to operate faster and smarter are available, but the traditional silos that span HR and the broader enterprise can hinder transformative change. By connecting HR with finance, procurement, and more, SAP SuccessFactors solutions can help you:ivide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Chat}
                title="SAP retail HANA Implementation"
                description="SAP retail HANA Implementation"
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                title="Artificial Intelligence Consulting Solutions"
                description="Accelerate your SAP S/4HANA implementation with SAP EnterpriseDivide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Internet of Things"
                description="Your people impact every aspect of your business. The insights and technology you need to operate faster and smarter are available, but the traditional silos that span HR and the broader enterprise can hinder transformative change. By connecting HR with finance, procurement, and more, SAP SuccessFactors solutions can help you:ivide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={VerifiedUser}
                title="Automation – RPA (Healthcare , travel , insurance , finance) "
                description="Automation – RPA (Healthcare , travel , insurance , finance) "
                iconColor="success"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Digitization on ECommerce"
                description="Digitization on ECommerce"
                iconColor="danger"
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                vertical
                icon={Fingerprint}
                title="Mobile App Development"
                description="Mobile App Development"
                iconColor="danger"
              />
            </GridItem>
          </GridContainer>
        </div>
        {/* Feature 1 END */}
      </div>
    </div>
    </div>
    </div>
  );
}
