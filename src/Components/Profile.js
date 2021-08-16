import React from 'react';
import {Card,Col,Image, Button} from 'react-bootstrap';

class Profile extends React.Component {
  state={
    img: this.props.img == null ? './profile.jpg' : this.props.img,
    info: this.props.info,
    major: this.props.major,
    github: this.props.github,
    nick: this.props.nick,
    open: this.props.open
  }

  handleOut = (e) => {
  }
  render() {
    console.log(this.state.nick)
    // props로 받아온 랜더링 된 값을 프로필 컴포넌트 내역에 나타낸다
    return (
      <div>
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
            <Col xs={0} md={0}>
              <Image width='150px' height='150px' src={this.state.img} roundedCircle 
              style={{
              backgroundPositon: 'center'}}/>
            </Col>
            <br/>
            <Button onClick={this.state.open} variant="outline-primary">회원 정보 수정</Button>{''}
            <br/><br/>
            <div>
            <Card.Header>닉네임</Card.Header>
            <Card.Text><br/>{this.state.nick}<br/><br/></Card.Text>
            </div>
            <div>
            <Card.Header>본인 소개</Card.Header>
            <Card.Text><br/>{this.state.info}<br/><br/></Card.Text>
            </div>
            <div>
            <Card.Header>학부</Card.Header>
            <Card.Text ><br/>{this.state.major}<br/><br/></Card.Text>
            </div>
            <div>
            <Card.Header>깃헙 주소</Card.Header>
            <Card.Text ><br/>{this.state.github}<br/><br/></Card.Text>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;