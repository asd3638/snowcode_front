import React, {Component} from 'react';
import { Form, Row, Col, Button} from 'react-bootstrap';
import api from '../../Api/api'
class UserForm extends Component {
  
  // props로 App.js의 state 값을 받아온다
  state = {
    user: this.props.user
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
    const patchUser = async () => {
            try {
                await api.patch(
                `/user/${this.user.id}`, this.user
                );
            } catch (e) {
            }
        };
        patchUser();
  }

  render() {
    const close=this.props.close;

    return (
      <div>
          <h5 style={{textAlign: "center"}}>회원정보 수정</h5><br/>
            <Form name="폼 이름" method="post" action="애플리케이션 주소">
                <Form.Group controlId="formNick" className="mb-3">
                    <Form.Label>닉네임</Form.Label>
                    <Form.Control 
                        name="nick"
                        value={this.state.user.nick}
                        onChange = {this.handleChange} 
                        type="text" 
                        placeholder='닉네임' />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>프로필 사진</Form.Label>
                    <Form.Control 
                        name="img" 
                        type="file" 
                        accept='image/jpg,impge/png,image/jpeg,image/gif'
                        onChange={this.handleFileOnChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label column lg={4}>
                    본인 소개
                    </Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3} 
                        name="info" 
                        value={this.state.user.info}
                        onChange = {this.handleChange}  
                        placeholder='본인소개'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label column lg={4}>
                    학부
                    </Form.Label>
                    <Form.Control 
                    name="major"
                    value={this.state.user.major}
                    onChange = {this.handleChange} 
                    type="text" 
                    placeholder='학부' />
                </Form.Group>
                <Form.Group>
                    <Form.Label column lg={4}>
                    깃헙 주소
                    </Form.Label>
                    <Form.Control  
                    name="github" 
                    value={this.state.user.github}
                    onChange = {this.handleChange}  
                    type="text" 
                    placeholder='깃허브 주소' />
                </Form.Group>
            </Form>
            <Button variant="outline-primary" type="submit" onClick = {this.handleEdit} >
                수정
            </Button>
            <Button variant="outline-primary" type="submit" onClick={close}>
                취소
            </Button>
      </div>
    );
  }
}

export default UserForm;