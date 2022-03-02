import React, { useState } from 'react';
import { LoginIcon } from '@assets/img/icons';
import SvgIcon from '../SvgIcon';

import './index.css';

const LoginComp = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="login" title="Login">
      <SvgIcon
        icon={LoginIcon}
        className="login-icon"
        onClick={() => console.log('123123')}
      />
      {show && <div>xxx</div>}
    </div>
  );
};

export default LoginComp;
