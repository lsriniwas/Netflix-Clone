import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Login/>
    </BrowserRouter>
  )
}

export default App;
