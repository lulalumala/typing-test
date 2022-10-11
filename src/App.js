import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Typing from "./pages/Typing";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/typing" element={<Typing/>} ></Route>
        <Route path="/result" element={<Result/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
