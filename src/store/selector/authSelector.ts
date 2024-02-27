import { selector } from 'recoil';

import { decoderToken } from '@/utils/tokenUtil';

import { authState } from '../atom/authState';

const authSelector = selector({
    key: 'authSelector',
    get: ({ get }) => {
        const value = get(authState);

        const isLogin = decoderToken(value.token) || false;

        return { ...value, isLogin: isLogin };
    },
});

export default authSelector;
