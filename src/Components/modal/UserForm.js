import React, {useState, useEffect} from 'react';
import { Form, Button} from 'react-bootstrap';
import api from '../../Api/api'
function UserForm (props) {
  // props로 App.js의 state 값을 받아온다
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [img, setImg] = useState(''); 
  const [info, setInfo] = useState(''); 
  const [major, setMajor] = useState(''); 
  const [github, setGithub] = useState(''); 

  const a = props.close;

  useEffect(
    () => {
      setId(props.user.id);
      setNick(props.user.nick);
      setImg(props.user.img);
      setInfo(props.user.info);
      setMajor(props.user.major);
      setGithub(props.user.github);
    },[props.user]
  );

  // 본인소개, 학부, 깃헙 주소 입력란에 변화를 줄 때 실행되는 함수
  // props로 받아온 App.js의 state(info, major, github) 값을 변경해준다
  const handleInfo = (e) => {
    setInfo(e.target.value)
  }
  const handleMajor = (e) => {
    setMajor(e.target.value)
  }
  const handleGithub = (e) => {
    setGithub(e.target.value)
  }

  // 수정 버튼을 누르면 실행되는 함수
  // 변경된 state값을 props로 받아온 
  // handleUpdate(onUpdate) 함수에 넣어준고
  // modal 창이 닫힌다
  const handleEdit = () => {
    const patchUser = async () => {
      try {
        await api({
          url: `/user/${id}`,
          method: 'patch',
          data: {
            nick,
            img,
            info,
            major,
            github
          }
        }).then(res => {
          document.location.href=`/mypage?id=${id}`
        })
      } catch (e) {
      }
    };
    patchUser();
    a();
  }
  return (
    <div>
        <h5 style={{textAlign: "center"}}>회원정보 수정</h5><br/>
          <Form name="폼 이름" method="post" action="애플리케이션 주소">
              <Form.Group>
                  <Form.Label column lg={4}>
                  본인 소개
                  </Form.Label>
                  <Form.Control 
                      as="textarea" 
                      rows={3} 
                      name="info" 
                      value={info}
                      onChange = {e => handleInfo(e)}  
                      placeholder='본인소개'/>
              </Form.Group>
              <Form.Group>
                  <Form.Label column lg={4}>
                  학부
                  </Form.Label>
                  <Form.Control 
                  name="major"
                  value={major}
                  onChange = {e => handleMajor(e)} 
                  type="text" 
                  placeholder='학부' />
              </Form.Group>
              <Form.Group>
                  <Form.Label column lg={4}>
                  깃헙 주소
                  </Form.Label>
                  <Form.Control  
                  name="github" 
                  value={github}
                  onChange = {e => handleGithub(e)}  
                  type="text" 
                  placeholder='깃허브 주소' />
              </Form.Group>
          </Form>
          <Button variant="outline-primary" type="submit" onClick = {handleEdit} >
              수정
          </Button>
          <Button variant="outline-primary" type="submit" onClick={() => a()}>
              취소
          </Button>
    </div>
  )
}
export default UserForm;