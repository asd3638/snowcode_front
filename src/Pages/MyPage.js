import React from "react";
import User from '../Components/User';
import Header from '../Components/Header'
 
class MyPage extends React.Component {
  render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idFromUrl = params.get('id');
    return (
        <div>
          <Header id={idFromUrl}/>
          <User/>
        </div>
    );
  }
};
export default MyPage;