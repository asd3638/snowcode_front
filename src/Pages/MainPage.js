import React, {useState, useEffect} from "react";
import api from '../Api/api'
import Header from '../Components/Header';
import CardView from '../Components/CardView';
import { Row, Col, Card } from "react-bootstrap";
 
function MainPage(props) {
  //유저 fetch
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const idFromUrl = params.get('id');

  //study fetch
  const [study, setStudy] = useState([]);

  useEffect(() => {
      const fetchStudy = async () => {
          try {
              const response = await api.get(
              `/study`
              );
              setStudy(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
          }
      };
      fetchStudy();
  }, []);
  return (
    <div>
      <Header id={idFromUrl}/>
      <Row 
        xs={1}
        md={5}
        className="g-6"
        style={{marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "50px"}}
        >
        {study.map((study) => {
          return (
            <Col style={{marginBottom: "25px"}}>
              <CardView study={study}/>
            </Col>
          )})
        }
      </Row>
    </div>
  )
}
export default MainPage;