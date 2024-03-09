import * as S from './style';

interface IDivider {
    size?: number;
    color?: number;
}

const Divider = ({ size, color }: IDivider) => {
    return <S.Divider $size={size} $color={color} />;
};

export default Divider;
