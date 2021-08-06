import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { LoginPage } from './Pages/index.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={LoginPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
