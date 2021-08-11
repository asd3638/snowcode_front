import React from "react";
import Header from '../Components/Header';
import CardView from '../Components/CardView';
 
const MainPage = () => {
  console.log(window.sessionStorage.getItem('user_id'));
  // alert('등록된 사용자 정보가 없습니다. 아이디와 비밀번호를 확인하세요.');
  // document.location.href = '/';
  return (
    <div>
      <Header/>
      <CardView/>
    </div>
  );
};
export default MainPage;