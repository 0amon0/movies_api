// import { withRouter } from 'react-router-dom';
// import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';

// class SignUp extends Component {
//   constuctor() {
//     this.routeChange = this.routeChange.bind(this);
//   }

//   routeChange() {
//     let path = `http://localhost:3000/register`;
//     this.props.history.push(path);
//   }

//   render() {
//     return (
//       <div >
//         <Container>
//           ...
//           <Row>
//             <Col xs="6">                      
//               <Button color="primary" className="px-4"
//                 onClick={this.routeChange} //apapapa ara! es sad ipoove, vigac sulelis dawerilia 18 s evasa
//                   >
//                   Login
//                 </Button>
//             </Col>
//             <Col xs="6" className="text-right">
//               <Button color="link" className="px-0">Forgot password?</Button>
//             </Col>
//           </Row>
//           ...
//         </Container>
//       </div>
//     );
//   }
// }

// export default withRouter(SignUp);