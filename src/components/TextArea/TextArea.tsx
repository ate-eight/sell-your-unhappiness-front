import * as S1 from '../Input/style';
import * as S from './style';
interface Props {
    placeholder: string;
    value: string;
}
const TextArea = ({ placeholder, value }: Props) => {
    return (
        <S1.DefaultInputWrapper>
            <S.TextArea placeholder={placeholder} value={value} />
        </S1.DefaultInputWrapper>
    );
};

export default TextArea;
