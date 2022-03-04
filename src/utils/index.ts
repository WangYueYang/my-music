export function setCookie(cookie: string) {
  const cookies = cookie.split(';;');
  cookies.map((cookie: string) => {
    document.cookie = cookie;
    const cookieKeyValue = cookie.split(';')[0].split('=');
    localStorage.setItem(`cookie-${cookieKeyValue[0]}`, cookieKeyValue[1]);
  });
}
