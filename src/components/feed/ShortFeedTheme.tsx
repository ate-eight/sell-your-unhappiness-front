import Icon from '@common/icon/Icon';
import CaptionTag from '@common/text/CaptionTag';
import SubTitle from '@common/text/SubTitle';

import theme from '@/styles/theme';

import { FeedType } from './Feed';
import * as S from './style';

interface Props {
    data: FeedType;
}
const ShortFeedTheme = ({ data }: Props) => {
    const { title, comment, date } = data;

    return (
        <S.FeedContainer isFeedUi={true}>
            <S.FeedWrapper>
                <S.FeedTitleWrapper>
                    <SubTitle text={title} lan='KR' />
                </S.FeedTitleWrapper>
                <S.FeedButWrapper>
                    <CaptionTag text='sold out' as='M' color={theme.color.purple[500]} />|
                    <S.FeedBut>
                        <Icon name='i-message' color='#d9d9d9' />
                        <CaptionTag text={comment.toString()} as='M' color='#d9d9d9' />
                    </S.FeedBut>
                </S.FeedButWrapper>
            </S.FeedWrapper>

            <S.FeedDate>
                <CaptionTag as='M' text={date} />
            </S.FeedDate>
        </S.FeedContainer>
    );
};
export default ShortFeedTheme;
