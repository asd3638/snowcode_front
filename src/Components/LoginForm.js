import React, {useState} from 'react';
import {Button, Card, Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import api from "../Api/api"
import "../App.css"
import swal from 'sweetalert'

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
                swal('등록된 사용자 정보가 없습니다. 아이디와 비밀번호를 확인하세요.')
                    .then((value) => {
                      if (value) {
                        document.location.href = '/'
                      }
                    }
                )
            } else if(res.data.email === inputEmail) {
                // id, pw 모두 일치 userId = userId1, msg = undefined
                sessionStorage.setItem('user_id',res.data.id);
                const id = res.data.id;
                document.location.href = `/main?id=${id}`
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
                        <div style={{float: "right"}}>
                            <Button variant="outline-primary" size="sm" type="submit">
                                로그인
                            </Button>
                            <Button variant="outline-primary" size="sm" style={{marginLeft: '5px'}} onClick={handleSigninBtn}>
                                회원가입
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
        </div>
    );
};
export default LoginForm;