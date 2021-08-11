import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import { WritePage } from "./Pages/index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/write" component={WritePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
