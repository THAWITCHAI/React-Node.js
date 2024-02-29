import Home from "../Component/Contents/Home";
import Contact from "../Component/Contents/Content";
import Login from "../Component/Contents/Login";
import Navbar from "../Component/Navbar/Navbar";
import Sidebar from "../Component/Sidebar/Sidebar";
// import Content from "../Component/Contents/Content";

import "./Mainlayout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function MainLayout() {
  return (
    <BrowserRouter>
      <section id="main-layout">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <div id="content" className="text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default MainLayout;
