import { Card, Button } from "react-bootstrap";
import React from "react";

class CardView extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>파이썬 공부</Card.Title>
          <Card.Text>모집 인원 : 5, 모집 기한 : 2021/07/04</Card.Text>
          <Button variant="primary">참여하기</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default CardView;
