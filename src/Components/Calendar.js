//npm install —save-dev webpack
//npm i css-loader
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>모집 기한</Form.Label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </Form.Group>
  );
};

export default Calendar;