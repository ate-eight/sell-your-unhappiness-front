export const color = {
    purple: {
        50: '#EFE5F9',
        100: '#D4C9FF',
        200: '#B09EF8',
        300: '#9C6ADD',
        400: '#8646D6',
        500: '#6F1DCE',
        600: '#6518C8',
        700: '#560BBF',
        800: '#4700B9',
        900: '#44009C',
    },
    navy: {
        50: '#E5E4EF',
        100: '#BDBCD9',
        200: '#9291BF',
        300: '#6A68A5',
        400: '#4E4994',
        500: '#322C82',
        600: '#2D257A',
        700: '#251C6F',
        800: '#1D1264',
        900: '#10004F',
    },
    gray: {
        50: '#FFFFFF',
        100: '#F9F9F9',
        200: '#F2F2F2',
        300: '#E4E4E4',
        400: '#B6B6B6',
        500: '#949494',
        600: '#6C6C6C',
        700: '#5C5C5C',
        800: '#2F2F2F',
        900: '#1A1A1A',
    },
    red: {
        red: '#FF0E00',
    },
};

export const typography = {
    type: {
        Black: 'Pretendard_Black',
        Bold: 'Pretendard-Bold',
        ExtraBold: 'Pretendard_ExtraBold',
        Light: 'Pretendard-Light',
        Medium: 'Pretendard-Medium',
        Regular: 'Pretendard-Regular',
        SemiBold: 'Pretendard-SemiBold',
        Thin: 'Pretendard-Thin',
    },
    weight: {
        600: '600',
        500: '500',
        400: '400',
    },
    lineHeight: {
        l2: 40,
        l1: 32,
        m2: 26,
        m1: 24,
        s3: 20,
        s2: 18,
        s1: 12,
    },
    size: {
        s1: 10,
        s2: 12,
        s3: 14,
        m1: 16,
        m2: 18,
        l1: 24,
        l2: 28,
    },
};

const screen = {
    maxWidth: '475px',
    minWidth: '320px',
};

const theme = { color, typography, screen };

export default theme;
