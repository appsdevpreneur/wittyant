/*eslint-disable*/
import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Footer from "../components/Footer/Footer";
import Button from "/components/CustomButtons/Button.js";
import errorPageStyle from "/styles/jss/witty-ant/pages/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      {/* <Header
        absolute
        color="transparent"
        brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      /> */}
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/clint-mckoy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>404</h1>
              <h2 className={classes.subTitle}>Page not found :((</h2>
              <h4 className={classes.description}>
                Ooooups! Looks like you got lost.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
      <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.left}>
              <Button
                    href="https://twitter.com/wittyanthill"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    href="https://instagram.com/wittyanthill?igshid=MzNlNGNkZWQ4Mg=="
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <Button   href="https://www.facebook.com/people/WittyAnt/100094870993690" 
                  justIcon simple color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
              </div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()} , made {" "}
                by{" "}
                <a
                  href="  "
                  target="_blank"
                   style={{color: "gray"}}
                >
                  WittyAnt
                </a>{" "}
              </div>
            </div>
          }
        />
    </div>
  );
}
