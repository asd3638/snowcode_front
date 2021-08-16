import React from "react";
import Header from '../Components/Header';
import CardView from '../Components/CardView';
import { Row, Col, Card } from "react-bootstrap";
 
class MainPage extends React.Component {
  
  render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idFromUrl = params.get('id');
    return (
      <div>
        <Header id={idFromUrl}/>
        <Row 
          xs={1}
          md={5}
          className="g-6"
          style={{marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "50px"}}
          >
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col style={{marginBottom: "25px"}}>
              <CardView/>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
};
export default MainPage;