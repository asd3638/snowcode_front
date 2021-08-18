import React, { useState } from "react";
import api from "../../Api/api.js";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// category, title, people, startLine, deadLine, content, wanted
function StudyForm(props) {
  const a = props.close;

  const [inputCategory, setInputCategory] = useState(props.study.category);
  const [inputTitle, setInputTitle] = useState(props.study.title);
  const [inputPeople, setInputPeople] = useState(props.study.people);
  const [inputStartLine, setInputStartLine] = useState(props.study.startLine);
  const [inputDeadLine, setInputDeadLine] = useState(props.study.deadLine);
  const [inputContent, setInputContent] = useState(props.study.content);
  const [inputWanted, setInputWanted] = useState(props.study.wanted);

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
    setInputStartLine(e.value);
  };

  const onDeadLineHandler = (e) => {
    setInputDeadLine(e.value);
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
      .patch(`/study/${props.study.id}`, {
        category: inputCategory,
        title: inputTitle,
        people: inputPeople,
        startLine: inputStartLine,
        deadLine: inputDeadLine,
        content: inputContent,
        wanted: inputWanted,
        writter: props.userId
      })
      .then((res) => {
        if (res.data === "success") {
          alert("스터디가 수정되었습니다.");
          document.location.href = `/main?id=${props.userId}`
        }
      })
      .catch();
  };

  const handleCancel = () => {
    alert("스터디 수정이 취소되었습니다.");
    a();
  };

  return (
    <div>
      <h5 style={{ textAlign: "center" }}>스터디 생성</h5>
      <br />
    </div>
  );
}

export default StudyForm;