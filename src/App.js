import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Events from "./components/Events/Events";

//Components
import Navbar from "./components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
