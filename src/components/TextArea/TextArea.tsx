import * as S from './style';

interface Props {
    placeholder: string;
    value: string;
}
const Input = ({ placeholder, value }: Props) => {
    return (
        <S.TextAreaWrapper>
            <S.TextArea placeholder={placeholder} value={value} />
        </S.TextAreaWrapper>
    );
};

export default Input;
