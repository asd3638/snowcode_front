import React, {useState} from 'react';
import {Button, Card, Form } from 'react-bootstrap';
import api from '../Api/api'
import "../App.css"

function SigninForm() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    const handleSigninBtn = () => {
        document.location.href = '/signin'
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('click login')
        console.log('ID : ', inputEmail)
        console.log('PW : ', inputPw)
        api.post('auth/join', {
            email: inputEmail,
            password: inputPw
        })
        .then(res => {
            if(res.data === "already exist"){
                alert('입력하신 정보로 회원이 이미 존재합니다.');
                document.location.href = '/';
            } else if(res.data === "success"){
                alert('정상 가입 되었습니다. 로그인 페이지로 이동합니다.')
                document.location.href = '/';
            }
        })
        .catch()
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
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div style={{marginLeft: "150px"}}>
                        <Button variant="outline-primary" size="sm" type="submit">
                            가입하기
                        </Button>
                        <Button style={{marginLeft: '10px'}} variant="outline-primary" size="sm" type="submit">
                            취소
                        </Button>
                    </div>
                </Form>
                <div style={{float: 'right', marginTop: '10px'}}>
                    <img
                        alt=""
                        src={require("../Assets/main_logo.png").default}
                        width="30"
                        height="30"
                    />{' '}
                    snowcode
                </div>
            </Card.Body>
        </Card>
    );
};
export default SigninForm;