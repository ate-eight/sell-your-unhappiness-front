import { fetchData } from '.';

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
}

export const fetchAuthLogin = async () => {
    try {
        const response = await fetchData.post<ILoginResponse>(
            '/v1/user/login-test',
            JSON.stringify({
                email: 'test@email.com',
            }),
        );
        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
};
