import React, { Component } from 'react';

class Profile extends Component {
  render() {
    // props로 받아온 랜더링 된 값을 프로필 컴포넌트 내역에 나타낸다
    const {img,info, major,github,open}=this.props

    return (
      <div>
        <div><img src={img} alt="프로필 사진" width="100" height="100" /></div>
        <button onClick={open}> 회원 정보 수정</button>
        <div>본인 소개: <br /> {info}</div>
        <div>학부: <br/> {major}</div>
        <div>깃헙 주소: <br /> {github}</div>
      </div>
    );
  }
}

export default Profile;