import { atom, selector } from 'recoil';
import { apiGetUserAccount } from '@api/index';
export const isLoginState = atom<boolean>({
  key: 'isLoginState',
  default: false,
});

export const userAccountState = atom({
  key: 'userAccountState',
  default: JSON.parse(localStorage.getItem('user')),
});


