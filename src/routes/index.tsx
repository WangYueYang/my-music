import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "@page/home";

const RouteFc = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RouteFc;