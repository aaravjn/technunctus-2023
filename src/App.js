import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
//Components
import Navbar from "./components/navbar";
import Competition from "./components/Competitions/Competition/Competition";
import Competitions from "./components/Competitions/Competitions";
import Footer from "./components/Footer/footer";
import Team from "./components/Team/team";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
