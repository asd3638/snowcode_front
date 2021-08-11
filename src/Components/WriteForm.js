//npm install react-bootstrap-date-picker
//npm i react-hook-form
//npm install react-bootstrap-validation --save
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { getYear, getMonth } from "date-fns";
import ko from "date-fns/locale/ko";
import { Form, Button, FloatingLabel } from "react-bootstrap";

registerLocale("ko", ko);
const _ = require("lodash");

function WriteForm() {
  const [startDate, setStartDate] = useState(new Date());
  const years = _.range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <Form>
      <FloatingLabel controlId="floatingSelect" label="Category">
        <Form.Select aria-label="Floating label select example">
          <option>카테고리</option>
          <option value="1">프로그래밍 언어</option>
          <option value="2">프로젝트</option>
          <option value="3">알고리즘</option>
        </Form.Select>
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>제목</Form.Label>
        <Form.Control type="email" placeholder="내용을 입력해주세요" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>모집 인원</Form.Label>
        <Form.Select aria-label="Floating label select example">
          <option>모집인원</option>
          <option value="1">프로그래밍 언어</option>
          <option value="2">프로젝트</option>
          <option value="3">알고리즘</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>모집 기한</Form.Label>
        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"<"}
              </button>
              <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {">"}
              </button>
            </div>
          )}
          selected={startDate}
          dateFormat={"yyyy-MM-dd"}
          locale={ko}
          onChange={(date) => setStartDate(date)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>설명</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="내용을 입력해주세요"
          style={{ height: "100px" }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        확인
      </Button>
    </Form>
  );
}

export default WriteForm;
