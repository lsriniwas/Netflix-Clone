import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {Routes} from "./Routes/Routes"
import { Login } from "./Pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

export default App;

