import React, { Component } from 'react';
import {Card,Col,Image, Button} from 'react-bootstrap';

class Profile extends Component {
  render() {
    // props로 받아온 랜더링 된 값을 프로필 컴포넌트 내역에 나타낸다
    const {img,info, major,github,open}=this.props

    return (
      <div>
        <Card border="dark" 
        style={{ width:'300px',
        height: 'auto',
        position: 'relative',
        textAlign: 'center',
        margin:'20px',
        borderWidth: '1.2px'
       }}>
          <Card.Header>내 프로필</Card.Header>
          <Card.Body>
            <Card.Text >
            <Col xs={0} md={0}>
              <Image width='200px' height='200px' src={img} roundedCircle 
              style={{
              backgroundPositon: 'center'}}/>
            </Col>
            <br/>
            <Button onClick={open} variant="outline-primary">회원 정보 수정</Button>{''}
            <br/><br/>
            <div>
            <Card.Header>본인 소개</Card.Header>
            <Card.Text style={{textAlign: 'left'}}><br/>{info}<br/><br/></Card.Text>
            </div>
            <div>
            <Card.Header>학부</Card.Header>
            <Card.Text ><br/>{major}<br/><br/></Card.Text>
            </div>
            <div>
            <Card.Header>깃헙 주소</Card.Header>
            <Card.Text ><br/>{github}<br/><br/></Card.Text>
            </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;