import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="" element={} />
    <Route path="" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
