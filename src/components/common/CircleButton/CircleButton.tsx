import { Interpolation, Theme } from '@emotion/react';
import { memo } from 'react';

import Icon, { IconNames } from '../icon/Icon';
import * as S from './style';

interface Props {
    iconName: IconNames;
    iconColor?: string;
    size?: 'lg' | 'sm';
    handleOnClick?: () => void;
    styleProps?: Interpolation<Theme>;
}

const CircleButton = memo((props: Props) => {
    const { iconName, iconColor, size = 'lg', handleOnClick, styleProps } = props;

    const iconSize = size === 'lg' ? 48 : 18;

    return (
        <S.Button
            $isPointer={!!handleOnClick}
            onClick={handleOnClick}
            $size={size}
            css={styleProps}
        >
            <Icon name={iconName} color={iconColor} size={iconSize} />
        </S.Button>
    );
});
CircleButton.displayName = 'CircleButton';

export default CircleButton;
