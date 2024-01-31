import * as S from './style';
interface Props {
    as: 'h3' | 'h4';
    text: string;
    color: string;
}
const SubTitle = ({ text, color, as }: Props) => {
    if (as === 'h3') {
        return <S.H3 color={color}>{text}</S.H3>;
    }
    if (as === 'h4') {
        return <S.H4 color={color}>{text}</S.H4>;
    }
};

export default SubTitle;
