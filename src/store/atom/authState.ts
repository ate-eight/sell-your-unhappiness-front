import { atom } from 'recoil';

const initialValue = {
    accessToken: '',
    isLogin: false,
};

export const authState = atom({
    key: 'auth',
    default: initialValue,
});
