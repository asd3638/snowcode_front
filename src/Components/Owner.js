import {Button, Card, Badge } from 'react-bootstrap';
import "../App.css"

function Owner() {
    return (
        <Card style={{ width: '750px', display: 'block', marginLeft: '50px', marginTop: '50px', border: 'none'}}>
            <a href="#mypage">
                <Card.Body style={{float: 'left'}} as="h5">
                <img
                    alt=""
                    src={require("../Assets/main_women.png").default}
                    width="30"
                    height="30"
                />{' '}작성자 닉네임</Card.Body>
            </a>
            <Card.Body style={{float: 'left'}}>
                <Badge pill bg="secondary">
                    python
                </Badge>{' '}
                <Badge pill bg="secondary">
                    machine learning
                </Badge>{' '}
            </Card.Body>
            <Button style={{float: 'right', marginTop: '16px'}} variant="outline-primary" size="sm">DM 보내기</Button>
            </Card>
    );
};
export default Owner;