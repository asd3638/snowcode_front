import React, {useState} from 'react';
import {Button, Card, Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import api from "../Api/api"
import "../App.css"

function LoginForm() {
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
        api({
            method: 'post',
            url: 'auth/login',
            data: {
                email: inputEmail,
                password: inputPw
            }
            })
        .then(res => {
            if(res.data === "fail"){
                // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                alert('등록된 사용자 정보가 없습니다. 아이디와 비밀번호를 확인하세요.');
                document.location.href = '/'
            } else if(res.data.email === inputEmail) {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                sessionStorage.setItem('user_id', res.data);
                document.location.href = '/main'
            }
        })
        .catch()
    }

    return (
        <div>
            <Card className="loginCard">
                <Card.Header className="text-center" as="h5">
                    로그인
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={onSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>이메일주소</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={inputEmail} onChange={handleInputEmail}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={inputPw} onChange={handleInputPw}/>
                        </Form.Group>
                        <Button variant="outline-primary" size="sm" type="submit">
                            로그인
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft: '5px'}} onClick={handleSigninBtn}>
                            회원가입
                        </Button>
                        <div style={{float: "right"}}>
                            <Button href="http://localhost:8001/api/auth/GOOGLE" variant="outline-primary" size="sm" type="button">
                                <FcGoogle/>
                                구글로그인
                            </Button>
                            <Button href="http://localhost:8001/api/auth/KAKAO" variant="outline-warning" size="sm" type="button" style={{marginLeft: '5px'}}>
                                <RiKakaoTalkFill/>
                                카카오로그인
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
        </div>
    );
};
export default LoginForm;