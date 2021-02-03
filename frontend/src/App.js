import "./App.css";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import {Routes} from "./Routes/Routes"
import { Login } from "./Pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
=======
import Routes from "./Routes/Routes";

function App() {
    return (
        <div className="App">
            <Routes />
        </div>
    );
>>>>>>> c5302f16f2adfb2a308676c570f4490b48df8b62
}

export default App;
