// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Component/Contents/Home";
// import Login from "./Component/Contents/Login";
import MainLayout from "./MainLayout/MainLayout";
function App() {
  return (
    // <BrowserRouter>
    //   <MainLayout />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/" exact={true} element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    // </BrowserRouter>
    <>
      <MainLayout />
    </>
  );
}

export default App;
