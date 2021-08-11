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
            console.log(res)
            console.log('res.data.userId :: ', res.data.userId)
            console.log('res.data.msg :: ', res.data.msg)
            // if(res.data.userId === undefined){
            //     // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
            //     console.log('======================',res.data.msg)
            //     alert('입력하신 id 가 일치하지 않습니다.')
            // } else if(res.data.userId === null){
            //     // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
            //     console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
            //     alert('입력하신 비밀번호 가 일치하지 않습니다.')
            // } else if(res.data.userId === inputEmail) {
            //     // id, pw 모두 일치 userId = userId1, msg = undefined
            //     console.log('======================','로그인 성공')
            //     sessionStorage.setItem('user_id', res.data.userId)
            // }
            // // 작업 완료 되면 페이지 이동(새로고침)
            // document.location.href = '/'
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