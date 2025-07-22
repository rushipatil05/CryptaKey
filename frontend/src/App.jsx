import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<FrontPage/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
};

export default App;
