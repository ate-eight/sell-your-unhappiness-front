import { atom } from 'recoil';

interface IState {
    isLogin: boolean;
    token: string;
}

const initialValue: IState = {
    isLogin: false,
    token: localStorage.getItem('access-token') || '',
};

export const authState = atom({
    key: 'auth',
    default: initialValue,
});
