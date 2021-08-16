import React, {Component} from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';

class ModalForms extends Component {
  
  // props로 App.js의 state 값을 받아온다
  state = {
    img: this.props.img,
    info : this.props.info,
    major: this.props.major,
    github: this.props.github
  }

  // 본인소개, 학부, 깃헙 주소 입력란에 변화를 줄 때 실행되는 함수
  // props로 받아온 App.js의 state(info, major, github) 값을 변경해준다
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // 이미지 파일 업로드란에 변화를 줄 때 실행되는 함수
  // 파일을 읽어들여 props로 받아온 App.js의 state 값(img)을 변경해준다
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file : file,
      })
    this.setState({
      img: reader.result
    })
    }
    reader.readAsDataURL(file);
  }

  // 수정 버튼을 누르면 실행되는 함수
  // 변경된 state값을 props로 받아온 
  // handleUpdate(onUpdate) 함수에 넣어준고
  // modal 창이 닫힌다
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
      <div>
        <Form name="폼 이름" method="post" action="애플리케이션 주소">
          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>프로필 사진</Form.Label>
              <Form.Control 
              name="img" 
              type="file" 
              accept='image/jpg,impge/png,image/jpeg,image/gif'
              onChange={this.handleFileOnChange} />
            </Form.Group>
            <Form.Label column lg={4}>
              본인 소개
            </Form.Label>
            <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} name="info" value={this.state.info}
               onChange = {this.handleChange}  placeholder='본인소개'/>
            </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={4}>
              학부
            </Form.Label>
            <Col>
              <Form.Control 
               name="major"
               value={this.state.major}
               onChange = {this.handleChange} 
               type="text" 
               placeholder='학부' />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={4}>
              깃헙 주소
            </Form.Label>
            <Col>
              <Form.Control  
              name="github" 
              value={this.state.github}
              onChange = {this.handleChange}  
              type="text" 
              placeholder='깃허브 주소' />
            </Col>
          </Row>
        </Form>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <Button variant="outline-primary" type="submit" onClick = {this.handleEdit} >
        수정
        </Button>
        &nbsp; &nbsp; 
        <Button variant="outline-primary" type="submit" onClick={close}>
          취소
        </Button>
      </div>
    );
  }
}

export default ModalForms;