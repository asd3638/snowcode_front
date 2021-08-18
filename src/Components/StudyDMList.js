import React, {useState, useEffect} from "react";
import api from '../Api/api'
import CardView from '../Components/CardView';
import {Tabs, Tab, Row, Col} from 'react-bootstrap';

function StudyDMList (props) {
  //study fetch
  const [study, setStudy] = useState([]);
  const [heartStudy, setHeartStudy] = useState([]);
  const className = props.isMyPage ? 'g-3' : 'g-6';

  useEffect(() => {
      const fetchStudy = async () => {
          try {
              const response = await api.get(
                `/study/user/${props.userId}`
              );
              setStudy(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
          }
      };
      const fetchHeartStudy = async () => {
          try {
              const response = await api.get(
                `heart/heartStudyAll/${props.userId}`
              );
              setHeartStudy(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
          }
      };
      fetchStudy();
      fetchHeartStudy();
  }, []);
  console.log(study);

  return (
    <div style={{
      width: "auto",
      display: "block",
      marginLeft: "50px",
      marginTop: "70px",
      marginRight: "50px",
      border: "none",
      textAlign: "center"
    }}>
      <Tabs defaultActiveKey="heartStudy" id="uncontrolled-tab-example" className="mb-3" 
      style={{borderColor: 'grey'}}>
        <Tab eventKey="heartStudy" title="내가 찜한 스터디">
          <Row 
            xs={1}
            md={5}
            className={className}
            style={{marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "50px"}}
            >
            {heartStudy.map((study) => {
              return (
                <Col style={{marginBottom: "25px"}}>
                  <CardView study={study} id={props.userId} isMyPage={props.isMyPage} isHeart={true}/>
                </Col>
              )})
            }
          </Row>
        </Tab>
        <Tab eventKey="myStudy" title="내 스터디">
          <Row 
            xs={1}
            md={5}
            className={className}
            style={{marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "50px"}}
            >
            {study.map((study) => {
              return (
                <Col style={{marginBottom: "25px"}}>
                  <CardView study={study} id={props.userId} isMyPage={true}/>
                </Col>
              )})
            }
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
}

export default StudyDMList;