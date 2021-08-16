import React, { Component } from 'react';
import { Card,ListGroup,ListGroupItem} from 'react-bootstrap';

class UserCard extends Component {

  render() {

    const onClick = () => {
      const getdisplay = this.props.getdisplay
      if(window.confirm('찜을 해제하시겠습니까? \n찜을 해제하면 목록에서 해당 모집글이 없어집니다'))
        getdisplay()
    }

    return ( 
      <>
        <div style={{marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem", marginBottom: "3rem"}}>
        <Card id="card" style={{display:'block', width:'16em',}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
        </div>
      </Card>
      </div>

      <div style={{marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem", marginBottom: "3rem"}}>
        <Card id="card" style={{display:'block', width:'16em',}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
        </div>
      </Card>
      </div>

      <div style={{marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem", marginBottom: "3rem"}}>
        <Card id="card" style={{display:'block', width:'16em',}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
        </div>
      </Card>
      </div>

      <div style={{marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem", marginBottom: "3rem"}}>
        <Card id="card" style={{display:'block', width:'16em',}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
        </div>
      </Card>
      </div>

      <div style={{marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem", marginBottom: "3rem"}}>
        <Card id="card" style={{display:'block', width:'16em',}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
        </div>
      </Card>
      </div>

      <div style={{marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem", marginBottom: "3rem"}}>
        <Card id="card" style={{display:'block', width:'16em',}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
        </div>
      </Card>
      </div>

      <div style={{marginLeft: "2rem", marginRight: "2rem", marginTop: "3rem", marginBottom: "3rem"}}>
        <Card id="card" style={{display:'block', width:'16em',}}>
        <Card.Link href="#first" style={{textDecoration:'none', position:'relative',}}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>파이썬 공부</Card.Title>
            <Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>분류: 스터디</ListGroupItem>
                <ListGroupItem>기간: 2020/07/07 ~ 2020/09/07</ListGroupItem>
                <ListGroupItem>총 인원: 5</ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card.Link>
        <div style={{display: 'block', width: '40px', height: '40px', position:'absolute',bottom: '10px', right: '10px'}}
          onClick={onClick}>
          <img width='40px' height= '40px' src='fillheart.jpg' alt="찜하기버튼"></img>
        </div>
      </Card>
      </div>

      </>
    );
  }
}

export default UserCard;