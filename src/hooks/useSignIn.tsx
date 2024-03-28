import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { fetchAuthLogin } from '@/api/auth';
import { authState } from '@/store/atom/authState';

const useSignIn = () => {
    const navigate = useNavigate();
    const setAuth = useSetRecoilState(authState);

    /**
     * Google Login Logic
     */
    const googleLogin = async () => {
        alert('google Login');

        const res = await fetchAuthLogin();

        if (res) {
            const { common, data } = res;

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
