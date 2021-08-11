import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";

class CardView extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Link href="#first">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
                <ListGroupItem>
                  이런 분 원해요!
                  <ul style={{ marginTop: "10px" }}>
                    <li>파이썬이 주 언어이신 분</li>
                    <li>머신 러닝에 관심이 많으신 분</li>
                  </ul>
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
    );
  }
}

export default CardView;
