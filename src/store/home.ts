import { selector } from 'recoil';
import { Personalized } from '@api/api-type';
import { apiGetPersonalized } from '@api/index';

export const personalizedList = selector<Personalized[]>({
  key: 'personlizedList',
  get: async () => {
    const { result } = await apiGetPersonalized({ limit: 10 });
    return result || [];
  },
});
