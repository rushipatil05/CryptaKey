import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FrontPage from "./pages/FrontPage";
import {ToastContainer} from "react-toastify"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<FrontPage />}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App