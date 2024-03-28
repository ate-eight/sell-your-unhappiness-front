import { selector } from 'recoil';

import { fetchAuthLogin } from '@/api/auth';
import { tokenExpireCheck } from '@/utils/tokenUtil';

import { authState } from '../atom/authState';

const authSelector = selector({
    key: 'authSelector',
    get: async ({ get }) => {
        const value = get(authState);

        const isLogin = tokenExpireCheck(value.token) || false;

        // 엑세스 토큰 재발급
        if (!isLogin) {
            const isRefreshToken = tokenExpireCheck(localStorage.getItem('refresh-token') ?? '');
            if (isRefreshToken) {
                const res = await fetchAuthLogin();

                if (res) {
                    const { data } = res;

                    localStorage.setItem('access-token', data.accessToken);
                    return { isLogin: true, token: data.accessToken };
                }
            } else {
                localStorage.removeItem('access-token');
                localStorage.removeItem('refresh-token');
            }
        }

        return { ...value, isLogin: isLogin };
    },
});

export default authSelector;
