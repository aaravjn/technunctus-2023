import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About"
import Team from "./pages/Team"
import Events from "./pages/Events"
//Components


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/OurTeam" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
