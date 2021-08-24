import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import { LoginPage, SigninPage, MainPage, DetailPage, AddStudyPage, MyPage} from './Pages/index.js'

function App() {
  return (
    <span className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/main" component={MainPage}/>
        <Route path="/detail" component={DetailPage}/>
        <Route path="/write" component={AddStudyPage}/>
        <Route path="/mypage" component={MyPage}/>
      </BrowserRouter>
    </span>
    
  );
}
export default App;

