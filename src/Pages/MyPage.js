import React from "react";
import User from '../Components/User';
import Header from '../Components/Header'
import StudyDMList from "../Components/StudyDMList";
 
class MyPage extends React.Component {
  render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idFromUrl = params.get('id');
    return (
        <div>
          <Header id={idFromUrl}/>
          <div style={{display: 'block'}}>
              <div style={{float: 'left'}}>
                  <User/>
              </div>
              <div style={{float: 'left'}}>
                  <StudyDMList/>
              </div>
          </div>
      </div>
    );
  }
};
export default MyPage;