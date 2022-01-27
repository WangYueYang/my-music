import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

const Nav = (): JSX.Element => {
  return (
    <div className="nav">
      <NavLink to="/">首页</NavLink> 
    </div>
  )  
}

export default Nav;