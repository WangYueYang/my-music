import { selector } from 'recoil';
import { PersonalizedType } from '@api/api-type';
import { apiGetPersonalized } from '@api/index';

export const personalizedList = selector<PersonalizedType>({
  key: 'personlizedList',
  get: async () => {
    const res = await apiGetPersonalized({ limit: 10 });
    return res.data || [];
  },
});
