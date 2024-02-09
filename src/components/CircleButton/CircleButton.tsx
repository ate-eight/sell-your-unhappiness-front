import Icon, { IconNames } from '../icon/Icon';
import * as S from './style';

interface Props {
    iconName?: IconNames;
    iconColor?: string;
    iconSize?: number;
    color?: 'primary' | 'secondary';
    handleOnClick?: () => void;
}

const CircleButton = (props: Props) => {
    const { handleOnClick } = props;

    return (
        <S.Button $isPointer={!!handleOnClick}>
            <Icon name='i-edit-fill' color={'#fff'} size={48} />
        </S.Button>
    );
};

export default CircleButton;
