import React, { Component } from 'react';
import './App.css'
import Modal from './component/Modal';
import ModalForms from './component/ModalForms';
import Profile from './component/Profile';

export class App extends Component {

  // modal 창 열고 닫기
  state = {
    modalOpen: false,
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }
  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  // img = 프로필 이미지(초기에 state 값으로 기본 프로필 이미지가 세팅됨)
  // info = 본인소개
  // major = 학부
  // github = 깃헙 주소
  state={
    img:'./profile.jpg',
    info:'',
    major:'',
    github: ''
  }

  // App.js의 handleUpdate 함수는
  // ModalForms.js에 onUpdate라는 이름으로 props로 전달된다
  // 그리고 ModalForms에서는 handleUpdate(onUpdate) 함수를 호출하여
  // App.js의 state 값에 새로운 값을 넣어준다(랜더링해준다)
  // 이는 Profile.js에 props로 전달되어 프로필 컴포넌트 내역에 나타나게 된다
  handleUpdate = (newimg,newinfo, newmajor, newgithub) => {
    this.setState({
      img : this.state.img.replace(this.state.img, newimg)
    })
    this.setState({
      info: this.state.info.replace(this.state.info, newinfo) })
    this.setState({
      major: this.state.major.replace(this.state.major, newmajor) })
    this.setState({
      github: this.state.github.replace(this.state.github, newgithub)})
  }

  render() {
      return (
        <>
        <Profile
        img={this.state.img}
        info={this.state.info}
        major={this.state.major}
        github={this.state.github}
        onUpdate = {this.handleUpdate}
        open={ this.openModal }
        ></Profile>
          <Modal open={ this.state.modalOpen }>
            <ModalForms
            img={this.state.img}
            info={this.state.info}
            major={this.state.major}
            github={this.state.github}
            onUpdate = {this.handleUpdate}
            close={ this.closeModal }>
            </ModalForms>
          </Modal>
        </>
      )
  }
}

export default App;

