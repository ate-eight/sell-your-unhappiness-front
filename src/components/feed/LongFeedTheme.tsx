import Icon from '@components/common/icon/Icon';
import CaptionTag from '@components/common/text/CaptionTag';
import ContentTag from '@components/common/text/ContentTag';
import SubTitle from '@components/common/text/SubTitle';

import { IBoardContent } from '@/api/boards';
import theme from '@/styles/theme';

import * as S from './style';
interface Props {
    data: IBoardContent;
}
const LongFeedTheme = ({ data }: Props) => {
    const { title, content, createTime } = data;

    return (
        <S.FeedContainer $isFeedUi={false} id='long-feed'>
            <S.FeedWrapper $isFeedUi={false}>
                <S.FeedTitleWrapper>
                    <SubTitle text={title} lan='KR' />
                </S.FeedTitleWrapper>
                <S.FeedButtonWrapper>
                    <S.FeedButton>
                        <Icon name='i-heart' color={theme.color.purple[200]} />
                        <CaptionTag text={'10'} as='M' color={theme.color.purple[200]} />
                    </S.FeedButton>
                    |
                    <S.FeedButton>
                        <Icon name='i-message' color='#d9d9d9' />
                        <CaptionTag text={'10'} as='M' color='#d9d9d9' />
                    </S.FeedButton>
                </S.FeedButtonWrapper>
            </S.FeedWrapper>
            <S.FeedContent>
                <ContentTag as='M' text={content} />
            </S.FeedContent>
            <S.FeedDate>
                <CaptionTag as='M' text={createTime} />
            </S.FeedDate>
        </S.FeedContainer>
    );
};
export default LongFeedTheme;
