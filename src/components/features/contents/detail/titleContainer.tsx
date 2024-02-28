import FeedButton from '@/components/common/FeedButton/FeedButton';
import CaptionTag from '@/components/common/text/CaptionTag';
import ContentTag from '@/components/common/text/ContentTag';
import Heading from '@/components/common/text/Heading';
import * as S1 from '@/components/feed/style';
import theme from '@/styles/theme';

import * as S from '../style';

const TitleContainer = () => {
    const heart = '1';
    const title = '글의 제목입니다.';
    const comment = '4';
    const date = '2024-02-27';

    return (
        <S.TitleWrapper>
            <S.TopArea>
                <ContentTag text='회사' as='S' color={theme.color.purple[500]} />
                <S1.FeedButtonWrapper>
                    <FeedButton icon={'i-heart'} color={theme.color.purple[200]} count={heart} />
                    |
                    <FeedButton icon={'i-message'} color='#d9d9d9' count={comment} />
                </S1.FeedButtonWrapper>
            </S.TopArea>
            <Heading text={title} as='h1' />
            <CaptionTag as='M' text={date} color={'#B6B6B6'} />
        </S.TitleWrapper>
    );
};

export default TitleContainer;
