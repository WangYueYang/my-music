import { atom } from 'recoil';
import {Profile} from '@api/index';
export const isLoginState = atom<boolean>({
  key: 'isLoginState',
  default: false,
});

export const userAccountState = atom<Profile>({
  key: 'userAccountState',
  default: JSON.parse(localStorage.getItem('user') || '{}'),
});


