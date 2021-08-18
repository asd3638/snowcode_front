import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";

function CardView(props) {
  const study = props.study;

  const checkHeart = study.heart;
  const startDate = new Date(study.startLine.toString());
  const endDate = new Date(study.deadLine.toString());

  const formatDate = (date)=>{
    let formatted_date = date.getFullYear() + "년" + (date.getMonth() + 1) + "월" + date.getDate() + "일"
    return formatted_date;
  }

  let heart;
  if (checkHeart) {
    heart = <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
  } else {
    heart = <img width='40px' height= '40px' src='blankheart.jpg' alt="찜하기버튼"></img>;
  }

  let cardViewImg;
  if (props.study.category === "스터디") {
    cardViewImg = <Card.Img
            variant="top" 
            alt=""
            src={require("../Assets/스터디.png").default}
            />
  } else if (props.study.category === "공모전") {
    cardViewImg = <Card.Img
            variant="top" 
            alt=""
            src={require("../Assets/공모전.png").default}
            />
  } else {
    cardViewImg = <Card.Img
            variant="top" 
            alt=""
            src={require("../Assets/졸업작품.png").default}
            />
  }

  const onClick = () => {
    const getdisplay = this.props.getdisplay
    if(window.confirm('찜을 해제하시겠습니까? \n찜을 해제하면 목록에서 해당 모집글이 없어집니다'))
      getdisplay()
  }
  return (
    <Card id="card" style={{display:'block', width: '20rem'}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <div>
            {cardViewImg}
          </div>
          <Card.Body>
            <Card.Title>{study.title}</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: {study.category}</ListGroupItem>
                <ListGroupItem>기간: {formatDate(startDate) + "~" + formatDate(endDate)}</ListGroupItem>
                <ListGroupItem>총 인원: {study.people}</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', position:'absolute',bottom: '10px', right: '15px'}}
          onClick={onClick}>
          {heart}
        </div>
      </Card>
  );
}

export default CardView;
