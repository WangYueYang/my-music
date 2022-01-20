import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteFc from "./routes";


import '@assets/css/default.css'


const App = () => {

  return (
    <Router>
      <RouteFc />
    </Router>
  )
}

export default App;