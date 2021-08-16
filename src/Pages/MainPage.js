import React from "react";
import Header from '../Components/Header';
import CardView from '../Components/CardView';
 
const MainPage = () => {
  console.log(window.sessionStorage.getItem('user_id'));
  return (
    <div>
      <Header/>
      <CardView />
    </div>
  );
};
export default MainPage;