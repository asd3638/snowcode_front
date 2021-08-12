import React, { Component } from "react";
import { Button} from "react-bootstrap";

class WriteForm extends Component {
  onSubmit = () => {
    alert("글이 성공적으로 생성되었습니다.");
  };
    <Button onClick={this.onSubmit} variant="primary" type="submit">
  확인
</Button>;
};

export default WriteForm;