import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { authState } from '@/store/atom/authState';

const useSignIn = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authState);

    /**
     * Google Login Logic
     */
    const googleLogin = async () => {
        alert('google Login');

        const res = await axios({
            method: 'POST',
            url: '/api/v1/user/login-test',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                email: 'test@email.com',
            },
        });

        if (res) {
            const { data } = res;

            if (data.common.code === 200) {
                alert('로그인 완');
                setAuth({ ...auth, isLogin: true });
                navigate('/main');
            } else {
                alert(data.common.message);
            }
        }
    };

    return { googleLogin };
};

export default useSignIn;
