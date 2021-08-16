import React, { Component} from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class StudyForm extends Component {
  state = {
    txt: "",
    startDate: new Date(),
    endDate: new Date()
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
  setStartDate = (date) => {
    this.setState({
      startDate: date,
    });
  }

  setEndDate = (date) => {
    this.setState({
      endDate: date,
    });
  }

  render() {
    const close=this.props.close;
    
    return (
      <div>
          <h5 style={{textAlign: "center"}}>스터디 생성</h5><br/>
          <Form style={{ width: "content" }}>
              <Form.Group 
                className="mb-3" 
                controlId="formBasicEmail"
                >
                    <Form.Label>카테고리</Form.Label>
                    <Form.Select
                        onChange={this.onChangeCategory.bind(this)}
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

            <Form.Group 
                className="mb-3" 
                controlId="formBasicEmail"
                >
                <Form.Label>스터디명</Form.Label>
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
                <option value="1">1명</option>
                <option value="2">2명</option>
                <option value="3">3명</option>
                <option value="4">4명</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <div style={{display: 'flex'}}>
                    <div style={{float: 'left'}}>
                        <Form.Label>시작 날짜</Form.Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={(date) => this.setStartDate(date)}
                        />
                    </div>
                    <div style={{float: 'left'}}>
                        <Form.Label>종료 날짜</Form.Label>
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={(date) => this.setEndDate(date)}
                        />
                    </div>
                </div>
            </Form.Group>

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
                만들기
            </Button>
            <Button variant="outline-primary" type="submit" onClick={close}>
                취소
            </Button>
        </Form>
      </div>
    );
  }
}

export default StudyForm;