import ArrowCircleUpIcon from '../icon/ArrowCircleUpIcon';
import * as S from './style';

interface Props {
    as: 'Default' | 'Comment';
    placeholder: string;
    value: string;
    height?: string;
    handleOnChange?: (value: string) => void;
}

const Input = (props: Props) => {
    const { as, placeholder, value, handleOnChange } = props;
    if (as === 'Comment') {
        return (
            <S.CommentInputWrapper $height={'51px'} $padding={'15px 14px'}>
                <S.Input
                    placeholder={placeholder}
                    defaultValue={value}
                    onChange={(e) => handleOnChange?.(e.target.value)}
                />
                <ArrowCircleUpIcon color={value.length > 0 ? '#4700B9' : '#BDBCD9'} />
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
