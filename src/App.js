
import React from 'react';
import Weather from './Components/Weather';
import Front from './Components/Front';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Front/>
        <Route path="/weather" element={<Weather/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
