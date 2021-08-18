import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";
import api from '../Api/api'

function CardView(props) {
  const study = props.study;
  const userId = props.id;
  const isHeart = props.isHeart;
  const isMyPage = props.isMyPage;

  const startDate = new Date(study.startLine.toString());
  const endDate = new Date(study.deadLine.toString());

  const formatDate = (date)=>{
    let formatted_date = date.getFullYear() + "년" + (date.getMonth() + 1) + "월" + date.getDate() + "일"
    return formatted_date;
  }

  let heart;
  if (isHeart) {
    heart = <img width='40px' height= '40px' src='fillheart.jpg' alt="찜버튼"></img>
  } else {
    heart = <img width='40px' height= '40px' src='blankheart.jpg' alt="찜 해제 버튼"></img>;
  }
  if (isMyPage) {
    heart = <></>
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
    if (isHeart) {
      console.log("click fill")
      const deleteHeart = async () => {
          try {
              await api.delete(
                `/heart`, {data: {
                  userId: userId,
                  studyId: study.id,
                }}
                ).then(res => {
                  alert(`${study.title} 스터디 찜 취소가 완료되었습니다!\n 내가 찜한 스터디 목록에서 삭제됩니다.`)
                  document.location.href=`/main?id=${userId}`
                })
          } catch (e) {
          }
      };
      deleteHeart();
    } else {
      console.log("click blank")
      const addHeart = async () => {
          try {
              await api.post(
                `/heart/create`, {
                  userId: userId,
                  studyId: study.id,
                }
              ).then(res => {
                  alert(`${study.title} 스터디 찜 완료되었습니다!\n 내가 찜한 스터디 목록을 통해 확인가능합니다.`)
                  document.location.href=`/main?id=${userId}`
                })
          } catch (e) {
          }
      };
      addHeart();
    }
  }
  return (
    <Card id="card" style={{display:'block', width: '20rem'}}>
        <Card.Link href={"/detail?id=" + userId + "&studyId=" + study.id} style={{textDecoration:'none', position:'relative',}}>
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
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          {heart}
        </div>
      </Card>
  );
}

export default CardView;
