import React, {useState, useEffect} from 'react';
import Modal from './Modal.js';
import UserForm from './modal/UserForm.js';
import {Card, Button} from 'react-bootstrap';

const User = (props) => {
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(
    () => {
      setUser(props.user);
    },[props.user]
  );

  const openModal= () => {
    setModal(modal => !modal);
  }
  const closeModal= () => {
    setModal(modal => !modal);
  }

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
        <Card.Body>
          <Card.Text >
            <Card.Img
            style={{width: "130px"}}
            variant="top" 
            alt=""
            src={require("../Assets/눈송이.png").default}
            />
          <br/>
          <br/><br/>
          <div>
          <Card.Header>닉네임</Card.Header>
          <Card.Text><br/>{user.nick}<br/><br/></Card.Text>
          </div>
          <div>
          <Card.Header>본인 소개</Card.Header>
          <Card.Text><br/>{user.info}<br/><br/></Card.Text>
          </div>
          <div>
          <Card.Header>학부</Card.Header>
          <Card.Text ><br/>{user.major}<br/><br/></Card.Text>
          </div>
          <div>
          <Card.Header>깃헙 주소</Card.Header>
          <Card.Text ><br/>{user.github}<br/><br/></Card.Text>
          </div>
          </Card.Text>
        </Card.Body>
        <Button onClick={openModal} variant="outline-primary">회원 정보 수정</Button>{''}
      </Card>
      <Modal open={modal}>
        <UserForm
          user={user}
          close={closeModal}
          >
        </UserForm>
      </Modal>
    </div>
  )
}
export default User;