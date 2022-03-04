import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { apiLoginQRCodeKey } from '@api/index';
import './index.css';

import LoginLogo from '@assets/img/login-music.png';

const LoginPage = (): JSX.Element => {
  const [QRCodeKey, setQRCodeKey] = useState<string>('');
  const [QRUrl, setQRUrl] = useState<string>('');

  useEffect(() => {
    getQRCode();
  }, []);
  const getQRCode = (): void => {
    apiLoginQRCodeKey({ timestamp: new Date().getTime() }).then(({ data }) => {
      const { unikey } = data.data;
      setQRCodeKey(unikey);
      setQRUrl(`https://music.163.com/login?codekey=${unikey}`);
      checkQRCodeLogin();
    });
  };

  const checkQRCodeLogin = () => {
    console.log('123');
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <img src={LoginLogo} alt="" className="login-logo" />
        <div className="login-title">登录网易云账号</div>
        <div className="qr-code">
          {/* 这里的  url 要加上网易云接口获取的 key 才可以直接登录 */}
          <QRCode
            value={QRUrl}
            size={190}
            renderAs="svg"
            fgColor="#325fea"
            bgColor="#00000000"
          />
        </div>
        <p className="text">打开网易云音乐APP扫码登录</p>
      </div>
    </div>
  );
};

export default LoginPage;
