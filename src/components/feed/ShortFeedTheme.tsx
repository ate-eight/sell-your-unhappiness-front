import Icon from '@components/common/icon/Icon';
import CaptionTag from '@components/common/text/CaptionTag';
import SubTitle from '@components/common/text/SubTitle';

import theme from '@/styles/theme';

import { IFeed } from './Feed';
import * as S from './style';

interface Props {
    data: IFeed;
}
const ShortFeedTheme = ({ data }: Props) => {
    const { title, comment, date } = data;

    return (
        <S.FeedContainer isFeedUi={true} id='short-feed'>
            <S.FeedWrapper>
                <S.FeedTitleWrapper isFeedUi={true}>
                    <SubTitle text={title} lan='KR' />
                </S.FeedTitleWrapper>
                <S.FeedButtonWrapper>
                    <CaptionTag text='sold out' as='M' color={theme.color.purple[500]} />|
                    <S.FeedButton>
                        <Icon name='i-message' color='#d9d9d9' />
                        <CaptionTag text={comment.toString()} as='M' color='#d9d9d9' />
                    </S.FeedButton>
                </S.FeedButtonWrapper>
            </S.FeedWrapper>

            <S.FeedDate>
                <CaptionTag as='M' text={date} />
            </S.FeedDate>
        </S.FeedContainer>
    );
};
export default ShortFeedTheme;
