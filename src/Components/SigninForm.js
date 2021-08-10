import {Button, Card, Form } from 'react-bootstrap';
import "../App.css"

function SigninForm() {
    return (
        <Card className="signinCard">
            <Card.Header className="text-center" as="h5">회원가입</Card.Header>
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
                    <div style={{marginLeft: "150px"}}>
                        <Button variant="primary" size="sm" type="submit">
                            가입하기
                        </Button>
                        <Button style={{marginLeft: '10px'}}variant="primary" size="sm" type="submit">
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