import { memo } from 'react';

import theme from '@/styles/theme';

import Icon, { IconNames } from '../icon/Icon';
import * as S from './style';

interface Props {
    iconName: IconNames;
    iconColor?: string;
    size?: 'lg' | 'sm';
    handleOnClick?: () => void;
}

const CircleButton = memo((props: Props) => {
    const { iconName, iconColor, size = 'lg', handleOnClick } = props;

    const iconSize = size === 'lg' ? 48 : 18;

    return (
        <S.Button
            $isPointer={!!handleOnClick}
            onClick={handleOnClick}
            $size={size}
            css={{ backgroundColor: `${theme.color.purple[800]}` }}
        >
            <Icon name={iconName} color={iconColor} size={iconSize} />
        </S.Button>
    );
});
CircleButton.displayName = 'CircleButton';

export default CircleButton;
