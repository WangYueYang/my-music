import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../Search';
import './index.css';

const Nav = (): JSX.Element => {
  return (
    <div className="nav">
      <div className="nav-left"></div>
      <NavLink to="/">首页</NavLink>
      <div className="nav-right">
        <Search />
        login
      </div>
    </div>
  );
};

export default Nav;
