import Icon, { IconNames } from '../icon/Icon';
import CaptionTag from '../text/CaptionTag';
import ContentTag from '../text/ContentTag';
import * as S from './style';

export interface IAlert {
    text: string;
    date: string;
    id: number;
    icon: {
        iconName: IconNames;
        iconColor?: string;
        iconText: string;
    };
}
interface Props {
    data: IAlert;
}

const Alert = ({ data }: Props) => {
    const { text, date, icon } = data;
    return (
        <S.AlertContainer id='alert-item'>
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
