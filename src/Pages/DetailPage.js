import React from "react";
import Header from '../Components/Header';
import StudyDetail from '../Components/StudyDetail'
import Owner from '../Components/Owner'
import Comment from '../Components/Comment'
const MainPage = () => {
  return (
    <div>
        <Header id={3}/>
        <div style={{display: 'block'}}>
            <div style={{float: 'left'}}>
                <div>
                    <StudyDetail/>
                </div>
                <div>
                    <Owner/>
                </div>
            </div>
            <div style={{float: 'left'}}>
                <Comment/>
            </div>
        </div>
    </div>
  );
};
export default MainPage;