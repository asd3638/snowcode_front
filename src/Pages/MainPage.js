import React from "react";
import Header from '../Components/Header';
import CardView from '../Components/CardView';
 
class MainPage extends React.Component {
  render() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idFromUrl = params.get('id');
    return (
      <div>
        <Header id={idFromUrl}/>
        <CardView/>
      </div>
    );
  }
};
export default MainPage;