import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";

class StudyDMList extends Component {
  state = {
    display: true,
  };
  getdisplay = () => {
    this.setState({
      display: !this.state.display,
    });
  };
  render() {
    const { display } = this.state;
    return (
      <div
        style={{
          width: "auto",
          display: "block",
          marginLeft: "50px",
          marginTop: "70px",
          marginRight: "50px",
          border: "none",
          textAlign: "center",
        }}
      >
        <Tabs
          defaultActiveKey="study"
          id="uncontrolled-tab-example"
          className="mb-3"
          style={{ borderColor: "grey" }}
        >
          <Tab
            eventKey="study"
            title="내가 찜한 스터디"
            style={{ color: "black", display: "flex", flexWrap: "wrap" }}
          ></Tab>
          <Tab eventKey="DMlist" title="DM 목록">
            <div>dm목록</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default StudyDMList;
