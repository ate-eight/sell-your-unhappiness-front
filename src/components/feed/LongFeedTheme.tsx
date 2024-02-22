import Icon from '@components/common/icon/Icon';
import CaptionTag from '@components/common/text/CaptionTag';
import ContentTag from '@components/common/text/ContentTag';
import SubTitle from '@components/common/text/SubTitle';

import theme from '@/styles/theme';

import { IFeed } from './Feed';
import * as S from './style';
interface Props {
    data: IFeed;
}
const LongFeedTheme = ({ data }: Props) => {
    const { title, heart, comment, content, date } = data;

    return (
        <S.FeedContainer isFeedUi={false} id='long-feed'>
            <S.FeedWrapper>
                <S.FeedTitleWrapper isFeedUi={false}>
                    <SubTitle text={title} lan='KR' />
                </S.FeedTitleWrapper>
                <S.FeedButtonWrapper>
                    <S.FeedButton>
                        <Icon name='i-heart' color={theme.color.purple[200]} />
                        <CaptionTag
                            text={heart.toString()}
                            as='M'
                            color={theme.color.purple[200]}
                        />
                    </S.FeedButton>
                    |
                    <S.FeedButton>
                        <Icon name='i-message' color='#d9d9d9' />
                        <CaptionTag text={comment.toString()} as='M' color='#d9d9d9' />
                    </S.FeedButton>
                </S.FeedButtonWrapper>
            </S.FeedWrapper>
            <S.FeedContent>
                <ContentTag as='M' text={content} />
            </S.FeedContent>
            <S.FeedDate>
                <CaptionTag as='M' text={date} />
            </S.FeedDate>
        </S.FeedContainer>
    );
};
export default LongFeedTheme;
