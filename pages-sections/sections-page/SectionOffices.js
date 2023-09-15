import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import BusinessIcon from '@mui/icons-material/Business';
import featuresStyle from "/styles/jss/witty-ant/pages/sectionsSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionOffices({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        {/* Feature 1 START */}
        {/* <div className={classes.features1}> */}
        {/* Feature 1 END */}
      </div>
      {/* Feature 5 START */}
      <div
        className={classes.features5}
        style={{ backgroundImage: "url('/img/latest/our-offices.jpg')" }}
        // style={{ backgroundImage: "url('/img/examples/office3.jpg')" }}
      >
        <GridContainer className={classes.margin0}>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>Our Offices</h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer
              className={classes.gridContainer}
              style={{ margin: "0!important" }}
            >
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={BusinessIcon}
                  title="India"
                  description={
                    <p>
                      WittyAnt Technologies Pvt Ltd<br/>
                    
  WTC Kharadi, Tower 5, World Trade Center , Kharadi, MIDC Knowledge Park, Pune, MH 411014
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              </GridContainer>
              {/* <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={BusinessIcon}
                  title="USA"
                  description={
                    <p>
                      WittyAnt Technologies Pvt Ltd, MI, USA
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={BusinessIcon}
                  title="Middle East"
                  description={
                    <p>
                      WittyAnt Technologies Pvt Ltd, Dubai, UAE
                    </p>
                  }
                  iconColor="info"
                />
              </GridItem>
            </GridContainer> */}
            {/* <GridContainer
              className={classes.gridContainer}
              style={{ margin: "0!important" }}
            >
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={ViewCarousel}
                  title="Example Pages Included"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AccessTime}
                  title="Save Time"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.gridItem}>
                <InfoArea
                  vertical
                  className={classes.infoArea5}
                  icon={AttachMoney}
                  title="Save Money"
                  description={
                    <p>
                      The moment you use Material Kit, you know you’ve never
                      felt anything like it. With a single use, this powerfull
                      UI Kit lets you do more than ever before.
                    </p>
                  }
                />
              </GridItem>
            </GridContainer> */}
          </div>
        </GridContainer>
      </div>
      {/* Feature 5 END */}
    </div>
  );
}
