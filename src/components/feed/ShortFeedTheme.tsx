import Icon from '@components/common/icon/Icon';
import CaptionTag from '@components/common/text/CaptionTag';
import SubTitle from '@components/common/text/SubTitle';

import { IBoardContent } from '@/api/boards';
import theme from '@/styles/theme';

import * as S from './style';

interface Props {
    data: IBoardContent;
}
const ShortFeedTheme = ({ data }: Props) => {
    const { title, content, createTime } = data;

    return (
        <S.FeedContainer $isFeedUi={true} id='short-feed'>
            <S.FeedWrapper>
                <S.FeedTitleWrapper $isFeedUi={true}>
                    <SubTitle text={title} lan='KR' />
                </S.FeedTitleWrapper>
                <S.FeedButtonWrapper>
                    <CaptionTag text='sold out' as='M' color={theme.color.purple[500]} />|
                    <S.FeedButton>
                        <Icon name='i-message' color='#d9d9d9' />
                        <CaptionTag text={content.toString()} as='M' color='#d9d9d9' />
                    </S.FeedButton>
                </S.FeedButtonWrapper>
            </S.FeedWrapper>

            <S.FeedDate>
                <CaptionTag as='M' text={createTime} />
            </S.FeedDate>
        </S.FeedContainer>
    );
};
export default ShortFeedTheme;
