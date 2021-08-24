import React from "react";
import Header from '../Components/Header';
import StudyDetail from '../Components/StudyDetail'
import Owner from '../Components/Owner'
import Comment from '../Components/Comment'
const DetailPage = (props) => {
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const userId = params.get('id');
    const studyId = params.get('studyId');
    return (
        <div>
            <Header id={userId}/>
            <div style={{display: 'block'}}>
                <div style={{float: 'left'}}>
                    <div>
                        <StudyDetail studyId={studyId} userId={userId}/>
                    </div>
                    <div>
                        <Owner studyId={studyId}/>
                    </div>
                </div>
                <div style={{float: 'left'}}>
                    <Comment user_id={userId} study_id={studyId}/>
                </div>
            </div>
        </div>
    );
};
export default DetailPage;