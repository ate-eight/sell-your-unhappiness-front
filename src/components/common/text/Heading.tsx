import * as S from './style';
interface Props {
    as: 'h1' | 'h2';
    text: string;
    color?: string;
}
const Heading = ({ text, color, as }: Props) => {
    if (as === 'h1') {
        return <S.H1 $color={color}>{text}</S.H1>;
    }
    if (as === 'h2') {
        return <S.H2 $color={color}>{text}</S.H2>;
    }
};

export default Heading;
