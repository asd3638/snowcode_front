import React from "react";
import { Card, Form, FloatingLabel, Button } from "react-bootstrap";
import "../App.css";

const Comment = React.memo(() => {
  return (
    <div>
      <Card
        style={{
          width: "150%",
          height: "650px",
          marginTop: "50px",
          marginLeft: "100px",
        }}
      >
        <Card.Body>
          <Card.Title>댓글 창</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            댓글로 스터디에 관한 정보를 추가적으로 확인하세요
          </Card.Subtitle>
          <Card.Body className="scroll">
            <ol class="list-group list-group-numbered">
              {[
                "sm",
                "md",
                "lg",
                "xl",
                "xxl",
                "sm",
                "md",
                "lg",
                "xl",
                "xxl",
              ].map((breakpoint, idx) => (
                <li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  style={{
                    borderColor: "#fff",
                    border: "solid",
                    borderWidth: "1px",
                    margin: "1px 0px",
                  }}
                >
                  <div
                    style={{
                      textAlign: "right",
                      margin: "0px 8px 0px 100px",
                    }}
                    class="ms-2 me-auto"
                  >
                    <div class="fw-bold">댓글 작성자 1</div>
                    파이썬 초보 수준으로 알고 있는데 괜찮을까요?
                  </div>
                </li>
              ))}
            </ol>
          </Card.Body>
        </Card.Body>
      </Card>
      <Card style={{ width: "150%", marginTop: "5px", marginLeft: "100px" }}>
        <Card.Body>
          <Card.Title>새 댓글 작성하기</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            로그인 후 댓글을 작성할 수 있습니다.
          </Card.Subtitle>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button
            style={{ float: "right", marginTop: "16px" }}
            variant="outline-primary"
            size="sm"
          >
            올리기
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
});

export default Comment;
