import React from 'react';
import Modal from './Modal.js';
import UserForm from './modal/UserForm.js';
import {Card, Image, Button} from 'react-bootstrap';

export class User extends React.Component {
  // modal 창 열고 닫기
    state = {
      modalOpen: false,
    }
    openModal = () => {
      this.setState({ modalOpen: true })
    }
    closeModal = () => {
      this.setState({ modalOpen: false })
    }
    state={
      user: this.props.user
    }
    handleUpdate = (newimg,newinfo, newmajor, newgithub) => {
      this.setState({
        img : this.state.img.replace(this.state.img, newimg)
      })
      this.setState({
        info: this.state.info.replace(this.state.info, newinfo) })
      this.setState({
        major: this.state.major.replace(this.state.major, newmajor) })
      this.setState({
        github: this.state.github.replace(this.state.github, newgithub)})
    }

    render() {
      return (
        <>
          <Card style={{
            width: "500px",
            display: "block",
            marginLeft: "50px",
            marginTop: "70px",
            marginRight: "50px",
            border: "none",
            textAlign: "center"
          }}>
            <Card.Header>프로필</Card.Header>
            <Card.Body>
              <Card.Text >
                <Image width='150px' height='150px' src={this.state.user.img == null ? './profile.jpg' : this.state.user.img} roundedCircle 
                style={{
                backgroundPositon: 'center'}}/>
              <br/>
              <Button onClick={this.openModal} variant="outline-primary">회원 정보 수정</Button>{''}
              <br/><br/>
              <div>
              <Card.Header>닉네임</Card.Header>
              <Card.Text><br/>{this.state.user.nick}<br/><br/></Card.Text>
              </div>
              <div>
              <Card.Header>본인 소개</Card.Header>
              <Card.Text><br/>{this.state.user.info}<br/><br/></Card.Text>
              </div>
              <div>
              <Card.Header>학부</Card.Header>
              <Card.Text ><br/>{this.state.user.major}<br/><br/></Card.Text>
              </div>
              <div>
              <Card.Header>깃헙 주소</Card.Header>
              <Card.Text ><br/>{this.state.user.github}<br/><br/></Card.Text>
              </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Modal open={ this.state.modalOpen }>
            <UserForm
              user={this.state.user}>
            </UserForm>
          </Modal>
        </>
      )
    }
}

export default User;