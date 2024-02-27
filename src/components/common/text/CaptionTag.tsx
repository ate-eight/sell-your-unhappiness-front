import * as S from './style';
interface Props {
    as: 'M' | 'S';
    text: string;
    color?: string;
}
const CaptionTag = ({ text, color, as }: Props) => {
    if (as === 'M') {
        return <S.CaptionM $color={color}>{text}</S.CaptionM>;
    }
    if (as === 'S') {
        return <S.CaptionS $color={color}>{text}</S.CaptionS>;
    }
};

export default CaptionTag;
