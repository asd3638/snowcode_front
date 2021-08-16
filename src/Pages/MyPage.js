import React from "react";
import User from '../Components/User';
import Header from '../Components/Header'
import StudyDMList from "../Components/StudyDMList";
 
const MyPage = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
          <div style={{position:'absolute', left:'0px'}}>
            <User />
          </div>
          <div style={{position:'absolute', right:'0px',
            marginRight:'100px',
            marginTop:'40px',
            }}>
            <StudyDMList />
    </div>
    </>
  );
};
export default MyPage;