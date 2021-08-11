import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";

function CardView() {
    return (
      <Card style={{ width: "18rem" }}>
        <div style={{float: 'left'}}>
          <Card.Img
          variant="top" 
          alt=""
          src={require("../Assets/python.jpg").default}
          width="100"
          height="150" />
        </div>
        <Card.Body>
          <Card.Title>파이썬 공부</Card.Title>
          <Card.Text>
            <ListGroup className="list-group-flush">
              <ListGroupItem>분류: 스터디</ListGroupItem>
              <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
              <ListGroupItem>총 인원: 5</ListGroupItem>
            </ListGroup>
          </Card.Text>
          <Button variant="primary">참여하기</Button>
        </Card.Body>
      </Card>
    );
}

export default CardView;
