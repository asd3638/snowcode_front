import React from 'react';
import Modal from './Modal.js';
import UserForm from './modal/UserForm.js';
import Profile from './Profile.js';

export class User extends React.Component {
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
    state={
      img:'./profile.jpg',
      info:'',
      major:'',
      github: ''
    }
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
              <UserForm
                img={this.state.img}
                info={this.state.info}
                major={this.state.major}
                github={this.state.github}
                onUpdate = {this.handleUpdate}
                close={ this.closeModal }>
              </UserForm>
            </Modal>
          </>
        )
    }
}

export default User;