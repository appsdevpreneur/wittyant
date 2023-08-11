import React from "react";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
// sections of this Page
import SectionAboutUs from "/pages-sections/sections-page/SectionAboutUs.js";
import SectionServices from "/pages-sections/sections-page/SectionServices.js";
import SectionIndustries from "/pages-sections/sections-page/SectionIndustries.js";
import SectionTechnology from "/pages-sections/sections-page/SectionTechnology.js";
import SectionCareers from "/pages-sections/sections-page/SectionCareers.js";
import SectionOffices from "/pages-sections/sections-page/SectionOffices.js";
import SectionTeams from "/pages-sections/sections-page/SectionTeams.js";
import SectionProjects from "/pages-sections/sections-page/SectionProjects.js";
import SectionTestimonials from "/pages-sections/sections-page/SectionTestimonials.js";
import SectionContacts from "/pages-sections/sections-page/SectionContacts.js";
import sectionsPageStyle from "/styles/jss/witty-ant/pages/sectionsPageStyle.js";
import Footer from "../components/Footer/Footer";
import Button from "/components/CustomButtons/Button.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
    window.addEventListener("scroll", updateView);
    updateView();
    return function cleanup() {
      window.removeEventListener("scroll", updateView);
    };
  });
  const updateView = () => {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("cd-vertical-nav")
      .getElementsByTagName("a");

    for (let i = 0; i < contentSections.length; i++) {
      var activeSection =
        parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
      if (
        contentSections[i].offsetTop - window.innerHeight / 2 <
        window.pageYOffset &&
        contentSections[i].offsetTop +
        contentSections[i].scrollHeight -
        window.innerHeight / 2 >
        window.pageYOffset
      ) {
        navigationItems[activeSection].classList.add("is-selected");
      } else {
        navigationItems[activeSection].classList.remove("is-selected");
      }
    }
  };
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  const smoothScroll = (target) => {
    var targetScroll = document.getElementById(target);
    scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  const classes = useStyles();
  return (
    <div>
      <Header
        color="info"
        brand=""
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      <div className={classes.main}>
        <SectionAboutUs id="aboutus" />
        <SectionServices id="services" />
        <SectionIndustries id="industries" />
        {/* <SectionTechnology id="technology" /> */}
        {/* <SectionProjects id="projects" /> */}
        <SectionTeams id="teams" />
        {/* <SectionTestimonials id="testimonials" /> */}
        <SectionOffices id="offices" />
        <SectionContacts id="contacts" />
        <SectionCareers id="careers" />
      </div>
      <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#aboutus"
              data-number="1"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("aboutus");
                }
              }
              }
            >
              <span className="cd-dot" />
              <span className="cd-label">About Us</span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              data-number="2"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("services");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Services</span>
            </a>
          </li>
          <li>
            <a
              href="#industries"
              data-number="3"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("industries");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Industries</span>
            </a>
          </li>
          {/* <li>
            <a
              href="#technology"
              data-number="4"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("technology");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Technology</span>
            </a>
          </li> */}
          {/* <li>
            <a
              href="#projects"
              data-number="4"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("projects");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Projects</span>
            </a>
          </li> */}
          <li>
            <a
              href="#teams"
              data-number="4"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("teams");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Teams</span>
            </a>
          </li>
          {/* <li>
            <a
              href="#testimonials"
              data-number="6"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("testimonials");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Testimonials</span>
            </a>
          </li> */}
          <li>
            <a
              href="#offices"
              data-number="5"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("offices");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Offices</span>
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              data-number="6"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("contacts");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Contact Us</span>
            </a>
          </li>
          <li>
            <a
              href="#careers"
              data-number="7"
              className=""
              onClick={(e) => {
                var isMobile = navigator.userAgent.match(
                  /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                );
                if (isMobile) {
                  // if we are on mobile device the scroll into view will be managed by the browser
                } else {
                  e.preventDefault();
                  smoothScroll("careers");
                }
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Careers</span>
            </a>
          </li>
        </ul>
      </nav>
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
              <Button href="https://www.facebook.com/people/WittyAnt/100094870993690"
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
                style={{ color: "gray" }}
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
