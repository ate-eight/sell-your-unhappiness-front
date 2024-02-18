import ArrowCircleUpIcon from '../icon/ArrowCircleUpIcon';
import * as S from './style';

interface Props {
    as: 'Default' | 'Comment';
    placeholder: string;
    value: string;
}

const Input = ({ as, placeholder, value }: Props) => {
    if (as === 'Comment') {
        return (
            <S.CommentInputWrapper>
                <S.Input placeholder={placeholder} value={value} />
                <ArrowCircleUpIcon color={value.length > 0 ? '#4700B9' : '#BDBCD9'} />
            </S.CommentInputWrapper>
        );
    } else {
        return (
            <S.DefaultInputWrapper>
                <S.Input placeholder={placeholder} value={value} />
            </S.DefaultInputWrapper>
        );
    }
};

export default Input;
