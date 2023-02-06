import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Navbar from "./components/Navbar/navbar";

import Competition from "./components/Competitions/Competition/Competition";
import Competitions from "./components/Competitions/Competitions";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/competitions/:id" element={<Competition />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
