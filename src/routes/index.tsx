import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';

const Home = lazy(() => import('../pages/home'));
const LoginPage = lazy(() => import('../pages/login'));

const RouteFc = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default RouteFc;
