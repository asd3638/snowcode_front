import {Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "../App.css"

function StudyDetail() {
    return (
        <Card style={{ width: '750px', display: 'block', marginLeft: '50px', marginTop: '50px', border: 'none'}}>
            <div style={{float: 'left'}}>
                <Card.Img
                variant="top" 
                alt=""
                src={require("../Assets/python.jpg").default}
                width="100"
                height="150" />
            </div>
            <div style={{float: 'left', width: '60%', marginLeft: '15px'}}>
                <Card.Body>
                    <Card.Title>파이썬 스터디</Card.Title>
                    <Card.Text>
                    파이썬 함께 공부할 팀원 구합니다.
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>분류: 스터디</ListGroupItem>
                        <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                        <ListGroupItem>총 인원: 5</ListGroupItem>
                        <ListGroupItem>이런 분 원해요!
                            <ul style={{marginTop: '10px'}}>
                                <li>파이썬이 주 언어이신 분</li>
                                <li>머신 러닝에 관심이 많으신 분</li>
                            </ul></ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </div>
        </Card>
    );
};
export default StudyDetail;