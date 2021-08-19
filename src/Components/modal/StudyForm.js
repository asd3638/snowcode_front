import React, { useState } from "react";
import api from "../../Api/api.js";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// category, title, people, startLine, deadLine, content, wanted
function StudyForm(props) {
  const a = props.close;
  const [inputCategory, setInputCategory] = useState("스터디");
  const [inputTitle, setInputTitle] = useState("");
  const [inputPeople, setInputPeople] = useState(1);
  const [inputStartLine, setInputStartLine] = useState(new Date());
  const [inputDeadLine, setInputDeadLine] = useState(new Date());
  const [inputContent, setInputContent] = useState("");
  const [inputWanted, setInputWanted] = useState("");

  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const onCategoryHandler = (e) => {
    setInputCategory(e.target.value);
  };

  const onPeopleHandler = (e) => {
    setInputPeople(e.target.value);
  };

  const onStartLineHandler = (e) => {
    setInputStartLine(e);
  };

  const onDeadLineHandler = (e) => {
    setInputDeadLine(e);
  };

  const handleContent = (e) => {
    setInputContent(e.target.value);
  };

  const handleWanted = (e) => {
    setInputWanted(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    api
      .post("/study/create", {
        category: inputCategory,
        title: inputTitle,
        people: inputPeople,
        startLine: inputStartLine,
        deadLine: inputDeadLine,
        content: inputContent,
        wanted: inputWanted,
        writter: props.userId,
      })
      .then((res) => {
        if (res.data === "success") {
          alert("스터디가 생성되었습니다.");
          document.location.href = `/main?id=${props.userId}`;
        }
      })
      .catch();
  };

  const handleCancel = () => {
    alert("스터디 생성이 취소되었습니다.");
    a();
  };

  return (
    <div>
      <h5 style={{ textAlign: "center" }}>스터디 생성</h5>
      <br />
      <Form style={{ width: "content" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>카테고리</Form.Label>
          <Form.Select
            onChange={onCategoryHandler}
            aria-label="Floating label select example"
          >
            <option name="category" value="스터디">
              스터디
            </option>
            <option name="category" value="공모전">
              공모전
            </option>
            <option name="category" value="졸업작품">
              졸업작품
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>스터디명</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="내용을 입력해주세요"
            value={inputTitle}
            onChange={handleTitle}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>모집 인원</Form.Label>
          <Form.Select
            onChange={onPeopleHandler}
            aria-label="Floating label select example"
          >
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5">5명</option>
            <option value="6">6명</option>
            <option value="7">7명</option>
            <option value="8">8명</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div style={{ display: "flex" }}>
            <div style={{ float: "left" }}>
              <Form.Label>시작 날짜</Form.Label>
              <DatePicker
                selected={inputStartLine}
                onChange={(date) => onStartLineHandler(date)}
              />
            </div>
            <div style={{ float: "left" }}>
              <Form.Label>종료 날짜</Form.Label>
              <DatePicker
                selected={inputDeadLine}
                onChange={(date) => onDeadLineHandler(date)}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>설명</Form.Label>
          <Form.Control
            name="content"
            as="textarea"
            placeholder="내용을 입력해주세요"
            style={{ height: "100px" }}
            value={inputContent}
            onChange={handleContent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이런분 원해요</Form.Label>
          <Form.Control
            name="wanted"
            as="textarea"
            placeholder="내용을 입력해주세요"
            style={{ height: "100px" }}
            value={inputWanted}
            onChange={handleWanted}
          />
        </Form.Group>

        <Button
          variant="outline-primary"
          type="submit"
          onClick={onSubmitHandler}
        >
          만들기
        </Button>
        <Button variant="outline-primary" type="submit" onClick={handleCancel}>
          취소
        </Button>
      </Form>
    </div>
  );
}

export default StudyForm;
