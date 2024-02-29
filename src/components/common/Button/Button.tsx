import { Interpolation, Theme } from '@emotion/react';

import * as S from './style';

interface Props {
    label: string;
    color?: 'primary' | 'secondary';
    full?: boolean;
    disabled?: boolean;
    handleOnClick?: () => void;
    styleProps?: Interpolation<Theme>;
}

const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

const Button = (props: Props) => {
    const {
        label,
        color = 'primary',
        full = false,
        disabled = false,
        handleOnClick,
        styleProps,
    } = props;
    const strLangCheck = korean.test(label) ? 'ko' : 'en';

    return (
        <S.Button
            lang={strLangCheck}
            $color={color}
            $full={full}
            onClick={handleOnClick}
            $disabled={disabled}
            disabled={disabled}
            css={styleProps}
        >
            {label}
        </S.Button>
    );
};

export default Button;
