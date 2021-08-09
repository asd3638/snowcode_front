import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/main" component={MainPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
