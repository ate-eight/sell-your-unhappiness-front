import theme from '@/styles/theme';

import Icon from '../icon/Icon';
import CaptionTag from '../text/CaptionTag';
import ContentTag from '../text/ContentTag';
import SubTitle from '../text/SubTitle';
import { FeedType } from './Feed';
import * as S from './style';
interface Props {
    data: FeedType;
}
const LongFeedTheme = ({ data }: Props) => {
    const { title, heart, comment, content, date } = data;

    return (
        <S.FeedContainer isFeedUi={false}>
            <S.FeedWrapper>
                <S.FeedTitleWrapper>
                    <SubTitle text={title} lan='KR' />
                </S.FeedTitleWrapper>
                <S.FeedButWrapper>
                    <S.FeedBut>
                        <Icon name='i-heart' color={theme.color.purple[200]} />
                        <CaptionTag
                            text={heart.toString()}
                            as='M'
                            color={theme.color.purple[200]}
                        />
                    </S.FeedBut>
                    |
                    <S.FeedBut>
                        <Icon name='i-message' color='#d9d9d9' />
                        <CaptionTag text={comment.toString()} as='M' color='#d9d9d9' />
                    </S.FeedBut>
                </S.FeedButWrapper>
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
