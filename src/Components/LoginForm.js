import {Button, Card, Form } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import "../App.css"

function LoginForm() {
    return (
        <Card className="loginCard">
            <Card.Header className="text-center" as="h5">로그인</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>이메일주소</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" size="sm" type="submit">
                        로그인
                    </Button>
                    <div style={{float: "right"}}>
                        <Button href="http://localhost:8080/auth/GOOGLE" variant="outline-primary" size="sm" type="button">
                            <FcGoogle/>
                            구글로그인
                        </Button>
                        <Button href="http://localhost:8080/auth/KAKAO" variant="outline-warning" size="sm" type="button">
                            <RiKakaoTalkFill/>
                            카카오로그인
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};
export default LoginForm;