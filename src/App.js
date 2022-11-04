import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Typing from "./pages/Typing";
import Signup from "./pages/Signup";
import Modals from "./components/Modals";

function App() {
  const [timeSelected, setTimeSelected]=useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home timeSelected={ timeSelected } setTimeSelected={setTimeSelected} />}></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/typing" element={<Typing timeSelected={ timeSelected } setTimeSelected={setTimeSelected}/>} ></Route>
        <Route path="/result" element={<Result/>} ></Route>
        <Route path="/signup" element={<Signup/>} ></Route>
        <Route path="/modals" element={<Modals />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
