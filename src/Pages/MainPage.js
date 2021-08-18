import React from "react";
import Header from "../Components/Header";
import CardView from "../Components/CardView";
import { Row, Col, Card, Carousel } from "react-bootstrap";

class MainPage extends React.Component {
  render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idFromUrl = params.get("id");
    return (
      <div style={{ width: "100%", height: "50%" }}>
        <Header id={idFromUrl} />
        <Carousel
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "20",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/study_computer.jpg").default}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>함께 성장할 동료를 찾아요</h3>
              <p>#우리함께 #성장해요 #지금 #바로 #프로젝트에 #참여하세요</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/study_together.jpg").default}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>혼자 공부하기 힘들시죠? 같이 해요</h3>
              <p>#같이하면 #목표를 #달성할 #확률이 #커진대요</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/study_alone.jpg").default}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>모. 각. 코</h3>
              <p>#모여서 #각자 #코딩 #시작해보세요</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row
          xs={1}
          md={5}
          className="g-6"
          style={{
            marginLeft: "50px",
            marginTop: "50px",
            marginRight: "50px",
            marginBottom: "50px",
          }}
        >
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col
              style={{
                marginBottom: "25px",
                display: "flex",
                width: "270px",
                flexWrap: "wrap",
              }}
            >
              <CardView />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default MainPage;
