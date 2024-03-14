import ArrowCircleUpIcon from '../icon/ArrowCircleUpIcon';
import * as S from './style';

interface Props {
    as: 'Default' | 'Comment';
    placeholder: string;
    value: string;
    height?: string;
    handleOnChange?: (value: string) => void;
    handleOnClick?: () => void;
}

const Input = (props: Props) => {
    const { as, placeholder, value, handleOnChange, handleOnClick } = props;
    if (as === 'Comment') {
        return (
            <S.CommentInputWrapper $height={'51px'}>
                <S.Input
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => handleOnChange?.(e.target.value)}
                />
                <S.SubmitButton
                    onClick={handleOnClick}
                    disabled={value.length === 0}
                    $disabled={value.length === 0}
                >
                    <ArrowCircleUpIcon size={32} color={value.length > 0 ? '#4700B9' : '#BDBCD9'} />
                </S.SubmitButton>
            </S.CommentInputWrapper>
        );
    } else if (as === 'Default') {
        return (
            <S.DefaultInputWrapper $height={'51px'} $padding={'15px 14px'}>
                <S.Input placeholder={placeholder} defaultValue={value} />
            </S.DefaultInputWrapper>
        );
    }
};

export default Input;
