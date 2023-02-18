import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/navbar";
import Competition from "./components/Competitions/Competition/Competition";
import Competitions from "./components/Competitions/Competitions";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competitions/:id" element={<Competition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
