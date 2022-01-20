import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

import './index.css'

const Home = lazy(() => import('@page/home'))

const RouteFc = () => {

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Suspense>
  )
}

export default RouteFc;