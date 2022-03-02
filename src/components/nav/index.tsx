import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import LoginComp from '../Login';
import './index.css';

const Nav = (): JSX.Element => {
  return (
    <div className="nav">
      <div className="nav-left"></div>
      <div className="nav-link">
      <NavLink to="/">首页</NavLink>
      <NavLink to="/">首页</NavLink>
      <NavLink to="/">首页</NavLink>
      </div>
      <div className="nav-right">
        <Search />
        <LoginComp />
      </div>
    </div>
  );
};

export default Nav;
