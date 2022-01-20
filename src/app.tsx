import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteFc from "./routes";


const App = () => {

  return (
    <Router>
      <RouteFc />
    </Router>
  )
}

export default App;