import React, { Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import UserCard from './UserCard';

class StudyDMList extends Component {

  state= {
    display: true
  }

  getdisplay = () => {
    this.setState({
      display : !this.state.display
    })
  }

  render() {
    const {display} = this.state
    return (
      <div style={{
        width: '1000px',
        height: 'auto'
      }}>
        <Tabs defaultActiveKey="study" id="uncontrolled-tab-example" className="mb-3" 
        style={{borderColor: 'grey'}}>
          <Tab eventKey="study" title="내가 찜한 스터디" style={{color: 'black', display: 'flex',flexWrap: 'wrap'}}>
          {display ? <UserCard getdisplay={this.getdisplay}></UserCard> : null}
          </Tab>
          <Tab eventKey="DMlist" title="DM 목록">
            <div>asdfasdf</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default StudyDMList;