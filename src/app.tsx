import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteFc from "./routes";
import Nav from "@components/nav";

import '@assets/css/default.css'
import '@assets/css/common.css'


const App = () => {

  return (
    <Router>
      <Nav />
      <RouteFc />
    </Router>
  )
}

export default App;