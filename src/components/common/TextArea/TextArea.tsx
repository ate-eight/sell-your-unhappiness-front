import * as S1 from '../Input/style';
import * as S from './style';
interface Props {
    placeholder: string;
    value?: string;
    handleOnChange?: (value: string) => void;
    maxLength?: number;
}
const TextArea = (props: Props) => {
    const { placeholder, value, handleOnChange, maxLength } = props;
    return (
        <S1.DefaultInputWrapper>
            <S.TextArea
                placeholder={placeholder}
                defaultValue={value}
                onChange={(e) => handleOnChange?.(e.target.value)}
                maxLength={maxLength}
            />
        </S1.DefaultInputWrapper>
    );
};

export default TextArea;
