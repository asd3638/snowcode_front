import { Button, Card, Badge, Popover, OverlayTrigger } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import api from "../Api/api";
import "../App.css";

const Owner = React.memo((props) => {
  const [user, setUser] = useState({});
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" style={{ textAlign: "center" }}>
        {user.nick}
      </Popover.Header>
      <Popover.Body style={{ textAlign: "center" }}>
        <Card.Img
          style={{ width: "130px" }}
          variant="top"
          alt=""
          src={require("../Assets/눈송이.png").default}
        />
        <div>
          <Card.Header>본인 소개</Card.Header>
          <Card.Text>
            <br />
            {user.info}
            <br />
            <br />
          </Card.Text>
        </div>
        <div>
          <Card.Header>학부</Card.Header>
          <Card.Text>
            <br />
            {user.major}
            <br />
            <br />
          </Card.Text>
        </div>
        <div>
          <Card.Header>깃헙 주소</Card.Header>
          <Card.Text>
            <br />
            {user.github}
          </Card.Text>
        </div>
      </Popover.Body>
    </Popover>
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseStudy = await api.get(`/study/${props.studyId}`);
        const responseUser = await api.get(
          `/user/${responseStudy.data.writter}`
        );
        setUser(responseUser.data);
      } catch (e) {}
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Card
        style={{
          width: "750px",
          display: "block",
          marginLeft: "50px",
          marginTop: "50px",
          border: "none",
        }}
      >
        <Card.Body style={{ float: "left" }}>
          <img
            alt=""
            src={require("../Assets/main_women.png").default}
            width="30"
            height="30"
            style={{ marginRight: "10px" }}
          />
          <span>{user.nick + "  "}</span>
        </Card.Body>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button
            style={{ float: "right", marginTop: "16px" }}
            variant="outline-primary"
            size="sm"
          >
            자세히보기
          </Button>
        </OverlayTrigger>
      </Card>
    </div>
  );
});

export default Owner;
