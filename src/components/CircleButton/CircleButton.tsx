import Icon, { IconNames } from '../icon/Icon';
import * as S from './style';

interface Props {
    iconName: IconNames;
    iconColor?: string;
    size?: 'lg' | 'sm';
    handleOnClick?: () => void;
}

const CircleButton = (props: Props) => {
    const { iconName, iconColor, size = 'lg', handleOnClick } = props;

    const iconSize = size === 'lg' ? 48 : 18;

    return (
        <S.Button $isPointer={!!handleOnClick} onClick={handleOnClick} $size={size}>
            <Icon name={iconName} color={iconColor} size={iconSize} />
        </S.Button>
    );
};

export default CircleButton;
