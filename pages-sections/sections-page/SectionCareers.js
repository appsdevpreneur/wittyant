import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Card from "/components/Card/Card.js"
import Muted from "/components/Typography/Muted.js";
import careersStyle from "/styles/jss/witty-ant/pages/sectionsSections/careersStyle.js";

const useStyles = makeStyles(careersStyle);

export default function SectionCareers({ ...rest }) {
  const classes = useStyles();
  const [specialitySelect, setSpecialitySelect] = React.useState("1");
  const handleSpeciality = (event) => {
    setSpecialitySelect(event.target.value);
  };
  return (
    <div className="cd-section" {...rest}>
      {/* Careers 1START */}
      <div className={classes.career}>
        <div className={classes.container}>
          <GridContainer>

            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              
              <h2 className={classes.title} style={{color:"black"}}>Careers</h2>
              <Muted>
                <h4 className={classes.cardTitle}>
                  Navigate your career in the right direction.</h4>
                <h4 className={classes.cardTitle}>Every Voice Matters , join us to be the Voice that will define our future.</h4>
                <h4 className={classes.cardTitle}>We intend to build a workforce that is diverse irrespective of gender, religion, age, country of origin and what have you.
                </h4>
              </Muted>
               <div className={classes.container} style={{ color: "gray" }}>
                <GridContainer
                  className={classes.gridContainer}
                  style={{ margin: "0!important", color: "gray" }}
                > 
                  <GridItem xs={12} sm={6} md={4} lg={3} style={{ margin: "1rem", padding: "1rem" }}> 
                     {/* <FormControl
                  fullWidth
                  className={
                    classes.selectFormControl +
                    " " +
                    classes.selectUnderlineRoot
                  }
                > 
                     <InputLabel id="demo-simple-select-label">Specializations</InputLabel > */}
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      value={specialitySelect}
                      onChange={handleSpeciality}
                      inputProps={{
                        name: "specialitySelect",
                        id: "speciality-select"
                      }}
                      label="Specializations"
                      placeholder="Specializations"
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Specializations
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="1"
                      >
                        Engineering & Design
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="2"
                      >
                        Java Full Stck Developer
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        MERN Stack Developer
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        Python Developer
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        ABAP Developer
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        SAP Cosultant
                      </MenuItem>
                    </Select>
                    {/* </FormControl> */}
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={3} style={{ margin: "1rem", padding: "1rem" }}>
                    <FormControl
                      fullWidth
                      className={
                        classes.selectFormControl +
                        " " +
                        classes.selectUnderlineRoot
                      }
                    >
                      <InputLabel id="demo-simple-select-label">Locations</InputLabel >
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={specialitySelect}
                        onChange={handleSpeciality}
                        inputProps={{
                          name: "specialitySelect",
                          id: "speciality-select"
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          Locations
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          All Locations
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Pune
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Dubai, UAE
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="4"
                        >
                          Remote
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={3} style={{ margin: "1rem", padding: "1rem" }}>
                    <FormControl
                      fullWidth
                      className={
                        classes.selectFormControl +
                        " " +
                        classes.selectUnderlineRoot
                      }
                    >
                      <InputLabel id="demo-simple-select-label">Contract Type</InputLabel >
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={specialitySelect}
                        onChange={handleSpeciality}
                        inputProps={{
                          name: "specialitySelect",
                          id: "speciality-select"
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          Contract Types
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          Full Time
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Contractual
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={3} style={{ margin: "1rem", padding: "1rem" }}>
                    <FormControl
                      fullWidth
                      className={
                        classes.selectFormControl +
                        " " +
                        classes.selectUnderlineRoot
                      }
                    >
                      <InputLabel id="demo-simple-select-label">Seniority</InputLabel >
                      <Select
                        MenuProps={{
                          className: classes.selectMenu
                        }}
                        classes={{
                          select: classes.select
                        }}
                        value={specialitySelect}
                        onChange={handleSpeciality}
                        inputProps={{
                          name: "specialitySelect",
                          id: "speciality-select"
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem
                          }}
                        >
                          Seniority
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="1"
                        >
                          3 yrs - 5 yrs
                        </MenuItem> 
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          5 yrs - 9 yrs
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          9 yrs - 15 yrs
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          15 + yrs
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </div> 
{/* <div >
  <Card ><h3 className={classes.cardTitle} style={{ color: "black" }}> Position's </h3> </Card>
<Card>

<h3 className={classes.cardTitle} style={{ color: "black" }}>1. MachineLearningEngineer </h3>
<h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Employment Type: Full Time Location: Pune</h4>
<h4 className={classes.cardTitle} style={{ color: "black" }}>Your Role and Responsibilities</h4>
<h4 className={classes.cardTitle} style={{textAlign:"start"}}> • Cloud-based Solutions:Build, maintain, and operate cloud-based so-lutions using major cloud providers (AWS, Azure, GCP) and big data technologies (Hadoop,Spark,Kafka).

<br/>• CI/CD and DevOps : Utilize CI/CD (GitLab,Jenkins) and DevOpsparadigms for application development, deployment, and scaling.Imple-ment Infrastructure as code using tools like Terraform, Helm, Ansible.<br/>Work wit hcontainer-based technologies such as Docker and Kubernetes.
<br/>• Scalable Mode lDevelopment : Understand  business  objectives  and create scalable models to achieve them.Developmetrics to track progress.
<br/>• Machine Learning Model Deployment : Collaborate with Data Sci-entists to deploy Machine Learning models in production environments.
<br/>• Data-Intensive Applications : Build and maintain data-intensiveap-plications using big data technologies such as Apache Spark, Hadoop, anddatabases (SQLandNoSQL).Integrate batchorreal-time data using technologies like Kaf kaand Rabbit MQ.
<br/>• Experience [4-9] years</h4>
   
<h4 className={classes.cardTitle} style={{ color: "black" }}>Skills and TechStack</h4>
<h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Programming Proficiency : Proficient in Python and familiarity with Docker and Kafkaisaplus. 
<br/>• Machine Learning Frameworks : Expertise in machine learning frame-works such as sklearn, pandas, and Faust, as well as deep learning frame-works like Tensor Flow, PyTorch, or DNN.
<br/>• Technical Experience : Experienced in SQL, Kubernetes, Docker, Kafka, and Terra form.
<br/>• Specialized Knowledge : Familiarity with handling NLP, Computer Vi-sion, and sequence models using the Hugging face interface. 
<br/>Experience [4- 9] years.</h4>
</Card>
</div>
<div>
<Card>
  <h3 className={classes.cardTitle} style={{ color: "black" }}>2. Full Stack Developer </h3>
  <h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Employment Type: Full Time Location: Pune </h4>
  <h4 className={classes.cardTitle} style={{ color: "black" }}>Your Role and Responsibilities</h4>
  <h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Participate in software development lifecycle, specifically test design, execution and debugging required to achieve successful implementation of integrated solutions within the product portfolio.
  <br/>• Complete coding, testing, defect fixes, and production support, using agile methodologies.
  <br/>• Developing products dealing with scalability, availability, reliability.
  <br/>• Proven ability to deliver software that meets functional and non-functional requirements, quality metrics.
  <br/>• Ability to learn new technologies and processes and quickly apply them to the overall development effort..
  <br/>• Ability to work on Enterprise level application.
	<br/>• Required Qualifications and Experience.
  <br/>• Experience [8-10] Years  as a Full stack Developer.
  <br/>• Bachelor’s degree in Engineering or Computer Science with [6–8] years of experience in product development, deployment, configuration, and support of tools.
  <br/>• Knowledge of Core Java, J2EE, JSP, Servlet, REST API.
  <br/>• Node.js, React.js, Angular, Dojo Skills
  <br/>• Knowledge of IBM Engineering lifecycle Mgmt Product Suite is an added advantage
  <br/>• Familiarity with any one RDBMS database like ORACLE or DB2 is required.
  <br/>• Experience in writing Junit is required.
  <br/>• Experience on distributed systems development.
  <br/>• IDE Skills: Eclipse, MS Visual Code.
  <br/>• Ability to work on a large and complex code base.
  <br/>• Knowledge and experience in Dev-Ops, CI/CD/Release automation.
  <br/>• Working knowledge of Container Tech: Kubernetes, Docker, Red Hat OpenShift.
  <br/>• Development Platform: Windows & Linux
  <br/>• Experience working in an Agile development environment.Preferred Technical and Professional Expertise.
  <br/>• Experience working with high traffic web application
  <br/>• Experience developing custom directive and components
  <br/>• Experience on working with secure backend APIs
  <br/>• Experience on working with secure backend APIs
  <br/>• Knowledge and experience with code versioning tools
  <br/>• Understanding of DevOps, CI/CD tools, and concepts
  <br/>• Experience with C# and .NET 4.5 or later
  </h4>
</Card>
</div>
<div>
  <Card>
    <h3 className={classes.cardTitle} style={{ color: "black" }}>3. Data Scientist Role</h3>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Employment Type: Full Time Location: Pune</h4>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>Your Role and Responsibilities </h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}> • DataCollectionandPreprocessing:Gatherandpreprocessdatafromvarioussources.
    <br/>• Model Building  :Develop models tail or end to address business challenges.
    <br/>• Data Visualization : Communicate findings effectively using data visualization techniques.
    <br/>• Data Source Identification : Identify and automate collection processes for valuable data sources.
    <br/>• Structured and Unstructured Data : Process both structured and unstructured data through pre-processing.
    <br/>• Trend Analysis : Analyze extensive data to uncover meaningful trends and patterns.
    <br/>• Predictive Modeling : Create predictive models and machine-learning algorithms.
    <br/>• Ensemble Modeling : Integrate models using enasemble techniques for improved performance.
    <br/>• Solution Proposals : Formulate strategies and solutions for business challenges.
    <br/>• Cross-functional Collaboration  :Work closely with machine learning engineering and product development teams.
</h4>
	<h4 className={classes.cardTitle} style={{ color: "black" }}>Qualifications and Experience</h4>
	<h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Experience [4-9] Years.
    <br/>• Machine Learning and Deep Learning Libraries : Proficient in using libraries such as sklearn, scipy, pandas, TensorFlow, and PyTorch.
    <br/>• Big Data Manipulation : Expertise in visualizing and manipulating large data sets.
    <br/>• Programming Proficiency : Skilled in Python and SQL for data analysis and manipulation.
    <br/>• Statistical and Mathematical Foundation : Possess the necessary knowledge of statistics, algebra, etc., essential for data science.
  </h4>
  </Card>
</div>
<div>
  <Card>
    <h3 className={classes.cardTitle} style={{ color: "black" }}>4. SAP S/4 HANA OTC Consultant </h3>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Employment Type: Full Time Location: Pune </h4>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>Your Role and Responsibilities</h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>• In your role as a SAP OTC specialist, your primary focus will be assisting clients in shaping, conceptualizing, and implementing solutions within the S/4HANA framework. You will also assume a leadership role in your team, steering them through challenging projects. Employing a systematic and interactive approach, you will deeply engage with the clients' business processes to gain profound insights, allowing you to redesign and enhance these processes across the entire Order to Cash spectrum – encompassing everything from CRM integration to Finance integration.
Across various client engagements, you will hold accountability for your team's outputs. This encompasses defining, scrutinizing, and executing business processes, configuring SAP settings and potential integrations, conducting testing procedures, and shepherding these deliverables towards successful implementation.
Leveraging your profound proficiency in OTC processes, you'll adeptly lead your team in attaining project objectives and milestones. Your collaborative nature will shine as you willingly share your expertise, mentor junior colleagues, and provide constructive input.
Your adeptness in team management and your skillful interaction with diverse project stakeholders will enable you to optimize operational efficiency. Armed with your comprehensive SAP knowledge and adept project management skills, you'll serve as a consultant on the ramifications of a novel IT landscape, adeptly nurturing and sustaining client relationships.
Your seasoned project management acumen empowers you to oversee activities, resource allocation, and financial aspects within your domain. Moreover, you excel in risk management and adeptly address any challenges alongside your clients.
Beyond project-related responsibilities, your level of seniority will determine your involvement in  “WittyAnt”s business development and sales efforts. Your prowess will drive novel initiatives and innovative subjects to fruition.
 </h4>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>Qualifications and experience </h4>
	<h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Minimum of 3 years of hands-on SAP experience in Sales and Distribution • Comprehensive understanding of the end-to-end Order to Cash processes within SAP S/4, along with its interconnected components (CRM, Document management, Finance, Logistics, and Warehousing) • Proven track record in conceptualizing and/or executing SAP Order to Cash workflows (integrating CRM, Order to Billing, Pricing, and Customer Master Data) • Engagement in a minimum of 2-3 full life-cycle implementations • Possibility of involvement in OTC project management, contingent on seniority, including direct client engagement • Enthusiasm for collaborative teamwork • Willingness to undertake travel as required by project assignments • Driven, persevering, with a dedication to enhancement and a commitment to excellence • Exceptional verbal and written communication abilities .</h4>
  </Card>
</div>
<div>
  <Card>
    <h3 className={classes.cardTitle} style={{ color: "black" }}>5.SAP MM - Senior Consultant / Lead</h3>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>• Employment Type: Full Time Location: Pune</h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>Role Overview: We are seeking an accomplished SAP MM professional to join us as a Senior Consultant / Lead. Your expertise in SAP MM, particularly in Procure-to-Pay, will play a pivotal role in implementing and enhancing SAP solutions for our clients. This role is based in Pune and offers the opportunity for a full-time engagement. Employee may be expected to travel/ base out of alternative client projects during the project</h4>
    <h4 className={classes.cardTitle} style={{ color: "black",textAlign:"start" }}>Key Qualifications and Experience:</h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>•	A minimum of 8+ years of progressive and relevant experience in the field of information technology, with a comprehensive understanding of end-to-end processes.
   <br/> •	Background in Retail or AFS (Apparel, Footwear & Fashion) is a must.
   <br/> •	Hands-on involvement in at least one to two S/4 HANA implementation projects.
   <br/>•	Profound expertise in Procure-to-Pay (P2P) processes.
   <br/>•	In-depth experience in process configuration and setup, specifically in Procure-to-Pay (P2P), encompassing purchase requisitions, purchase orders, standard procurement workflows, purchase-to-order, third-party order procurement, and Inventory Management.
   <br/>•	Strong knowledge of SD-FI and SD-MM integration.
   <br/>•	Extensive familiarity with interfaces within the SAP ecosystem.
   <br/>•	Exceptional communication skills.
   <br/>•	Adept at structured problem-solving methodologies.
    </h4>
    <h4 className={classes.cardTitle} style={{ color: "black",textAlign:"start" }}>Responsibilities:</h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>•	Lead the implementation and provide ongoing support for SAP MM modules, with a focus on Procure-to-Pay, Consumption-Based Planning, Purchasing, External Services, Inventory Management, Invoice Verification, Information System, Foreign Trade, and Electronic Data Interchange.
<br/>•	Conduct thorough analysis of intricate business process requirements and devise suitable system solutions. Identify, interpret, validate, and document customer requirements.
<br/>•	Organize workshops to gather comprehensive business requirements.
<br/>•	Map client business processes, objectives, and requirements, and develop necessary product modifications to align with client needs.
<br/>•	Design, customize, configure, and test SAP MM modules.
<br/>•	Address gaps, challenges, and propose effective workarounds.
<br/>•	Serve as a liaison with clients to troubleshoot and resolve software issues. Investigate, analyze, and implement solutions.
<br/>•	Document functional designs, create test cases, and oversee testing outcomes.
<br/>•	Proactively identify opportunities for business process and system enhancements.
<br/>•	Deliver expert consulting services for both new implementations and ongoing support initiatives.</h4>
  </Card>
</div>
<div>
<Card>
<h4  className={classes.cardTitle} style={{ color: "black" }}>
" If you have a proven track record in SAP MM and are passionate about driving impactful solutions, we invite you to join our team and contribute to both new projects and ongoing support efforts. This role offers a dynamic environment where your expertise can shine while helping our clients achieve their goals. "
</h4></Card>
</div>
<div>
  <Card>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>" Beyond project-related responsibilities, your level of seniority will determine your involvement in  “WittyAnt”s business development and sales efforts. Your prowess will drive novel initiatives and innovative subjects to fruition. "</h4>
  </Card>
</div>
<div>
  <Card><h3 className={classes.cardTitle} style={{ color: "black" }}>Posting's</h3></Card>
  <Card>
    <h3 className={classes.cardTitle} style={{ color: "black" }}>Job Posting for SAP FICO Architect</h3>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>•	Job Description Title: SAP Finance Architect.
      <br/>•	Duration: Full Time.
      <br/>•	Location: Releaseemote.
    </h4>
    <h4 className={classes.cardTitle} style={{ color: "black" }} >Roles and Responsibilities </h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>•	Manage large SAP implementation/ rollout projects with a focus on Finance Lead pre-sales opportunities, solutioning and delivery approach, presentations to customers Perform an advisory role on different projects that include SAP S/4 Finance Facilitate discovery sessions, design workshops (Explore), assessments, planning sessions for projects.</h4>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>Qualifications</h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>•	Strong business knowledge in Accounting & Finance.
    <br/>•	Should have SAP experience of more than 8-9 years as a Consultant.
    <br/>•	[10-15] years' experience in SAP implementation/ rollout projects.
    <br/>•	Strong Finance Transformation background Solid functional background in S/4 HANA.
    <br/>•	Experience in advising customers in their SAP transformation, using SAP Best Practices, standard out-of-the-box S/4HANA functionalities. 
    <br/>•	Knowledge of CO-Cost center Accounting, Profit Center Accounting, Profitability Analysis.</h4>
  </Card>
</div>
 
<div>
  <Card>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>" Beyond project-related responsibilities, your level of seniority will determine your involvement in  “WittyAnt”s business development and sales efforts. Your prowess will drive novel initiatives and innovative subjects to fruition. "</h4>
  </Card>
</div>
<div>
  <Card>
    <h3 className={classes.cardTitle} style={{ color: "black" }}>Join Our Team as an Automation Architect!</h3>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>•	Are you an individual brimming with innovation, creativity, and an unyielding passion for Automation Engineering? Do you seek the opportunity to contribute your skills to a rapidly expanding venture? If so, we invite you to become an integral part of our core team.</h4>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>Position: Automation Architect</h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start"}}>• We are on the lookout for an Automation Architect who can enrich our team with their expertise.</h4>
    <h4 className={classes.cardTitle} style={{textAlign:"start", color:"black"}}>Your role will involve:</h4>
<h4 className={classes.cardTitle} style={{textAlign:"start"}}> 
<br/>•	Demonstrating a comprehensive understanding of Web and Mobile technologies, along with proficiency in API and Database testing.
<br/>•	Applying your knowledge of best practices and current trends in the automated testing industry.
<br/>•	Utilizing experience with a range of test automation and test management tools.
<br/>•	Harnessing your analytical and problem-solving prowess to excel in a dynamic, fast-paced environment.
<br/>•	Commanding familiarity with various test automation frameworks for both functional and load testing.
<br/>•	Employing Agile Software Development Lifecycle processes and methodologies.
<br/>•	Grasping the core principles of various test automation frameworks (data-driven, keyword-driven, hybrid, behavior-driven).
<br/>•	Exhibiting proficiency in containers and virtualization.
<br/>•	Demonstrating proficiency in mobile automation tools.
<br/>•	Displaying proficiency in automated build management tools.
<br/>•	Showcasing proven expertise in defining and implementing diverse test automation solutions, using tools like Selenium, Cucumber, Appium, SoapUI, Postman, Protractor, JMeter, and LoadRunner.
<br/>•	Possessing advanced proficiency in reading and writing languages like JavaScript, Java, and Python.
<br/>•	Applying hands-on test automation experience within an Agile Development environment.
<br/>•	Utilizing hands-on experience in specifying, establishing, and managing test environments and test data for both load and functional automation projects.
<br/>•	Leveraging over 8 years of experience as an Automation Engineer, utilizing test automation solutions for functional and load testing of web-based technologies and Relational Databases.
</h4>
  </Card>
</div>
<div>
  <Card>
    <h4 className={classes.cardTitle} style={{ color: "black" }}>" If you are ready to contribute your expertise to our team and play a pivotal role in shaping the future of our automation efforts, we invite you to join us. This is a remarkable opportunity to be part of our growth journey while making a substantial impact in the world of Automation Engineering. "</h4>
  </Card>
</div> */}


            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
