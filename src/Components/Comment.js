import { Card, Form, FloatingLabel, Button } from "react-bootstrap";
import "../App.css";
import React, { useState, useEffect } from "react";
import api from "../Api/api";

function Comment(props) {
  const userId = props.user_id;
  const studyId = props.study_id;

  const [comment, setComment] = useState([]);
  const [user, setUser] = useState({});
  const [inputChat, setInputChat] = useState("");

  useEffect(() => {
        const fetchComment = async () => {
            try {
                const response = await api.get(
                    `/comment/${studyId}`
                );
                setComment(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
            }
        };
        const fetchUser = async () => {
            try {
                const response = await api.get(
                    `/user/${userId}`
                );
                setUser(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
            }
        };
        fetchComment();
        fetchUser();
  }, []);

  const handleInputChat = (e) => {
    setInputChat(e.target.value);
  };

  //id, user_id, chat, gif
  const onSubmitHandler = (e) => {
    e.preventDefault();

    api
      .post("/comment/create", {
        comment: inputChat,
        commenter: userId,
        study: studyId,
        userNick: user.nick
      })
      .then((res) => {
        if (res.data === "success") {
            //렌더링 되는 부분 변경해야함ㅇ
          document.location.href = `/detail?id=${userId}&studyId=${studyId}`;
        }
      })
      .catch();
  };
  const checkCommenter = (commenter) => {
        let comment = <></>;
        if (commenter === userId) {
            comment = <li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  style={{ borderColor: "#fff", alignSelf: 'flex-end'}}
                >
                  <div 
                    style={{ marginRight: '0px', textAlign: "right"}}
                    >
                    <div class="fw-bold">{comment.userNick}</div>
                        {comment.comment}
                  </div>
                </li>
        } else {
            comment = <li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  style={{ borderColor: "#fff", alignSelf: 'flex-start'}}
                >
                  <div 
                    style={{ marginRight: '0px', textAlign: "right"}}
                    >
                    <div class="fw-bold">{comment.userNick}</div>
                        {comment.comment}
                  </div>
                </li>
        }
        console.log(comment);
        return comment;
  }
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
            <ol class="list-group list-group">
              {comment.map((comment, idx) => (
                comment.commenter == userId ? (<li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  style={{ borderColor: "#fff", alignSelf: 'flex-end'}}
                >
                  <div >
                    <div class="fw-bold" style={{textAlign: 'end'}}>{comment.userNick}</div>
                        {comment.comment}
                  </div>
                </li>) : (<li
                  class="list-group-item d-flex justify-content-between align-items-start"
                  style={{ borderColor: "#fff", alignSelf: 'flex-start'}}
                >
                  <div>
                    <div class="fw-bold">{comment.userNick}</div>
                        {comment.comment}
                  </div>
                </li>)
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
              value={inputChat}
              onChange={handleInputChat}
            />
          </FloatingLabel>
          <Button
            style={{ float: "right", marginTop: "16px" }}
            variant="outline-primary"
            size="sm"
            onClick={onSubmitHandler}
          >
            올리기
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Comment;