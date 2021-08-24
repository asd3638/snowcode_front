import React, {useState, useEffect} from "react";
import api from '../Api/api'
import Header from '../Components/Header';
import Modal from '../Components/Modal.js';
import StudyForm from '../Components/modal/StudyForm.js';
import CardView from '../Components/CardView';
import Footer from '../Components/Footer'
import { Row, Col, Carousel, Button } from "react-bootstrap";
 
function MainPage(props) {
  //유저 fetch
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const idFromUrl = params.get('id');

  //study fetch
  const [study, setStudy] = useState([]);
  const [modal, setModal] = useState({});
  const [heartStudyList, setHeartStudyList] = useState([]);

  const openModal = () => {
    setModal({modalOpen: true})
  }
  const closeModal = () => {
    setModal({ modalOpen: false })
  }

  useEffect(() => {
      const fetchStudy = async () => {
          try {
              const response = await api.get(
              `/study/all/${idFromUrl}`
              );
              setStudy(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
          }
      };
      const fetchHeartStudy = async () => {
          try {
              const response = await api.get(
              `/heart/heartStudyAllList/${idFromUrl}`
              );
              setHeartStudyList(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
          }
      };
      fetchStudy();
      fetchHeartStudy();
  }, []);
  const fetchCategoryStudy = async (category) => {
      try {
          const response = await api.get(
            `/study/category/${category}/${idFromUrl}`
          );
          setStudy(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
      }
  };
  const fetchCategoryStudyAll = async () => {
      try {
          const response = await api.get(
            `/study/all/${idFromUrl}`
          );
          setStudy(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
      }
  };

  return (
    <div>
      <Header id={idFromUrl} isMainPage={true} handleCategory={fetchCategoryStudy} handleCategoryAll={fetchCategoryStudyAll}/>
      <Carousel
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/studyComputer.jpg").default}
              alt="First slide"
              style={{
                height: "500px"
              }}
            />
            <Carousel.Caption>
              <h3>함께 성장할 동료를 찾아요</h3>
              <p>#우리함께 #성장해요 #지금 #바로 #프로젝트에 #참여하세요</p>
              <Button variant="light" size="lg" onClick={openModal}>프로젝트 모임 생성하기</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/studyTogether.jpg").default}
              alt="Second slide"
              style={{
                height: "500px"
              }}
            />

            <Carousel.Caption>
              <h3>혼자 공부하기 힘들시죠? 같이 해요</h3>
              <p>#같이하면 #목표를 #달성할 #확률이 #커진대요</p>
              <Button variant="light" size="lg" onClick={openModal}>스터디 그룹 생성하기</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../Assets/studyAlone.jpg").default}
              alt="Third slide"
              style={{
                height: "500px"
              }}
            />

            <Carousel.Caption>
              <h3>모. 각. 코</h3>
              <p>#모여서 #각자 #코딩 #시작해보세요</p>
              <Button variant="light" size="lg" onClick={openModal}>모각코 그롭 생성하기</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      <Row 
        xs={1}
        md={5}
        className="g-6"
        style={{marginLeft: "50px", marginTop: "50px", marginRight: "50px", marginBottom: "50px"}}
        >
        {study.map((study) => {
          return (
            <Col style={{marginBottom: "25px", display: 'flex', width: 'maxWidth', flexWrap: 'wrap'}}>
              <CardView study={study} id={idFromUrl} isHeart={heartStudyList.includes(study.id)} isMyPage={false}/>
            </Col>
          )})
        }
      </Row>
      <Footer/>
      <Modal open={modal.modalOpen}>
        <StudyForm
          userId={idFromUrl}
          close={closeModal}>
        </StudyForm>
      </Modal>

    </div>
  )
}
export default MainPage;