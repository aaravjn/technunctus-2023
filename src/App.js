import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Team from "./pages/Team"
import Events from "./pages/Events"
import Sponsors from "./pages/Sponsors"
import Merch from "./pages/Merch"
//Components


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/OurTeam" element={<Team />} />
          <Route path="/Sponsors" element={<Sponsors />} />
          <Route path="/Merch" element={<Merch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
