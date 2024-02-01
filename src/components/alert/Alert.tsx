import Icon, { IconNames } from '../icon/Icon';
import CaptionTag from '../text/CaptionTag';
import ContentTag from '../text/ContentTag';
import * as S from './style';

interface Props {
    text: string;
    date: string;
    icon: {
        iconName: IconNames;
        iconColor?: string;
        iconText: string;
    };
}

const Alert = (props: Props) => {
    const { text, date, icon } = props;
    return (
        <S.AlertContainer>
            <S.ContentWrapper>
                <S.IconWrapper>
                    <Icon name={icon.iconName} color={icon.iconColor} />
                    <CaptionTag as='S' text={icon.iconText} />
                </S.IconWrapper>
                <S.TextWrapper>
                    <ContentTag as='M' text={text} />
                    <CaptionTag as='M' text={date} />
                </S.TextWrapper>
            </S.ContentWrapper>
        </S.AlertContainer>
    );
};

export default Alert;
