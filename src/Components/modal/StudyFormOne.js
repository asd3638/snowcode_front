import React, { Component, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function StudyFormOne() {
  const [category, setCategory] = useState(null);
  const [people, setPeople] = useState(null);

  const onCategoryHandler = (e) => {
    setCategory(e.value);
    fetchCategory();
  };

  const onPeopleHandler = (e) => {
    setPeople(e.value);
    fetchPeople();
  };

  const fetchCategory = async () => {
    const response = await axios("", {
      category: category,
    });
    console.log(response.data);
  };

  const fetchPeople = async () => {
    const response = await axios("", {
      people: people,
    });
    console.log(response.data);
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
            <option name="category" value="language">
              스터디
            </option>
            <option name="category" value="project">
              공모전
            </option>
            <option name="category" value="algorithm">
              졸업작품
            </option>
          </Form.Select>
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
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div style={{ display: "flex" }}>
            <div style={{ float: "left" }}>
              <Form.Label>시작 날짜</Form.Label>
              <DatePicker
                selected={this.state.startDate}
                onChange={(date) => this.setStartDate(date)}
              />
            </div>
            <div style={{ float: "left" }}>
              <Form.Label>종료 날짜</Form.Label>
              <DatePicker
                selected={this.state.endDate}
                onChange={(date) => this.setEndDate(date)}
              />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default StudyFormOne;
