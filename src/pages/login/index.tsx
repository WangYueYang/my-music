import React, { useState, useEffect, useRef } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import {
  apiLoginQRCodeKey,
  apiCheckQRCodeLogin,
  apiGetUserAccount,
} from '@api/index';
import { setCookie } from '@utils/index';
import { isLoginState } from '@store/index';
import './index.css';

import LoginLogo from '@assets/img/login-music.png';

type LoginType = {
  code: number;
  cookie: string;
};

const LoginPage = (): JSX.Element => {
  const [QRCodeKey, setQRCodeKey] = useState<string>('');
  const [QRUrl, setQRUrl] = useState<string>('');
  const [text, setText] = useState<string>('打开网易云音乐APP扫码登录');
  const navigate = useNavigate();
  let timer: NodeJS.Timeout | null = null;
  const timerRef: { current: NodeJS.Timeout | null } = useRef(null);
  const setLoginType = useSetRecoilState(isLoginState);

  useEffect(() => {
    getQRCode();
    return () => {
      clearInterval(timerRef.current as NodeJS.Timeout);
    };
  }, []);

  const getQRCode = (): void => {
    apiLoginQRCodeKey().then(({ data }) => {
      const { unikey } = data;
      setQRCodeKey(unikey);
      setQRUrl(`https://music.163.com/login?codekey=${unikey}`);
    });
  };

  useEffect(() => {
    checkQRCodeLogin();
  }, [QRCodeKey]);

  const handleLoginResponse = (res: LoginType): void => {
    if (res.code === 200) {
      setCookie(res.cookie);
      navigate('/');
      setLoginType(true);
      getUserAccount();
    }
  };

  const getUserAccount = (): void => {
    apiGetUserAccount().then(({ profile }) => {
      localStorage.setItem('user', JSON.stringify(profile));
    });
  };

  const checkQRCodeLogin = (): void => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    timer = setInterval(() => {
      if (!QRCodeKey) return;
      apiCheckQRCodeLogin(QRCodeKey).then(({ code, cookie }) => {
        const res: LoginType = {
          code: 0,
          cookie: '',
        };
        switch (code) {
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
            res.code = 200;
            res.cookie = cookie.replace('HTTPOnly', '');
            handleLoginResponse(res);
            break;
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
