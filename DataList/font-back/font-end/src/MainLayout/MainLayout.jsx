import Home from "../Component/Contents/Home";
import AddFoods from "../Component/Contents/AddFoods";
import Profile from "../Component/Contents/Profile";
import AddTables from "../Component/Contents/AddTables";
import Finish from "../Component/Contents/Finish";
import Contact from "../Component/Contents/Content";
import Login from "../Component/Contents/Login";
import Navbar from "../Component/Navbar/Navbar";
import Sidebar from "../Component/Sidebar/Sidebar";
// import Content from "../Component/Contents/Content";

import "./Mainlayout.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wait from "../Component/Contents/wait";
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
            <Route path="/wait" element={<Wait/>} />
            <Route path="/AddFoods" element={<AddFoods/>} />
            <Route path="/AddTables" element={<AddTables/>} />
            <Route path="/Finish" element={<Finish/>} />
            <Route path="/wait" element={<Wait/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default MainLayout;
