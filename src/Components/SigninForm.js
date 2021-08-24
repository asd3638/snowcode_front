import React, {useState} from 'react';
import {Button, Card, Form } from 'react-bootstrap';
import api from '../Api/api'
import "../App.css"
import swal from 'sweetalert'

function SigninForm() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputNick, setNick] = useState('');
    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleInputNick = (e) => {
        setNick(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        api.post('auth/join', {
            email: inputEmail,
            password: inputPw,
            nick: inputNick
        })
        .then(res => {
            if(res.data === "aee"){
                swal('입력하신 정보로 회원이 존재합니다.')
                    .then((value) => {
                      if (value) {
                        document.location.href = '/';
                      }
                    }
                )
            } else if(res.data === "aen"){
                swal('이미 있는 닉네임입니다. 다른 닉네임을 입력해주세요')
                    .then((value) => {
                      if (value) {
                        document.location.href = '/signin';
                      }
                    }
                )
            } else if(res.data === "success"){
                swal('정상 가입 되었습니다. 로그인 페이지로 이동합니다.')
                    .then((value) => {
                      if (value) {
                        document.location.href = '/';
                      }
                    }
                )
            }
        })
        .catch()
    }
    const handleCancel = () => {
        swal('회원가입을 취소하였습니다.')
            .then((value) => {
            if (value) {
                document.location.href = '/';
            }
            }
        )
    }
    return (
        <Card className="signinCard">
            <Card.Header className="text-center" as="h5">회원가입</Card.Header>
            <Card.Body>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일주소</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={inputEmail} onChange={handleInputEmail}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" value={inputPw} onChange={handleInputPw}>
                        <Form.Label>닉네임</Form.Label>
                        <Form.Control type="text" placeholder="Enter nickname" value={inputNick} onChange={handleInputNick}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" value={inputPw} onChange={handleInputPw}>
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <div style={{marginLeft: "150px"}}>
                        <Button variant="outline-primary" size="sm" type="submit">
                            가입하기
                        </Button>
                        <Button style={{marginLeft: '10px'}} variant="outline-primary" size="sm" onClick={handleCancel}>
                            취소
                        </Button>
                    </div>
                </Form>
            </Card.Body>
            <div style={{float: 'right', marginTop: '10px', alignSelf: 'center'}}>
                <img
                    alt=""
                    src={require("../Assets/main_logo.png").default}
                    width="30"
                    height="30"
                />{' '}
                snowcode
            </div>
        </Card>
    );
};
export default SigninForm;