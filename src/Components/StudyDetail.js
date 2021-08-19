import React, { useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Modal from "./Modal.js";
import StudyEdit from "./modal/StudyEdit.js";
import api from "../Api/api";
import "../App.css";

const StudyDetail = React.memo((props) => {
  const studyId = props.studyId;
  const [study, setStudy] = useState({});
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [modal, setModal] = useState({});
  let editBtn = null;

  const formatDate = (date) => {
    let formatted_date =
      date.getFullYear() +
      "년" +
      (date.getMonth() + 1) +
      "월" +
      date.getDate() +
      "일";
    return formatted_date;
  };

  useEffect(() => {
    const fetchStudy = async () => {
      try {
        const response = await api.get(`/study/${studyId}`);
        setStudy(await response.data); // 데이터는 response.data 안에 들어있습니다.
        setStartDate(
          formatDate(new Date(await response.data.startLine.toString()))
        );
        setEndDate(
          formatDate(new Date(await response.data.deadLine.toString()))
        );
      } catch (e) {}
    };
    fetchStudy();
  }, []);

  const openModal = () => {
    setModal({ modalOpen: true });
  };
  const closeModal = () => {
    setModal({ modalOpen: false });
  };

  let cardViewImg;
  if (study.category === "스터디") {
    cardViewImg = (
      <Card.Img
        variant="top"
        alt=""
        src={require("../Assets/스터디.png").default}
      />
    );
  } else if (study.category === "공모전") {
    cardViewImg = (
      <Card.Img
        variant="top"
        alt=""
        src={require("../Assets/공모전.png").default}
      />
    );
  } else {
    cardViewImg = (
      <Card.Img
        variant="top"
        alt=""
        src={require("../Assets/졸업작품.png").default}
      />
    );
  }

  if (props.userId == study.writter) {
    editBtn = (
      <Button
        style={{ float: "right" }}
        onClick={openModal}
        variant="primary"
        size="sm"
      >
        스터디 정보 수정
      </Button>
    );
  }

  return (
    <Card
      style={{
        width: "750px",
        display: "block",
        marginLeft: "50px",
        marginTop: "50px",
        border: "none",
      }}
    >
      <div style={{ float: "left", width: "250px" }}>{cardViewImg}</div>
      <div style={{ float: "left", width: "60%", marginLeft: "15px" }}>
        <Card.Body>
          <Card.Title>{study.title}</Card.Title>
          <Card.Text>{study.content}</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>분류: {study.category}</ListGroupItem>
            <ListGroupItem>기간: {startDate + " ~ " + endDate}</ListGroupItem>
            <ListGroupItem>총 인원: {study.people}</ListGroupItem>
            <ListGroupItem>
              이런 분 원해요!
              <ul style={{ marginTop: "10px" }}>
                <li>{study.wanted}</li>
              </ul>
            </ListGroupItem>
          </ListGroup>
          {editBtn}
        </Card.Body>
      </div>
      <Modal open={modal.modalOpen}>
        <StudyEdit study={study} close={closeModal}></StudyEdit>
      </Modal>
    </Card>
  );
});

export default StudyDetail;
