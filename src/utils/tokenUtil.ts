import { jwtDecode, JwtPayload } from 'jwt-decode';

export const tokenExpireCheck = (token: string) => {
    try {
        const decodedToken: JwtPayload = jwtDecode(token);

        // 유효 시간 확인
        const currentTime = Date.now() / 1000;

        if (!decodedToken.exp) {
            return false;
        }

        if (decodedToken.exp < currentTime) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error('유효하지 않은 토큰입니다.');
    }
};
