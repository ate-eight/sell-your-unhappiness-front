import * as S from './style';
interface Props {
    as: 'M' | 'S';
    text: string;
    color?: string;
}
const ContentTag = ({ text, color, as }: Props) => {
    if (as === 'M') {
        return <S.BodyM $color={color}>{text}</S.BodyM>;
    }
    if (as === 'S') {
        return <S.BodyS $color={color}>{text}</S.BodyS>;
    }
};

export default ContentTag;
