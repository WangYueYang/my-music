import React, { useState, useEffect, MouseEvent } from 'react';
import { LoginIcon2 } from '@assets/img/icons';
import SvgIcon from '../SvgIcon';

import './index.css';

const avatar =
  'http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60';
const LoginComp = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const hideLogin = () => {
    setShow(false);
  };

  window.addEventListener('click', hideLogin, true);

  useEffect(() => {
    return () => {
      window.removeEventListener('click', hideLogin);
    };
  });

  const showLogin = (e: MouseEvent<HTMLImageElement>): void => {
    e.stopPropagation();
    setShow(true);
  };

  return (
    <div className="login" title="Login">
      <img src={avatar} alt="" className="login-avatar" onClick={showLogin} />
      {show && (
        <div className="login-nav">
          <div className="login-tag">
            <SvgIcon icon={LoginIcon2} className="login-icon" />
            登录
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginComp;
