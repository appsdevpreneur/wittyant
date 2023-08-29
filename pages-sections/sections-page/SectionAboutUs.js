import React from "react";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import { makeStyles } from '@mui/styles';
import headersStyle from "/styles/jss/witty-ant/pages/sectionsSections/headersStyle.js";
import PublicIcon from '@mui/icons-material/Public';

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
           style={{ backgroundImage: "url('img/bbg4.jpg')" ,
           width: "100%", /* Set the desired width */
           height: "auto", /* Set the desired height */
          }} >
         <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h1 className={classes.title}>WittyAnt</h1>
                <ul>
                  <li><h4>An Aspiring young organization Led by founders with technology consulting experience of 2000 + Man months between them touching upon a gamut of industries.</h4></li>
                <li ><h4>After 2 decades of experience in the technology industry  and medical fraternity many of the current leaders including exceptional tech talent from Gen Z interconnected by common threads came together to set up  WittyAnt Technologies  –Ants  are known to be hardworking and industrious ,  in addition a WittyAnt is one that is ingeniously clever in conception or execution,  the name reverberates with the ethos  that we had in mind while this was an “ Idea” .</h4></li>
                  <li ><h4>We decided to bring in our experience to drive business outcomes and partner with organizations with cutting edge technologies to position themselves to be market differentiators to customers  we serve. </h4></li>
                  <li ><h4>Our Network of tech experts , product owners are spread across geographies  to at best provide a near shore experience where required and with  significant talent capabilities spread across India.</h4></li>
                  <li><h4>We seek to be the partner of trust and execution in an ever changing world defined by  automation , artificial intelligence  and other  digital transformation avenues.</h4></li>
                  <li><h4>We also  are passionate about helping customers with set up of Global Business Services given our extensive work experience in setting up Global Captives prior to our entrepreneurial journey</h4></li>
                  <li><h4>To be a contributor to the futuristic amalgamation of cultures and boundaries   with humans across the globe, inspiring and improving lives.</h4></li>
                </ul>
                <br />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h4 className={classes.title}>Our Mission</h4>
                <ul>
                  <li><h4>
                To inspire people and improve lives through technology delivered by us.
                </h4></li>
                </ul>
                <br />
              </GridItem>
              
              <GridItem xs={12} sm={12} md={8}>
                <h4 className={classes.title}>Vision</h4>
                <ul>
                  <li><h4>
                  To contribute to the overall wellbeing of the communities we operate our business in and beyond and to our customers, and employees while also being committed to building a sustainable world through technology and its enabled outcomes
                </h4></li>
                </ul>
                <br />
              </GridItem>
              
              <GridItem xs={12} sm={6} md={6}>
                <h4 className={classes.title}>Values</h4>
                <ul>
                  <li>
                    <h4> &#x1F3C6; One - Ness</h4>
                    <h4>&#128175; Trust</h4>
                    <h4>&#128540; Humour</h4>
                    <h4>&#127757; Integrity</h4>
                    <h4>&#127993; Thrive</h4>
                    <h4>&#x23F3; Strive</h4>
                  </li>
                
				<br/>
				
                  <li>
				  <h4 className={classes.title}>
                Are you prepared to embark on this thrilling adventure with us? Discover our website to gain deeper insights into our diverse range of products and services?. Feel free to contact our team to explore how we can contribute to the prosperity of your business.</h4>
				</li>
                </ul>
                
              </GridItem>
              
              </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
