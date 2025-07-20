import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App