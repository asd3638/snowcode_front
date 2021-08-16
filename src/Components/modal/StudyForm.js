import React, { Component } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import Calendar from "../Calendar";

class StudyForm extends Component {
  state = {
    txt: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onChangeCategory() {
    console.log(this.state.value);
    this.setState({
      category: this.state.value,
    });
  }

  onChangeNumber() {
    console.log(this.state.value);
    this.setState({
      number: this.state.value,
    });
  }

  onSubmit = () => {
    alert("글이 성공적으로 생성되었습니다.");
  };

  handleEdit = () => {
    const close=this.props.close
    if (true) {close()}
    const onUpdate = this.props.onUpdate;
    const newimg = this.state.img;
    const newinfo = this.state.info;
    const newmajor = this.state.major;
    const newgithub = this.state.github;
    onUpdate(newimg,newinfo, newmajor, newgithub);
  }

  render() {
    const close=this.props.close;
    
    return (
      <Form style={{ width: "300px" }}>
        <FloatingLabel controlId="floatingSelect" label="Category">
          <Form.Select
            onChange={this.onChangeCategory.bind(this)}
            aria-label="Floating label select example"
          >
            <option>카테고리</option>
            <option name="category" value="language">
              프로그래밍 언어
            </option>
            <option name="category" value="project">
              프로젝트
            </option>
            <option name="category" value="algorithm">
              알고리즘
            </option>
          </Form.Select>
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>제목</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="내용을 입력해주세요"
            value={this.state.title}
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>모집 인원</Form.Label>
          <Form.Select
            onChange={this.onChangeNumber.bind(this)}
            aria-label="Floating label select example"
          >
            <option>모집인원</option>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </Form.Select>
        </Form.Group>

        <Calendar />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>설명</Form.Label>
          <Form.Control
            name="explain"
            as="textarea"
            placeholder="내용을 입력해주세요"
            style={{ height: "100px" }}
            value={this.state.explain}
            onChange={this.onChange}
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit" onClick = {this.handleEdit} >
        수정
        </Button>
        &nbsp; &nbsp; 
        <Button variant="outline-primary" type="submit" onClick={close}>
          취소
        </Button>
      </Form>
    );
  }
}

export default StudyForm;