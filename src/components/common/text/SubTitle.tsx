import * as S from './style';
interface Props {
    lan: 'KR' | 'ENG';
    text: string;
    color?: string;
}
const SubTitle = ({ text, color, lan }: Props) => {
    if (lan === 'ENG') {
        return <S.H4_ENG color={color}>{text}</S.H4_ENG>;
    }
    if (lan === 'KR') {
        return <S.H4_KR color={color}>{text}</S.H4_KR>;
    }
};

export default SubTitle;
