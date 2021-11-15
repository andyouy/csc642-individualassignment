import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Survey from "./Pages/Survey"
import Result from "./Pages/Result"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Survey/>}/>
        <Route path="/survey" element={<Survey/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;
