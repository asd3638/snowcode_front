import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import { LoginPage, SigninPage, MainPage, DetailPage } from './Pages/index.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/login" component={LoginPage}/>
        <Route path="/signin" component={SigninPage}/>
        <Route path="/main" component={MainPage}/>
        <Route path="/detail" component={DetailPage}/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
