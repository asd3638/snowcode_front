import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import { LoginPage, SigninPage, MainPage, DetailPage, MyPage} from './Pages/index.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/main" component={MainPage}/>
        <Route path="/detail" component={DetailPage}/>
        <Route path="/mypage" component={MyPage}/>
      </BrowserRouter>
    </div>
    
  );
}
export default App;

