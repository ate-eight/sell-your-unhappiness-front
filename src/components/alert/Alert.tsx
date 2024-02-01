import HeartIcon from '../icon/HeartIcon';
import CaptionTag from '../text/CaptionTag';
import ContentTag from '../text/ContentTag';
import * as S from './style';

interface Props {
    text: string;
    date: string;
}

const Alert = (props: Props) => {
    const { text, date } = props;
    return (
        <S.AlertContainer>
            <S.ContentWrapper>
                <S.IconWrapper>
                    <HeartIcon />
                </S.IconWrapper>
                <S.TextWrapper>
                    <ContentTag as='M' text={text} color='' />
                    <CaptionTag as='M' text={date} color='' />
                </S.TextWrapper>
            </S.ContentWrapper>
        </S.AlertContainer>
    );
};

export default Alert;
