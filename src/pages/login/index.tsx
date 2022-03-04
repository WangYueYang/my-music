import React, { useState, useEffect, useRef, ReactElement } from 'react';
import QRCode from 'qrcode.react';
import { apiLoginQRCodeKey, apiCheckQRCodeLogin } from '@api/index';
import './index.css';

import LoginLogo from '@assets/img/login-music.png';

const LoginPage = (): JSX.Element => {
  const [QRCodeKey, setQRCodeKey] = useState<string>('');
  const [QRUrl, setQRUrl] = useState<string>('');
  const [text, setText] = useState<string>('打开网易云音乐APP扫码登录');

  let timer: NodeJS.Timeout | null = null;
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    getQRCode();
    return () => {
      clearInterval(timerRef.current as NodeJS.Timeout);
    };
  }, []);

  const getQRCode = (): void => {
    apiLoginQRCodeKey().then(({ data }) => {
      const { unikey } = data.data;
      setQRCodeKey(unikey);
      setQRUrl(`https://music.163.com/login?codekey=${unikey}`);
    });
  };

  useEffect(() => {
    checkQRCodeLogin();
  }, [QRCodeKey]);

  const checkQRCodeLogin = (): void => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    timer = setInterval(() => {
      if (!QRCodeKey) return;
      apiCheckQRCodeLogin(QRCodeKey).then(({ data }) => {
        switch (data.code) {
          case 800:
            getQRCode();
            setText('二维码已失效，请重新扫码');
            break;
          case 801:
            setText('扫描成功，请在手机上确认登录');
            break;
          case 803:
            clearInterval(timerRef.current as NodeJS.Timeout);
            setText('登录成功，请稍等...');
        }
      });
    }, 1000);
    timerRef.current = timer;
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
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default LoginPage;
