import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Comcast",
      description: "Development Engineer 2",
      imgUrl: projImg1,
    },
    {
      title: "Tata Consultancy Services",
      description: "Application Developer- Java Microservices",
      imgUrl: projImg2,
    },
  ];

  return (
    // <section className="project" id="projects">
    //   <Container>
    //     <Row>
    //       <Col size={12}>
    //         <TrackVisibility>
    //           {({ isVisible }) =>
    //           <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
    //             <h2>Projects</h2>
    //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    //             <Tab.Container id="projects-tabs" defaultActiveKey="first">
    //               <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
    //                 <Nav.Item>
    //                   <Nav.Link eventKey="first">Tab 1</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item>
    //                   <Nav.Link eventKey="second">Tab 2</Nav.Link>
    //                 </Nav.Item>
    //                 <Nav.Item>
    //                   <Nav.Link eventKey="third">Tab 3</Nav.Link>
    //                 </Nav.Item>
    //               </Nav>
    //               <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
    //                 <Tab.Pane eventKey="first">
    //                   <Row>
    //                     {
    //                       projects.map((project, index) => {
    //                         return (
    //                           <ProjectCard
    //                             key={index}
    //                             {...project}
    //                             />
    //                         )
    //                       })
    //                     }
    //                   </Row>
    //                 </Tab.Pane>
    //                 <Tab.Pane eventKey="section">
    //                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
    //                 </Tab.Pane>
    //                 <Tab.Pane eventKey="third">
    //                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
    //                 </Tab.Pane>
    //               </Tab.Content>
    //             </Tab.Container>
    //           </div>}
    //         </TrackVisibility>
    //       </Col>
    //     </Row>
    //   </Container>
    //   <img className="background-image-right" src={colorSharp2}></img>
    // </section>
    <section className="project" id="projects">
  <Container>
    <Row>
      <Col size={12}>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>Projects</h2>
            <p>Here are some highlights of my contributions in previous roles at Comcast India Engineering Center (CIEC) and Tata Consultancy Services.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="comcast">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="comcast">Comcast</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tcs">TCS</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <Tab.Pane eventKey="comcast">
                  <Row>
                    <Col md={3}>
                      <img src={projImg1} alt="Comcast Logo" className="img-fluid"/>
                    </Col>
                    <Col md={9}>
                      <h3>Development Engineer 2</h3>
                      <h4>Comcast India Engineering Center (CIEC)</h4>
                      <p>Comcast is an in-house engineering, development, and innovation center.</p>
                      <ul>
                        <li>Developed RESTful APIs using Spring Boot and Spring JPA.</li>
                        <li>Implemented CI/CD pipeline using GitHub and Concourse for automated build, test, and deployment processes, streamlining development workflows and ensuring efficient project delivery.</li>
                        <li>Gained foundational knowledge of Angular Material to address defects and implement minor enhancements.</li>
                        <li>Developed high-traffic backend services with a focus on optimal performance.</li>
                        <li>Involved in Developing Applications with Full Software Development Life Cycle (SDLC) from Design to Deployment using agile and waterfall methodologies with Spring framework.</li>
                      </ul>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="tcs">
                  <Row>
                    <Col md={3}>
                      <img src={projImg2} alt="TCS Logo" className="img-fluid"/>
                    </Col>
                    <Col md={9}>
                      <h3>Application Developer- Java Microservices</h3>
                      <h4>Tata Consultancy Services</h4>
                      <p>Euroclear is a Belgium-based financial services company that specializes in settlement.</p>
                      <ul>
                        <li>Worked on Development of Restful APIs using Spring Boot and Spring JPA.</li>
                        <li>Implemented securities trading and corporate action processes, ensuring compliance with SWIFT ISO 15022 & 20022 standards.</li>
                        <li>Developed code for applications such as Cash management, Off Market trading, and corporate action functionality to integrate with JMS Interface.</li>
                        <li>Developed a microservice based on business requirements in the product and implemented the flow between Oracle DB2 and the client.</li>
                        <li>Extensive experience in developing large-scale enterprise applications using Java.</li>
                      </ul>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>}
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
  <img className="background-image-right" src={colorSharp2} alt="Background"/>
</section>

  )
}
