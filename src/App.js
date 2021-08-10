import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import { LoginPage, SigninPage } from './Pages/index.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={LoginPage}/>
        <Route path="/signin" component={SigninPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
