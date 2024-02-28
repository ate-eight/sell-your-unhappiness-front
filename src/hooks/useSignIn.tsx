import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { fetchData } from '@/api';
import { authState } from '@/store/atom/authState';

interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
}

const useSignIn = () => {
    const navigate = useNavigate();
    const setAuth = useSetRecoilState(authState);

    /**
     * Google Login Logic
     */
    const googleLogin = async () => {
        alert('google Login');

        const res = await fetchData.post<ILoginResponse>(
            '/v1/user/login-test',
            JSON.stringify({
                email: 'test@email.com',
            }),
        );

        if (res) {
            const { common, data } = res.data;

            if (common.code === 200) {
                setAuth({ isLogin: true, token: data.accessToken });
                saveToken(data.accessToken, data.refreshToken);

                navigate('/main');
            } else {
                alert(common.message);
            }
        }
    };

    /**
     * RefreshToken storage save
     */
    const saveToken = (access: string, refresh: string) => {
        localStorage.setItem('access-token', access);
        localStorage.setItem('refresh-token', refresh);
    };

    return { googleLogin };
};

export default useSignIn;
