// import React, { Component, Fragment } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import { Container, Row } from "reactstrap";
// import Meters100 from "./speed-wall-components/Meters-100";
// import Meters250 from "./speed-wall-components/Meters-250";
// import Meters500 from "./speed-wall-components/Meters-500";
// import Meters1K from "./speed-wall-components/Meters-1k";
// import Meters2K from "./speed-wall-components/Meters-2K";
// import Meters5K from "./speed-wall-components/Meters-5k";
// import Meters10K from "./speed-wall-components/Meters-10k";
// import Miles13 from "./speed-wall-components/Miles-13";
// import Miles26 from "./speed-wall-components/Miles-26";
// // import Records from "/Records";

// class SpeedWall extends Component {
//   state = {};
//   render() {
//     return (
//       <Fragment>
//         {
//           <Container className="position-relative" style={{ width: "340px" }}>
//             <h1 className="text-center">Speed Wall</h1>
//             <Row>
//               <Tabs
//                 defaultActiveKey="100m"
//                 transition={false}
//                 id="noanim-tab-example"
//                 className="tabs"
//               >
//                 <Tab eventKey="100m" title="100m" id="hundred-meters">
//                   <Meters100 />
//                 </Tab>
//                 <Tab eventKey="250m" title="250m" id="two-fifty">
//                   <Meters250 />
//                 </Tab>
//                 <Tab eventKey="500m" title="500m" id="five-hundred">
//                   <Meters500 />
//                 </Tab>
//                 <Tab eventKey="1K" title="1K" id="one-thousand">
//                   <Meters1K />
//                 </Tab>
//                 <Tab eventKey="2K" title="2K" id="two-thousand">
//                   <Meters2K />
//                 </Tab>
//                 <Tab eventKey="5K" title="5K" id="fiveK">
//                   <Meters5K />
//                 </Tab>
//                 <Tab eventKey="10K" title="10K" id="tenK">
//                   <Meters10K />
//                 </Tab>
//                 <Tab eventKey="13-1miles" title="13.1 Miles" id="half-marathon">
//                   <Miles13 />{" "}
//                 </Tab>
//                 <Tab eventKey="26-2miles" title="26.2 Miles" id="full-marathon">
//                   <Miles26 />
//                 </Tab>
//               </Tabs>
//             </Row>
//           </Container>
//         }
//         {
//           <Container>
//             <Row>
//               <div id="records" />
//             </Row>
//           </Container>
//         }
//       </Fragment>
//     );
//   }
// }

// export default SpeedWall;
