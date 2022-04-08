import Cookies from 'js-cookie';

export function setCookie(cookie: string): void {
  const cookies = cookie.split(';;');
  cookies.map((cookie: string) => {
    document.cookie = cookie;
    const cookieKeyValue = cookie.split(';')[0].split('=');
    localStorage.setItem(`cookie-${cookieKeyValue[0]}`, cookieKeyValue[1]);
  });
}

export function getCookie(key: string): string | null {
  return Cookies.get(key) ?? localStorage.getItem(`cookie-${key}`);
}

// MUSIC_U 只在登录时才有
export function isLogin(): boolean {
  return getCookie('MUSIC_U') !== undefined;
}

export function removeCookie(key: string) {
  localStorage.removeItem(`cookie-${key}`);
}

