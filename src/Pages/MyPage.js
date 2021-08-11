import React from "react";
import User from '../Components/User';
import Header from '../Components/Header'
import StudyDMList from "../Components/StudyDMList";
 
const MyPage = () => {
  return (
      <div>
        <Header/>
        <div style={{float:'left'}}>
          <User />
        </div>
        <div style={{float:'right',
          marginRight:'100px',
          marginTop:'40px',
          }}>
          <StudyDMList />
        </div>
      </div>
  );
};
export default MyPage;