import React, {useState, useEffect} from "react";
import User from '../Components/User';
import Header from '../Components/Header'
import StudyDMList from "../Components/StudyDMList";
import api from '../Api/api'

function MyPage(props) {
  const search = props.location.search;
  const params = new URLSearchParams(search);
  const idFromUrl = params.get('id');

  const [user, setUser] = useState({});

  useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await api.get(
              `/user/${idFromUrl}`
              );
              setUser(response.data); // 데이터는 response.data 안에 들어있습니다.
          } catch (e) {
          }
      };
      fetchUser();
  }, []);

  return (
      <div>
        <Header id={idFromUrl}/>
        <div style={{display: 'block'}}>
            <div style={{float: 'left'}}>
                <User 
                  user={user}
                  />
            </div>
            <div style={{float: 'left'}}>
                <StudyDMList/>
            </div>
        </div>
    </div>
  );
};
export default MyPage;