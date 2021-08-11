//npm install react-bootstrap-date-picker
//npm i react-hook-form
//npm install react-bootstrap-validation --save
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import DatePicker from "react-bootstrap-date-picker";

function WriteForm() {
  let LIFE_VALUE = ""; // 값이 계속 바뀌기 때문에 let으로 선언.
  const { register, handleSubmit } = useForm(); //ref의 선택자인 register
  const onSubmit = (data) => {
    LIFE_VALUE = data.lifeArr;
    console.log(LIFE_VALUE);
  };

  const [startDate, setStartDate] = useState(new Date());

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

      <form className="select-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="select-container">
          <ul className="select-area">
            <li className="option-container">
              <h2 className="option-title">모집 인원</h2>
              <select name="lifeArr" ref={register} className="js-number">
                <option value="none">선택하세요</option>
                <option value="001">1명</option>
                <option value="002">2명</option>
                <option value="003">3명</option>
                <option value="004">4명</option>
                <option value="005">5명</option>
                <option value="006">6명</option>
              </select>
            </li>
          </ul>
        </div>
      </form>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>모집 기한</Form.Label>
        <DatePicker
          selected={startDate}
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
